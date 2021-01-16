import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import { PulseLoader } from 'react-spinners';
import ErrorComponent from './Error';
import { local } from '../config.json';
import Form from './Form';

const NewTag = () => {
  const [blogs, setBlogs] = useState([]);
  const [showError, setShowError] = useState(false);
  const [tagname, setTagName] = useState('');
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const { newtag } = location.state;

  let start, end;
  const fetchData = tag => {
    setLoading(true);
    start = Date.now();
    axios
      .get(`${local}/api/v1/medium/tag/${tag.trim().toLowerCase()}`)
      .then(res => {
        end = Date.now();
        console.log(`${end - start} ms`);
        setLoading(false);
        if (res.data.data == null || res.data.data === 'invalid tag') {
          setTagName(tag);
          setShowError(true);
        } else {
          // console.log(blogs);
          setBlogs(res.data.data);
          setShowError(false);
        }
      })
      .catch(err => console.log(err));
  };
  const getData = () => {
    setLoading(true);
    // start = Date.now();
    // console.log(newtag);
    axios
      .get(`${local}/api/v1/medium/tag/${newtag.toLowerCase().trim()}`)
      .then(res => {
        // end = Date.now();
        // console.log(end - start);
        setLoading(false);
        if (res.data.data == null || res.data.data === 'invalid tag') {
          setTagName(newtag);
          setShowError(true);
        } else {
          setBlogs(res.data.data);
          setShowError(false);
        }
      })
      .catch(err => console.log(err));
  };

  useEffect(getData, [newtag]);

  if (loading === true) {
    return (
      <React.Fragment>
        <div className="header">
          <Form fetchData={fetchData} />
          <div className="row"></div>
        </div>
        <h2>Crawling...</h2>
        <PulseLoader
          loading={loading}
          height={70}
          radius={20}
          width={5}
          margin={3}
          color="#ffffff"
        />
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <div className="header">
          <Form fetchData={fetchData} />
          <div className="row"></div>
        </div>
        {showError ? (
          <ErrorComponent
            error={`This tag "${tagname}" does not contain any blog.`}
          />
        ) : (
          <div className="products">
            <ul>
              {blogs.map(blog => (
                <Link
                  to={{
                    pathname: '/details',
                    state: {
                      url: blog.blogurl,
                      details: blog.details,
                      creator: blog.creator,
                      title: blog.title,
                    },
                  }}
                  key={blog.id}
                >
                  <li className="row card mb-4">
                    <div className="col left">
                      <div className="detail">
                        <div className="name">
                          <h2>{blog.title}</h2>
                        </div>
                        <div className="description">By {blog.creator}</div>
                      </div>
                      <div className="col right">
                        <div className="price">
                          {blog.details.split(',')[0]}
                        </div>
                        <div className="price">
                          {blog.details.split(',')[1]}
                        </div>
                      </div>
                    </div>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        )}
      </React.Fragment>
    );
  }
};

export default NewTag;
