import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";
import { font } from "./Common";

export const GlobalStyle = createGlobalStyle`
 *,
 *::before,
 *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 } 
  
  header,
  footer{
    background-color: ${theme.colors.primaryBg}
  }
  
  body {
  margin: 0;
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${theme.colors.font};
  line-height: 1.2;
  }
  
  a{
    text-decoration: unset;
    color: ${theme.colors.font};
    cursor:pointer;
  }
  
  ul{
    list-style: none;
  }
  
  button {
    cursor:pointer;
    border:none;
  }
    
  section:nth-of-type(odd){
    background-color: ${theme.colors.primaryBg};
  }
  section:nth-of-type(even){
    background-color: ${theme.colors.secondaryBg};
  }
  
  section {
    padding:100px 0;

    @media ${theme.media.mobile}{
      padding:80px 0;
    }
  }
  
 
  h3 {
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 2px;
  }
  
  p {
    ${font({weight:400, Fmax:16, Fmin:12})};
    letter-spacing: 1px;

  }
  
`
