import { fileURLToPath, URL } from 'node:url';

import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  const PORT = Number(env.VITE_PORT);

  return defineConfig({
    plugins: [vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      port: PORT,
    },
  });
};
