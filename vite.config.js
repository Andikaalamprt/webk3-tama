import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // GANTI 'k3-pelatihan' dengan nama repository GitHub kamu!
  base: '/webk3-tama/',
})
