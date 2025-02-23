import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env
  },
  resolve: {
    alias: {
      '@assets': '/src/assets',
      '@config': '/src/config',
      '@environment': '/src/environment',
      '@routes': '/src/routes',
      '@core': '/src/app/@core',
      '@shared': '/src/app/@shared',
      '@default': '/src/app/@default'
    }
  },
  server: {
    host: true,
    open: true,
    port: 5173
  }
});
