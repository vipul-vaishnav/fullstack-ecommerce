import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const PORT = Number(process.env.CLIENT_PORT || 3000)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: PORT
  }
})
