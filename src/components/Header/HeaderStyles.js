import styled from 'styled-components';

export const HeaderComponent = styled.header`
  display: flex;
  height: 75px;
`;

export const HeaderElements = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  height: 75px;
  background: #ffffff;
  justify-content: space-between;
  width: 100%;
  /* border-bottom: solid 1px #ded1d1; */
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

  h1 {
    margin-right: 25px;
    font-family: 'Hammersmith One', sans-serif;
    color: #61d49a;
    font-size: 40px;
    letter-spacing: 1px;
  }
`;

export const SearchInput = styled.input`
  background: #f2eded;
  padding: 12px 16px;
  border-radius: 24px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  border: none;
  width: 600px;
`;

export const SearchBox = styled.div`
  position: relative;
  .search-icon {
    position: absolute;
    right: 13px;
    font-size: 20px;
    top: 9px;
    color: #332f2f;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  a {
    margin-top: 5px;
    background: #61d49a;
    color: #121212;
    padding: 6px 12px;
    border-radius: 16px;
  }
`;
