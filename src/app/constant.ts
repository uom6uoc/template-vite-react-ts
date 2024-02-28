// ******* URLS ******* //
const API = {
  base: 'http://localhost:4000/',
  cdn: 'http://localhost:3000/',
};

const LINK = {
  gitHub: 'https://github.com/',
};

// ******* STYLE ******* //
const BREAKPOINTS = {
  desktop: 1024,
  mobile: 768,
};

const HEADER_HEIGHT = {
  mobile: 64,
  desktop: 80,
};

const CONTENT_X_PADDING = {
  mobile: 16,
  desktop: 32,
};

const CONTENT_MAX_WIDTH = {
  mobile: BREAKPOINTS.mobile + CONTENT_X_PADDING.mobile * 2,
  desktop: BREAKPOINTS.desktop + CONTENT_X_PADDING.desktop * 2,
};

const ASPECT_RATIO = {
  thumbnail: 16 / 9,
};

// ******* DEV ******* //
const LOG_STYLE = {
  GOLD: 'color: #000000; font-size: 16px; background: #ffc107; padding: 2px 6px; margin-bottom: 8px; border-radius: 4px;',
  RED: 'color: #000000; font-size: 16px; background: #dc3545; padding: 2px 6px; margin-bottom: 8px; border-radius: 4px;',
};

// ******* export ******* //
export const URL = {
  API,
  LINK,
};

export const STYLE = {
  BREAKPOINTS,
  HEADER_HEIGHT,
  CONTENT_X_PADDING,
  CONTENT_MAX_WIDTH,
  ASPECT_RATIO,
};

export const DEV = {
  LOG_STYLE,
};
