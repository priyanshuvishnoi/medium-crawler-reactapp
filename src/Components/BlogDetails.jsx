import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import { PulseLoader } from 'react-spinners';
import ErrorComponent from './Error';
import { local } from '../config.json';

const BlogDetails = () => {
  document.title = 'Blog Details';
  const location = useLocation();
  const { url, details, creator, title } = location.state;
  const [tags, setTags] = useState([]);
  const [showError, setShowError] = useState(false);
  const [para, setPara] = useState({ paragraph: [] });
  const [loading, setLoading] = useState(false);
  const [responses, setResponses] = useState('');
  const [claps, setClaps] = useState('');
  const regex = new RegExp('^[a-zA-Z0-9_]*$');

  const fetchBlogs = url => {
    let axiosConfig = {
      method: 'post',
      url: local + '/api/v1/medium/crawlBlogs',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      data: { blogUrl: url },
    };

    setLoading(true);
    axios(axiosConfig)
      .then(res => {
        setLoading(false);

        if (res.data.data.paragraph == '') {
          setShowError(true);
        } else {
          setPara(res.data.data);
        }
        setTags(res.data.data.tags);
        setClaps(res.data.data.clap);
        setResponses(res.data.data.response);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => fetchBlogs(url), [url]);

  return (
    <React.Fragment>
      <table className="table text-white">
        <tbody>
          <tr>
            <th scope="col">Creator</th>
            <td>{creator}</td>
          </tr>
          <tr>
            <th scope="col">Title</th>
            <td>{title}</td>
          </tr>
          <tr>
            <th scope="col">Details</th>
            <td>{details}</td>
          </tr>
          <tr>
            <th scope="col">URL</th>
            <td>
              <a href={url} className="text-light" target="blank">
                {url}
              </a>
            </td>
          </tr>
          <tr>
            <th scope="col">Responses</th>
            <td>{responses}</td>
          </tr>
          <tr>
            <th scope="col">Claps</th>
            <td>{claps}</td>
          </tr>
          <tr>
            <th scope="col">Tags</th>
            <td>
              {tags.map((tag, i) =>
                regex.test(tag) &&
                (tag !== 'About' ||
                  tag !== 'about' ||
                  tag !== 'ABOUT' ||
                  tag !== 'HOME' ||
                  tag !== 'Home' ||
                  tag !== 'home') ? (
                  <Link
                    key={i}
                    to={{ pathname: '/tag', state: { newtag: tag } }}
                  >
                    <button className="suggestion-button">{tag}</button>
                  </Link>
                ) : null
              )}
            </td>
          </tr>
        </tbody>
      </table>
      <h2 className="mb-3 fw-bold blog-title">{title}</h2>
      {loading === true ? (
        <React.Fragment>
          <h2>Crawling...</h2>
          <PulseLoader
            loading={loading}
            css={`
              marginleft: ;
            `}
            height={70}
            radius={20}
            width={5}
            margin={3}
            color="#ffffff"
          />
        </React.Fragment>
      ) : showError ? (
        <ErrorComponent
          error={
            'Cannot crawl blog content because it is on different subdomain and have different css-classes and html-tags, visit url provided above to check orginal blog.'
          }
        />
      ) : (
        para.paragraph.map((paragraph, index) =>
          paragraph != 'Written by' ? (
            <p key={index} style={{ fontSize: '20px' }}>
              {paragraph}
            </p>
          ) : null
        )
      )}
    </React.Fragment>
  );
};

export default BlogDetails;
