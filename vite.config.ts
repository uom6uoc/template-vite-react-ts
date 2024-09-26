import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default ({ mode, command, ssrBuild }) => {
  const viteENV = loadEnv(mode, process.cwd());

  return defineConfig({
    plugins: [react(), tsconfigPaths(), svgr()],
    build: {
      emptyOutDir: true,
      // chunkSizeWarningLimit: 1500 * 1024,
    },
    base: viteENV.VITE_BASE_PATH || '/',
    server: {
      host: '0.0.0.0',
      port: 3000,
    },
    define: {
      __PACKAGE_VERSION: JSON.stringify(process.env.npm_package_version),
      __PACKAGE_NAME: JSON.stringify(process.env.npm_package_name),
    },
  });
};
