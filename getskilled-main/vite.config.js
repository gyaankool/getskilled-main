import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: process.env.PORT || 5173,
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      'get-skilled.onrender.com',
      '.onrender.com',
      '.render.com'
    ],
  },
  preview: {
    host: '0.0.0.0',
    port: process.env.PORT || 4173,
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      'get-skilled.onrender.com',
      '.onrender.com',
      '.render.com'
    ],
  },
})
