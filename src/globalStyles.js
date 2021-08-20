import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
  }

  *:focus {
   outline: none;
  }

 a{
   text-decoration: none;
   color: #332f2f;
  }

  body{
    overflow-x: hidden;
    font-family: 'Poppins', sans-serif;
    background-color: #ffffff;
    background-color:#0d0c0c;
    color: #ded5d5;

    &::-webkit-scrollbar {
    width: 14px;
    background:#1f1d1d;
  }
   &::-webkit-scrollbar-track {
    border-radius: 12px;
   }
    &::-webkit-scrollbar-thumb {
    background: #3d3939;
    border-radius: 9px;
   }

  }
  ul{
    list-style: none;
  }

  .container{
    padding-left: 5%;
    padding-right: 5%;
    margin-left: 15vw;
    @media screen and (max-width: 1270px) {
      margin-left: 170px;
    }
    @media screen and (max-width: 820px) {
      margin-left: 0;
    }
  }

  .section-title{
    margin-bottom: 20px;
    margin-top: 70px;
    color: #ded5d5;
    border-bottom: solid 1px #211f1f;
    padding-bottom: 5px;
  }

`;

export default GlobalStyle;
