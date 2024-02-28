import React from 'react';
import Form from '../../components/common/Form';
import { Link, Navigate } from 'react-router-dom';
import { loginFormData } from './options';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../store/auth/authEffect';
import Loader from '../../components/layout/Loader';
import { translate } from '../../language/lang';

const Login = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, loading } = useSelector((state) => state.auth);
  const callBack = (respo) => {
    dispatch(userLogin(respo));
  };

  if (isAuthenticated) {
    return <Navigate to="/entry" />;
  }

  return (
    <div className="login-wrap">
      <div className="idfy">
      {translate('insta')}
        <b>{translate('mart')}</b>
      </div>
      <div className="form-holder insta-an">
        <div className="frm-hdr">
          <h1>{translate('Welcome Back')}</h1>
          <p>{translate("Login to your Account")}</p>
        </div>

        <div className="frm-body">
          {!loading ? (
            <Form data={loginFormData} callBack={callBack} />
          ) : (
            <Loader />
          )}
        </div>
      </div>
      <div className="lgin-foot">
        <div className="txt-w-btn">
          {translate("Want to go back ?")}{' '}
          <Link className="btn-outlined" to="/">
            {translate("Back")}
          </Link>
        </div>
      </div>
      <div className="bg-effct-round-half" />
    </div>
  );
};

export default Login;
