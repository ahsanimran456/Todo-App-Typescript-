import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Additional configuration options can be added here
  // For example:
  server: {
    host: '0.0.0.0', // To allow access from other devices on the same network
    port: 5173,      // The port your Vite server should run on
  },
  build: {
    // Build configuration options
  },
});