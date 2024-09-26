import * as React from 'react';
import { createRoot } from 'react-dom/client';

import App from '~/App';

if (import.meta.env.DEV && import.meta.env.VITE_IS_MSW === 'true') {
  const { worker } = await import('~/dev/mocks/browser');
  worker.start();
}

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
