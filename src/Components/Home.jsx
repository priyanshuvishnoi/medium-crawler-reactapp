import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Form from './Form';

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchData = () => {
    axios
      .get('http://localhost:8000/api/v1/medium/tag/cooking')
      .then(res => setBlogs(res.data.data))
      .catch(err => console.log(err));
  };

  const getBlog = url => {
    console.log(url);
  };

  useEffect(() => fetchData(), []);

  return (
    <React.Fragment>
      <div className="header" >
        <Form />
        <div className="row">
          <h3 className="mt-4 mb-4 ml-3">Results: </h3>
        </div>
      </div>
      <div className="products">
        <ul>
          {blogs.map(blog => (
            <li className="row card mb-4" onClick={()=>getBlog(blog.blogurl)} key={blog.id}>
              <div className="col left">
                <div className="detail">
                  <div className="name">
                    <h2>{blog.title}</h2>
                  </div>
                  <div className="description">By {blog.creator}</div>
                </div>
                <div className="col right">
                  <div className="price">{blog.details.split(',')[0]}</div>
                  <div className="price">{blog.details.split(',')[1]}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Home;
