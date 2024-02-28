import { css } from 'styled-components';

const typography = {
  title: css`
    font-family: Bagel Fat One;
    font-size: 28px;
    font-weight: 700;
  `,
  subTitle: css`
    font-family: Bagel Fat One;
    font-size: 24px;
    font-weight: 600;
  `,
  body: css`
    font-family: Bagel Fat One;
    font-size: 28px;
    font-weight: 400;
  `,
  caption: css`
    font-family: Bagel Fat One;
    font-size: 12px;
    font-weight: 400;
  `,
};

const textStyle = {
  ellipsis: css`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,
  multiEllipsis: (line = 2) => css`
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${line};
    -webkit-box-orient: vertical;
  `,
  lineBreakText: css`
    white-space: normal;
    word-wrap: break-word;
    overflow-wrap: normal;
    word-break: break-all;
  `,
  lineBreakWord: css`
    white-space: pre-line;
    word-wrap: break-word;
    overflow-wrap: break-word;
    word-break: keep-all;
  `,
  selectNone: css`
    -webkit-user-select: none; // Chrome, Safari, Opera
    -moz-user-select: none; // Firefox
    -ms-user-select: none; // Internet Explorer/Edge
    user-select: none; // Non-prefixed version, currently supported in most modern browsers except for IE
  `,
  autocompleteNone: (color = '#ffffff') => css`
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 30px ${color} inset !important;
    }
  `,
  gradientText: ({
    gradient = 'linear-gradient(90.25deg, #cdd5ff 2.74%, #ff7d9c 101.95%)',
  } = {}) => css`
    background: ${gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    display: inline-flex;
  `,
};

const uiStyle = {
  backdropBlur: (value = '12px') => css`
    backdrop-filter: blur(${value});
    -webkit-backdrop-filter: blur(${value});
  `,
  gradientBorder: ({
    border = '1px',
    radius = '9999px',
    gradient = 'linear-gradient(90.25deg, #cdd5ff 2.74%, #ff7d9c 101.95%)',
  } = {}) => css`
    position: relative;
    &::before {
      content: '';
      position: absolute;
      top: -${border};
      left: -${border};
      right: 0;
      bottom: 0;
      width: calc(100% + (${border} * 2));
      height: calc(100% + (${border} * 2));
      background: ${gradient} border-box;
      -webkit-mask:
        linear-gradient(#ffffff 0 0) padding-box,
        linear-gradient(#ffffff 0 0);
      -webkit-mask-composite: destination-out;
      mask-composite: exclude;
      border-radius: ${radius};
      border: ${border} solid transparent;
      pointer-events: none;
    }
  `,
  scrollbar: ({ width = '7px', radius = '9999px' } = {}) => css`
    overflow: auto;
    scrollbar-width: thin;
    scrollbar-color: #6c54ff #f5f5f5;
    &::-webkit-scrollbar {
      width: ${width};
      height: ${width};
    }
    &::-webkit-scrollbar-track {
      background: #f5f5f5;
      border-radius: ${radius};
    }
    &::-webkit-scrollbar-thumb {
      background: #6c54ff;
      border-radius: ${radius};
    }
    &::-webkit-scrollbar-corner {
      background: transparent;
    }
  `,
  textSelect: css`
    -webkit-user-select: text; // Chrome, Safari, Opera
    -moz-user-select: text; // Firefox
    -ms-user-select: text; // Internet Explorer/Edge
    user-select: text; // Non-prefixed version, currently supported in most modern browsers except for IE
  `,
};

const polyfill = {
  blur: ({ value = '8px' } = {}) => css`
    filter: blur(${value});
    -webkit-filter: blur(${value}); /* Safari 6.0 - 9.0 */
    -moz-filter: blur(${value}); /* Firefox 35 - 55 */
    -o-filter: blur(${value}); /* Opera 15 - 42 */
    -ms-filter: blur(${value}); /* IE 9 */
  `,
};

export { typography, textStyle, uiStyle, polyfill };
