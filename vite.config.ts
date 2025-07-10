import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Build optimizations
  build: {
    // Output directory (Netlify expects 'dist')
    outDir: 'dist',
    
    // Generate sourcemaps for production debugging
    sourcemap: false,
    
    // Minify with esbuild (faster than terser)
    minify: 'esbuild',
    
    // Target modern browsers for smaller bundles
    target: 'es2015',
    
    // Remove console.log in production
    esbuild: {
      drop: ['console', 'debugger']
    },
    
    // Rollup options for bundle optimization
    rollupOptions: {
      output: {
        // Manual chunks for better caching
        manualChunks: {
          // React vendor chunk
          react: ['react', 'react-dom'],
          // Lucide icons chunk
          icons: ['lucide-react']
        },
        
        // Optimize chunk file names
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.')
          const extType = info[info.length - 1]
          
          // Organize assets by type
          if (/\.(mp4|webm|ogg|mp3|wav|flac|aac)$/.test(assetInfo.name)) {
            return `assets/media/[name]-[hash][extname]`
          }
          if (/\.(png|jpe?g|gif|svg|webp|ico)$/.test(assetInfo.name)) {
            return `assets/images/[name]-[hash][extname]`
          }
          if (/\.(woff2?|eot|ttf|otf)$/.test(assetInfo.name)) {
            return `assets/fonts/[name]-[hash][extname]`
          }
          if (extType === 'css') {
            return `assets/css/[name]-[hash][extname]`
          }
          
          return `assets/[name]-[hash][extname]`
        }
      }
    },
    
    // Chunk size warning limit (500kb)
    chunkSizeWarningLimit: 500,
    
    // Asset size warning limit (200kb)
    assetsInlineLimit: 4096 // 4kb
  },
  
  // Dev server configuration
  server: {
    host: true,
    port: 5173,
    open: true,
    cors: true
  },
  
  // Preview server configuration  
  preview: {
    host: true,
    port: 4173,
    open: true
  },
  
  // Asset optimization
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg', '**/*.webp'],
  
  // Define global constants
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version || '1.0.0'),
    __BUILD_DATE__: JSON.stringify(new Date().toISOString())
  }
})