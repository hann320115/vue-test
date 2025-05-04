import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' // ✅ 加這行

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/vue-test/' : '/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src') 
    }
  }
})
