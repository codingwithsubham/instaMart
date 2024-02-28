import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useScroll } from '../../../utils/useScroll';
import SubNav from './SubNav';
import NavHead from './NavHead';
import SideNav from './SideNav';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const [openSideNav, setOpenSideNav] = useState(false);
  const [show, setShow] = useState(false);
  const { scrollDirection } = useScroll();
  const location = useLocation();

  const handleSidenavClose = (bool) => {
    setOpenSideNav(bool);
  };

  useEffect(() => {
    show && setShow(false)
  }, [location]);

  useEffect(() => {
    scrollDirection === 'up' && !show && setShow(true);
    scrollDirection === 'down' && show && setShow(false);
  }, [scrollDirection]);

  return (
    isAuthenticated && (
      <div
        className={`navbar-fixed${show ? ' stickey' : ' '}`}
      >
        <nav className="nav-extended my-nav">
          <NavHead callback={handleSidenavClose} openSideNav={openSideNav} />
          <SubNav user={user}/>
        </nav>
        <SideNav callback={handleSidenavClose} openSideNav={openSideNav} />
      </div>
    )
  );
};

export default Navbar;
