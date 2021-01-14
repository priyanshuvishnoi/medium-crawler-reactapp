import React from 'react';
import './App.css';
import Form from './Components/Form';
import Home from './Components/Home';

const App = () => {
  return (
    <React.Fragment>
      <div class="context">
        <section className="container">
          <Form />
          <div className="row">
            <h3 className="mt-4 mb-4 ml-3">Results: </h3>
          </div>
          <Home />
        </section>
      </div>

      <div class="area">
        <ul class="circles">
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
