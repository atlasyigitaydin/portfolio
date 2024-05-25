import path from 'path'
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import Components from 'unplugin-vue-components/vite'
import VueMacros from 'unplugin-vue-macros/vite'
import VueI18n from '@intlify/unplugin-vue-i18n/vite'
import mkcert from 'vite-plugin-mkcert'
import IconsResolver from 'unplugin-icons/resolver'
import { PrimeVueResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig(({ mode }) => {
  const dev = mode === 'dev'
  return {
    build: {
      rollupOptions: {
        treeshake: false,
      },
    },
    resolve: {
      alias: {
        '~/': `${path.resolve(__dirname, 'src')}/`,
        'inferno': dev ? 'inferno/dist/index.dev.esm.js' : 'inferno/dist/index.esm.js',
      },
    },

    plugins: [

      mkcert(),

      VueMacros({
        plugins: {
          vue: Vue({
            include: [/\.vue$/],
            reactivityTransform: false,
            template: {
              compilerOptions: {
                isCustomElement: tag => tag === 'routerSide',
              },
            },
          }),
        },
      }),

      Layouts({
        layoutsDirs: ['src/views/layouts'],
      }),

      Pages({
        extensions: ['vue'],
        exclude: [
          'src/views/pages/**/**/*.vue',
        ],
        dirs: ['src/views/pages'],
      }),

      // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
      Layouts(),

      // https://github.com/antfu/unplugin-auto-import
      AutoImport({
        imports: [
          'vue',
          'vue-router',
          'vue-i18n',
          'vue/macros',
          '@vueuse/head',
          '@vueuse/core',
          'pinia',
          'vee-validate',
        ],
        dts: 'src/core/auto-imports.d.ts',
        dirs: [
          'src/core/composables',
          'src/core/stores',
          'src/views/pages/**/stores',
        ],
        vueTemplate: true,
      }),

      // https://github.com/antfu/unplugin-vue-components
      Components({
        dirs: [
          './src/views/components',
          './src/views/pages/**/components/',
        ],
        // allow auto load markdown components under `./src/components/`
        extensions: ['vue', 'md'],
        // allow auto import and register components used in markdown
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        dts: 'src/core/components.d.ts',
        resolvers: [
          PrimeVueResolver(),
          IconsResolver({
            customCollections: ['custom'],
          }),
        ],
      }),

      // https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n
      VueI18n({
        runtimeOnly: true,
        compositionOnly: true,
        fullInstall: true,
        include: [path.resolve(__dirname, 'locales/**')],
      }),

    ],

    // https://github.com/vitest-dev/vitest
    test: {
      include: ['test/**/*.test.ts'],
      environment: 'jsdom',
    },
  }
})
