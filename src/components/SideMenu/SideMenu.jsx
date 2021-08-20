import React, { useState } from 'react';
import {
  AiOutlineHome,
  AiOutlineHeart,
  AiOutlineGlobal,
  AiOutlineMenu,
  AiOutlineClose,
} from 'react-icons/ai';
import { BsMic } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { SideNav, Nav, MobileMenu, Link } from './SideMenuStyles';

const SideMenu = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <SideNav openMenu={click}>
        <NavLink to="/" onClick={closeMobileMenu}>
          <h1>Elerial</h1>
        </NavLink>
        <Nav>
          <Link
            exact
            activeClassName="is-active"
            to="/"
            onClick={closeMobileMenu}
          >
            <AiOutlineHome className="nav-icon" /> Home
          </Link>
          <Link
            activeClassName="is-active"
            to="/favorites"
            onClick={closeMobileMenu}
          >
            <AiOutlineHeart className="nav-icon" /> Favoritos
          </Link>
          <Link to="/#" linkoff="true">
            <AiOutlineGlobal className="nav-icon" /> Explorar
          </Link>
          <Link to="/#" linkoff="true">
            <BsMic className="nav-icon" /> Podcasts
          </Link>
        </Nav>
        <span>Elerial 2021</span>
      </SideNav>
      <MobileMenu onClick={handleClick}>
        {click ? <AiOutlineClose /> : <AiOutlineMenu />}
      </MobileMenu>
    </>
  );
};

export default SideMenu;
