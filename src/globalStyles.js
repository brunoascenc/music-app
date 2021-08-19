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
    color: #332f2f;
  }
  ul{
    list-style: none;
  }

  .container{
    padding-left: 5%;
    padding-right: 5%;
    margin-left: 15vw;
  }

  .section-title{
    margin-bottom: 20px;
    margin-top: 70px;
  }
`;

export default GlobalStyle;
