import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        'src/pages/About': resolve(__dirname, 'src/pages/About.html'),
        'src/pages/Blog': resolve(__dirname, 'src/pages/Blog.html'),
        'src/pages/Category': resolve(__dirname, 'src/pages/Category.html'),
        'src/pages/Contact': resolve(__dirname, 'src/pages/Contact.html'),
        'src/pages/Detail': resolve(__dirname, 'src/pages/Detail.html'),
        'src/pages/FAQ': resolve(__dirname, 'src/pages/FAQ.html'),
        'src/pages/Payment': resolve(__dirname, 'src/pages/Payment.html'),
        'src/pages/PaymentSuccess': resolve(
          __dirname,
          'src/pages/PaymentSuccess.html',
        ),
        'src/pages/Shop': resolve(__dirname, 'src/pages/Shop.html'),
        'src/pages/promotion': resolve(__dirname, 'src/pages/promotion.html'),
      },
    },
  },
  publicDir: 'public',
  server: {
    port: 3000,
    open: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@pages': resolve(__dirname, 'src/pages'),
      '@scripts': resolve(__dirname, 'src/scripts'),
      '@styles': resolve(__dirname, 'src/styles'),
      '@config': resolve(__dirname, 'src/config'),
      '@api': resolve(__dirname, 'src/api'),
    },
  },
});
