import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: 'MyPortfoli-FarhadGhaherdoost',
  plugins: [react()],
  build: {
    outDir: "docs"
  }
})
