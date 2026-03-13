import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // cần base này để GitHub Pages serve đúng dưới /introduce_alex/
  base: '/introduce_alex/',
})
