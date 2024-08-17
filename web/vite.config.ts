import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    outDir: 'public',
    assetsDir: 'assets',
    rollupOptions: {
      // Additional Rollup options
    },
    // Check for any optimizations or plugins that might alter the build
  },})
