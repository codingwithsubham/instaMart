import React from 'react';
import { Link } from 'react-router-dom';

const NotAllowed = () => {
  return (
    <div className="nt-alwd">
      <i className="material-icons">do_not_disturb_off</i>
      <h1>Not Allowed</h1>
      <p>This page is restricted for you, as it is not allowed to visit.</p>
      <Link to="/home" className="btn">
        Go To Home
      </Link>
    </div>
  );
};

export default NotAllowed;
