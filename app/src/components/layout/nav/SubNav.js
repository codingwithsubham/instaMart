import React from 'react';
import { NavLink } from 'react-router-dom';
import { ADMIN } from '../../../common/appConstants';

const SubNav = ({ user }) => {
  return (
    <div className="nav-content">
      <ul className="tabs tabs-transparent">
        {user?.role === ADMIN ? (
          <>
            <li className="tab">
              <NavLink to="/dashboard">
                <i className="material-icons notranslate">dashboard</i>
              </NavLink>
            </li>
            <li className="tab">
              <NavLink to="/orders">
                <i className="material-icons notranslate">store</i>
              </NavLink>
            </li>
            <li className="tab">
              <NavLink to="/categories">
                <i className="material-icons notranslate">list</i>
              </NavLink>
            </li>
            <li className="tab">
              <NavLink to="/products">
                <i className="material-icons notranslate">add_shopping_cart</i>
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li className="tab">
              <NavLink to="/home">
                <i className="material-icons notranslate">shopping_basket</i>
              </NavLink>
            </li>
            <li className="tab">
              <NavLink to="/search">
                <i className="material-icons notranslate">search</i>
              </NavLink>
            </li>
            <li className="tab">
              <NavLink to="/account">
                <i className="material-icons notranslate">person</i>
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default SubNav;
