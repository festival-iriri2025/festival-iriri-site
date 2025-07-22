import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  base: '/festival-iriri-site/', // Adicionado o base path
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})

