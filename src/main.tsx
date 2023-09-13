import * as React from 'react';
import ReactDOM from 'react-dom/client';

import App from '~/App';
import initConsole from '~/utils/console';

initConsole({
  name: __PACKAGE_NAME,
  version: __PACKAGE_VERSION,
  mode: import.meta.env.MODE,
  style: { color: 'blue', size: '12px' },
});

const container = document.getElementById('root')! as HTMLElement;
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
