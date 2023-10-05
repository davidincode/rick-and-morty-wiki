import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@util': path.resolve(__dirname, './src/util'),
      '@hook': path.resolve(__dirname, './src/hook'),
      '@store': path.resolve(__dirname, './src/store'),
      '@component': path.resolve(__dirname, './src/component'),
      '@service': path.resolve(__dirname, './src/service'),
      '@type': path.resolve(__dirname, './src/type')
    }
  },
  plugins: [react()]
})
