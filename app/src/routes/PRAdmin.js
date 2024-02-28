import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ADMIN, AUTH_TOKEN } from '../common/appConstants';
import Loader from '../components/layout/Loader';
import NotAllowed from '../components/layout/NotAllowed';

const PRAdmin = ({ component: RouteComponent }) => {
  const { isAuthenticated, loading, user } = useSelector((state) => state.auth);
  const token = localStorage.getItem(AUTH_TOKEN);

  return (
    <div className="app-content">
      {!isAuthenticated && !token ? (
        <Navigate to="/" />
      ) : token && loading && !isAuthenticated ? (
        <Loader />
      ) : isAuthenticated && !loading && user?.role !== ADMIN ? (
        <NotAllowed />
      ) : (
        isAuthenticated && !loading && user?.role === ADMIN && <RouteComponent />
      )}
    </div>
  );
};

export default PRAdmin;
