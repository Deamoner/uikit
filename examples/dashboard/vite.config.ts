import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@react-three/uikit-lucide', '@react-three/uikit'],
    esbuildOptions: {
      target: 'esnext',
    },
  },
  base: '/uikit/examples/dashboard/',
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, '../../packages/kits/default') },
      { find: '@react-three/uikit', replacement: path.resolve(__dirname, '../../packages/react/src/index.ts') },
    ],
  },
  build: {
    target: 'esnext',
  },
})
