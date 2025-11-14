import { fileURLToPath } from 'url'
import { defineConfig, loadEnv } from 'vite'

import vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
import IconResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'
import { readFileSync } from 'fs'

// 读取 package.json
const pkg = JSON.parse(readFileSync('./package.json', 'utf-8'))

export default defineConfig(({ mode }) => ({
  base: './',
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => tag === 'webview'
        }
      }
    }),
    AutoImport({
      imports: ['vue'],
      resolvers: [
        ElementPlusResolver(
          {
            importStyle: false
          }
        ),
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
        ElementPlusResolver(
          {
            importStyle: false
          }
        )
      ],
      dts: path.resolve(path.resolve(__dirname, 'src'), 'components.d.ts'),
    }),
    Icons({
      autoInstall: true
    }),
    // 自定义插件：注入 package.json 的 name 到 index.html
    {
      name: 'html-transform',
      transformIndexHtml(html) {
        return html.replace(
          /<title>(.*?)<\/title>/,
          `<title>${pkg.name}</title>`
        )
      }
    }
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
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
}))
