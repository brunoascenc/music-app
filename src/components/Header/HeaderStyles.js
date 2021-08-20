import styled from 'styled-components';

export const HeaderComponent = styled.div`
  height: 75px;
  margin-left: 15vw;
  z-index: 1;
  @media screen and (max-width: 1270px) {
    margin-left: 190px;
  }
  @media screen and (max-width: 820px) {
    margin-left: 0;
  }
`;

export const HeaderElements = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  height: 75px;
  background: ${(props) => props.theme.darkerBg};
  width: 100%;
  border-bottom: solid 1px #0f0f0f;
  padding: 0;
  z-index: 1;
`;

export const SearchInput = styled.input`
  padding: 25px 68px;
  height: 75px;
  border: none;
  width: 700px;
  background: transparent;
  color: #ebe1e1;
  &:focus {
    background: linear-gradient(to right, #1a1717, #050505);
  }
  @media screen and (max-width: 1270px) {
    padding: 25px 40px;
  }
  @media screen and (max-width: 820px) {
    padding: 25px 20px;
  }
`;

export const SearchBox = styled.div`
  position: relative;
  .search-icon {
    position: absolute;
    right: 200px;
    font-size: 20px;
    top: 26px;
    color: #4d4646;
    @media screen and (max-width: 820px) {
      right: 300px;
    }
    @media screen and (max-width: 820px) {
      right: 400px;
    }
  }
`;
