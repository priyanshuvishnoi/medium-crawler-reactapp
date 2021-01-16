import React from 'react';
import ErrorImage from '../assets/images/error.png';

const ErrorComponent = ({ error }) => {
  return (
    <div>
      <h3 className="text-warning" style={{ marginTop: '50px' }}>
        {error}
      </h3>
      <div className="row">
        <img src={ErrorImage} alt="error" className="ml-auto mr-auto" />
      </div>
    </div>
  );
};

export default ErrorComponent;
