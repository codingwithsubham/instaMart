import React from 'react';
import { useSelector } from 'react-redux';

const Footer = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    isAuthenticated && (
      <div className="footer">
        <div className="footer-text">
          <h4>
            Buy Products <br />@ Right Price
          </h4>
          <p>All Products at right choice & right price</p>
        </div>
        <div className="footer-copy">
          copyright insta<b>Mart</b>
        </div>
      </div>
    )
  );
};

export default Footer;
