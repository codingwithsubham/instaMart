import React, { Fragment } from 'react';
import { userLogout } from '../../../store/auth/authEffect';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const SideNav = ({ callback, openSideNav }) => {
  const dispatch = useDispatch();
  return (
    <Fragment>
      <div
        className={`side-nav-bg${openSideNav ? ' visible' : ' hide'}`}
        onClick={() => callback()}
      />
      <ul
        className={`sidenav${openSideNav ? ' open' : ' close'}`}
        id="mobile-demo"
      >
        <li>
          <Link
            to="#"
            className="right close-icon"
            onClick={() => callback(false)}
          >
            &times;
          </Link>
        </li>
        <br />
        <br />
        <li>
          <Link to="#" onClick={() => callback(false)}>
            About
          </Link>
        </li>
        <li>
          <Link to="#" onClick={() => callback(false)}>
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="#"
            onClick={() => {
              dispatch(userLogout());
              callback(false);
            }}
          >
            Logout
          </Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default SideNav;
