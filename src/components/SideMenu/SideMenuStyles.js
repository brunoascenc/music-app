import styled from 'styled-components';

export const SideNav = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 15vw;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 90px 15px 5px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #ffffff;
  padding-left: 2%;
  border-right: solid 1px #f2eded;
  h1 {
    margin-top: 25px;
    font-family: 'Righteous', cursive;
    font-size: 30px;
    letter-spacing: 1px;
    color: #141313;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  a {
    font-weight: bold;
    font-size: 23px;
    color: #141313;
    display: flex;
    line-height: 60px;
    align-items: center;
    position: relative;
    .nav-icon {
      margin-right: 15px;
      color: #454141;
    }
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
    .nav-icon {
      color: #745fc9;
    }
  }

  .disabled {
    color: #d3d0db;
    pointer-events: none;
    .nav-icon {
      color: #d3d0db;
    }
  }
`;
