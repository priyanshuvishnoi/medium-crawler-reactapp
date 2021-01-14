import React from 'react';

const Form = () => {
  return (
    <React.Fragment>
      <ul className="products">
        <li className="row card mb-4">
          <div className="col left">
            <div className="thumbnail"></div>
            <div className="detail">
              <div className="name">
                <h2>Why Japanese Home Cooking Makes Healthy Feel Effortless</h2>
              </div>
              <div className="description">By Kaki Okumura</div>
            </div>
            <div className="col right">
              <div className="price">5 Min Read</div>
              <div className="price">12 Jan 2020</div>
            </div>
          </div>
        </li>
        <li className="row card mb-4">
          <div className="col left">
            <div className="thumbnail"></div>
            <div className="detail">
              <div className="name">
                <h2>Why Japanese Home Cooking Makes Healthy Feel Effortless</h2>
              </div>
              <div className="description">By Kaki Okumura</div>
            </div>
            <div className="col right">
              <div className="price">5 Min Read</div>
              <div className="price">12 Jan 2020</div>
            </div>
          </div>
        </li>
        <li className="row card mb-4">
          <div className="col left">
            <div className="thumbnail"></div>
            <div className="detail">
              <div className="name">
                <h2>Why Japanese Home Cooking Makes Healthy Feel Effortless</h2>
              </div>
              <div className="description">By Kaki Okumura</div>
            </div>
            <div className="col right">
              <div className="price">% min Read</div>
              <div className="price">12 Jan 2020</div>
            </div>
          </div>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default Form;
