import React from 'react';
import { AiOutlineHome, AiOutlineHeart, AiOutlineGlobal } from 'react-icons/ai';
import { BsMic } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { SideNav, Nav } from './SideMenuStyles';

const SideMenu = () => {
  return (
    <SideNav>
      <h1>Elerial</h1>
      <Nav>
        <NavLink exact={true} activeClassName="is-active" to="/">
          <AiOutlineHome className="nav-icon" /> Home
        </NavLink>
        <NavLink activeClassName="is-active" to="/favorites">
          <AiOutlineHeart className="nav-icon" /> Favoritos
        </NavLink>
        <NavLink className="disabled" to="/#" disabled>
          <AiOutlineGlobal className="nav-icon" /> Explorar
        </NavLink>
        <NavLink className="disabled" to="/#">
          <BsMic className="nav-icon" /> Podcasts
        </NavLink>
      </Nav>
      <div>
        <span>Elerial 2021</span>
      </div>
    </SideNav>
  );
};

export default SideMenu;
