/// <reference types="vite/client" />

declare const __PACKAGE_NAME: string;
declare const __PACKAGE_VERSION: string;

declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
