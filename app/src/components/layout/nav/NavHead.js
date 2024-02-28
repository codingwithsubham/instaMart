import React from 'react';
import { translate } from '../../../language/lang';
import { useDispatch } from 'react-redux';
import { userLogout } from '../../../store/auth/authEffect';
import { Link } from 'react-router-dom';

const NavHead = ({ callback, openSideNav }) => {
  const dispatch = useDispatch();
  return (
    <div className="nav-wrapper">
      <Link to="#" className="brand-logo">
        <div className="idfy app-logo">
          {translate('insta')}
          <b>{translate('mart')}</b>
        </div>
      </Link>
      <Link
        to="#"
        data-target="mobile-demo"
        className="sidenav-trigger"
        onClick={() => callback(!openSideNav)}
      >
        <i className="material-icons">menu</i>
      </Link>
      <Link
        to="/"
        data-target="mobile-demo"
        className="notifications sidenav-trigger"
      >
        <i className="material-icons">notifications</i>
      </Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <Link to="#">About</Link>
        </li>
        <li>
          <Link to="#">Contact</Link>
        </li>
        <li>
          <Link to="#" onClick={() => dispatch(userLogout())}>
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavHead;