import React from 'react';
import Slider from '../../components/layout/Slider';
import { sliderData } from './options';
import { Link, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LangElem from '../../language/LangElem';

const Landing = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  if (isAuthenticated) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="auth-wrap">
      <div className="idfy">
        insta
        <b>Mart</b>
      </div>
      <Slider data={sliderData} className="auth" />
      <div className="btn-grup insta-an">
        <Link className="waves-effect waves-light btn-large btn" to="/register">
          <i className="material-icons left notranslate">email</i>
          Sign Up with Email
        </Link>
        <Link className="waves-effect waves-light btn-large btn" to="/register">
          <i className="material-icons left notranslate">phone_android</i>
          Sign Up with Phone
        </Link>
        <div className="txt-w-btn">
          Already have an Account ?
          <Link className="btn-outlined" to="/login">
            Login
          </Link>
        </div>
      </div>
      <LangElem className="float-fixed-left" />
    </div>
  );
};

export default Landing;
