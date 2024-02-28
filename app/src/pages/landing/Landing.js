import React from 'react';
import Slider from '../../components/layout/Slider';
import { sliderData } from './options';
import { Link, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LangElem from '../../language/LangElem';
import { translate } from '../../language/lang';

const Landing = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  if (isAuthenticated) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="auth-wrap">
      <div className="idfy">
        {translate('insta')}
        <b>{translate('mart')}</b>
      </div>
      <Slider data={sliderData} className="auth" />
      <div className="btn-grup insta-an">
        <Link className="waves-effect waves-light btn-large btn" to="/register">
          <i className="material-icons left">email</i>
          {translate('Sign Up with Email')}
        </Link>
        <Link className="waves-effect waves-light btn-large btn" to="/register">
          <i className="material-icons left">phone_android</i>
          {translate('Sign Up with Phone')}
        </Link>
        <div className="txt-w-btn">
          {translate('Already have an Account')}{' '}
          <Link className="btn-outlined" to="/login">
            {translate('Login')}
          </Link>
        </div>
      </div>
      <LangElem className="float-fixed-left" />
    </div>
  );
};

export default Landing;
