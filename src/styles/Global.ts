import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700;800;900&display=swap');

  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    color: #fff;
    background-color: #2F343A;
  }

  .ant-spin-nested-loading > div > .ant-spin {
    max-height: 100%;
  }
  
  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }
  
  a {
    text-decoration: none;
  }
`
