import React from 'react';

const Form = () => {
  return (
    <React.Fragment>
      <form className="promotion mb-3">
        <input type="text" placeholder="Enter tag" />
        <button type="submit" />
      </form>

      <div className="row ml-1">
        <button className="suggestion-button">Cooking</button>
        <button className="suggestion-button">Gaming</button>
        <button className="suggestion-button">Driving</button>
      </div>
    </React.Fragment>
  );
};

export default Form;
