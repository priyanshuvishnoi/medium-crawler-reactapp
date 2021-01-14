import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import BlogDetails from './Components/BlogDetails';

import Home from './Components/Home';

const App = () => {
  return (
    <React.Fragment>

      <div className="area">
      <div className="context">
        <section className="container">
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/details" component={BlogDetails} />
            </Switch>
          </Router>
        </section>
      </div>
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default App;
