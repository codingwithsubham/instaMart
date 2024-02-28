import React, { Fragment } from 'react';
import { Navigate } from 'react-router-dom';
import { ADMIN, USER } from '../../common/appConstants';
import { useSelector } from 'react-redux';

const Entry = () => {
  const { user } = useSelector((state) => state.auth);

  if (user?.role === ADMIN) {
    return <Navigate to="/dashboard" />;
  }

  if (user?.role === USER) {
    return <Navigate to="/home" />;
  }

  return <Fragment />;
};

export default Entry;
