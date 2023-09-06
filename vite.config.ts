import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgr()],
  build: {
    emptyOutDir: true,
    chunkSizeWarningLimit: 1500 * 1024,
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  define: {
    __PACKAGE_VERSION: JSON.stringify(process.env.npm_package_version),
    __PACKAGE_NAME: JSON.stringify(process.env.npm_package_name),
  },
});
