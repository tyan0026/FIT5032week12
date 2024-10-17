import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base:process.env.NODE_ENV === 'production'
  ? '/FIT5032week12/'
  : '/',
  define: {
    "process.env.NODE_ENV":JSON.stringify(process.env.NODE_ENV)
  },
  plugins: [vue()],
})
