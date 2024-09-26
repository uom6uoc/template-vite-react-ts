import { createGlobalStyle, css } from 'styled-components';

import { BREAKPOINTS } from './constant';

const rootVariable = css`
  /* CSS variable   */
  :root {
    --color-white: #ffffff;
    --color-black: #000000;

    --color-gray0: #292929;
    --color-gray1: #303030;
    --color-gray2: #555555;
    --color-gray3: #888888;
    --color-gray4: #aaaaaa;
    --color-gray5: #cccccc;
    --color-gray6: #dddddd;

    --color-google-blue: #4285f4;
    --color-google-green: #34a853;
    --color-google-yellow: #fbbc05;
    --color-google-red: #ea4335;

    /* theme - START */
    --box-header-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.4);
    --box-shadow-key: 0 1px 3px rgba(0, 0, 0, 0.12),
      0 1px 2px rgba(0, 0, 0, 0.24);
    --box-shadow-key-reverse: 0 1px 2px rgba(255, 255, 255, 0.12),
      0 0px 1px rgba(255, 255, 255, 0.24);

    --overlay-background: rgba(0, 0, 0, 0.5);
    /* theme - END */

    /* layout */
    --content-max-width-desktop: ${BREAKPOINTS.desktop}px;

    --section-padding-x-desktop: 24px;
    --section-padding-x-tablet: 18px;
    --section-padding-x-mobile: 24px;

    --header-height-desktop: 92px;
    --header-height-tablet: 76px;
    --header-height-mobile: 60px;
    --header-padding-x-desktop: 24px;
    --header-padding-x-tablet: 18px;
    --header-padding-x-mobile: 12px;

    --footer-height-desktop: 48px;
    --footer-height-tablet: 36px;
    --footer-height-mobile: 24px;
    --footer-padding-x-desktop: 24px;
    --footer-padding-x-tablet: 18px;
    --footer-padding-x-mobile: 12px;
  }
`;

const GlobalStyle = createGlobalStyle`
  ${rootVariable};
  html,
  body,
  #root {
    font-family: Pretendard;
    color: wheat;
  }
  html {
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* background: #333333; */
  }

  a {
    display: inline-block;
    text-decoration: none;
    color: inherit;
    line-height: 1;
  }
  h1, h2, h3, span, pre, p, button {
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
