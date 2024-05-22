import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
import IconResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue'],
      resolvers: [
        ElementPlusResolver(),
        IconResolver({
          prefix: 'Icon'
        })
      ],
      dts: path.resolve(path.resolve(__dirname, 'src'), 'auto-imports.d.ts'),
    }),
    Components({
      resolvers: [
        IconResolver({
          prefix: 'Icon',
          enabledCollections: ['ep'],
        }),
        ElementPlusResolver()
      ],
      dts: path.resolve(path.resolve(__dirname, 'src'), 'components.d.ts'),
    }),
    Icons({
      autoInstall: true
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    // assetsDir: 'assets'
    // outDir: 'ls',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
      }
    }
  }
})
