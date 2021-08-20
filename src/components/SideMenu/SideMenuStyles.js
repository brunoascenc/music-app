import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SideNav = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 15vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #050505;
  padding-left: 2%;
  border-right: solid 1px #0f0f0f;
  @media screen and (max-width: 1270px) {
    width: 191px;
  }
  h1 {
    margin-top: 25px;
    font-family: 'Righteous', cursive;
    font-size: 30px;
    letter-spacing: 2px;
    color: #e0d7d7;
  }
  @media screen and (max-width: 820px) {
    left: ${(props) => (props.openMenu === true ? '0' : '-100%')};
    z-index: 10;
    width: 40vw;
    padding-left: 5%;
  }

  @media screen and (max-width: 550px) {
    width: 100%;
    align-items: center;
    padding: 0;
  }
  span {
    color: #1d1d1f;
    font-size: 10px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  .nav-icon {
    margin-right: 15px;
  }
  .is-active {
    color: #745fc9;
    &::after {
      content: '';
      width: 5px;
      height: 35px;
      background: #745fc9;
      position: absolute;
      bottom: 12px;
      left: -15px;
    }
  }
`;

export const Link = styled(NavLink)`
  font-size: 22px;
  color: ${(props) => (props.linkoff ? '#1d1d1f' : '#545359')};
  display: flex;
  line-height: 55px;
  align-items: center;
  position: relative;
  pointer-events: ${(props) => (props.linkoff ? 'none' : 'unset')};
  transition: 0.1s ease;
  &:hover {
    opacity: 0.6;
  }
`;

export const MobileMenu = styled.div`
  display: none;
  font-size: 22px;

  @media screen and (max-width: 820px) {
    display: block;
    position: fixed;
    top: 25px;
    right: 25px;
    z-index: 10;
  }
`;
