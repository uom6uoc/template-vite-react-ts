import { createGlobalStyle, css } from 'styled-components';

const rootVariable = css`
  /* CSS variable   */
  :root {
    /* COLOR */
    --color-primary: #ffc7d4;
    --color-secondary: #ff7d9c;
    --color-gray: #a2afbd;
    --color-white: #ffffff;
    --color-black: #000000;
  }
`;

const GlobalStyle = createGlobalStyle`
  ${rootVariable};
  html,
  body,
  #root {
  }
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  a {
    text-decoration: none;
    color: inherit;
    line-height: 1;
  }
  h1, h2, h3, span, pre, button {
    white-space: pre-line;
    word-wrap: break-word;
    overflow-wrap: break-word;
    word-break: keep-all;
    -webkit-user-select: none; // Chrome, Safari, Opera
    -moz-user-select: none; // Firefox
    -ms-user-select: none; // Internet Explorer/Edge
    user-select: none; // Non-prefixed version, currently supported in most modern browsers except for IE
  } 
`;

export default GlobalStyle;
