import { e as useHead, s as ssrRenderAttrs_1, v as vueExports, f as ssrInterpolate_1 } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import '../_/renderer.mjs';
import 'file://C:/Users/evane/Desktop/MyProjects/Portfolio_Website/node_modules/.pnpm/vue-bundle-renderer@2.1.0/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/evane/Desktop/MyProjects/Portfolio_Website/node_modules/.pnpm/h3@1.12.0/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/evane/Desktop/MyProjects/Portfolio_Website/node_modules/.pnpm/devalue@5.0.0/node_modules/devalue/index.js';
import 'file://C:/Users/evane/Desktop/MyProjects/Portfolio_Website/node_modules/.pnpm/ufo@1.5.4/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/evane/Desktop/MyProjects/Portfolio_Website/node_modules/.pnpm/vue@3.5.4_typescript@5.6.2/node_modules/vue/server-renderer/index.mjs';
import 'file://C:/Users/evane/Desktop/MyProjects/Portfolio_Website/node_modules/.pnpm/@unhead+ssr@1.11.2/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file://C:/Users/evane/Desktop/MyProjects/Portfolio_Website/node_modules/.pnpm/ofetch@1.3.4/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/evane/Desktop/MyProjects/Portfolio_Website/node_modules/.pnpm/destr@2.0.3/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/evane/Desktop/MyProjects/Portfolio_Website/node_modules/.pnpm/unenv@1.10.0/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Users/evane/Desktop/MyProjects/Portfolio_Website/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/evane/Desktop/MyProjects/Portfolio_Website/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/evane/Desktop/MyProjects/Portfolio_Website/node_modules/.pnpm/scule@1.3.0/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/evane/Desktop/MyProjects/Portfolio_Website/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/evane/Desktop/MyProjects/Portfolio_Website/node_modules/.pnpm/ohash@1.1.3/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/evane/Desktop/MyProjects/Portfolio_Website/node_modules/.pnpm/unstorage@1.12.0_ioredis@5.4.1/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/evane/Desktop/MyProjects/Portfolio_Website/node_modules/.pnpm/unstorage@1.12.0_ioredis@5.4.1/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/Users/evane/Desktop/MyProjects/Portfolio_Website/node_modules/.pnpm/nuxt@3.13.1_@types+node@22.5.4_eslint@8.57.0_rollup@3.29.4_typescript@5.6.2_vite@5.4.3/node_modules/nuxt/dist/core/runtime/nitro/cache-driver.js';
import 'file://C:/Users/evane/Desktop/MyProjects/Portfolio_Website/node_modules/.pnpm/unstorage@1.12.0_ioredis@5.4.1/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/evane/Desktop/MyProjects/Portfolio_Website/node_modules/.pnpm/radix3@1.1.2/node_modules/radix3/dist/index.mjs';
import 'file://C:/Users/evane/Desktop/MyProjects/Portfolio_Website/node_modules/.pnpm/pathe@1.1.2/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/evane/Desktop/MyProjects/Portfolio_Website/node_modules/.pnpm/unhead@1.11.2/node_modules/unhead/dist/index.mjs';
import 'file://C:/Users/evane/Desktop/MyProjects/Portfolio_Website/node_modules/.pnpm/vue@3.5.4_typescript@5.6.2/node_modules/vue/index.mjs';
import 'file://C:/Users/evane/Desktop/MyProjects/Portfolio_Website/node_modules/.pnpm/@unhead+shared@1.11.2/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/Users/evane/Desktop/MyProjects/Portfolio_Website/node_modules/.pnpm/unctx@2.3.1/node_modules/unctx/dist/index.mjs';

const _sfc_main = {
  __name: "error-500",
  __ssrInlineRender: true,
  props: {
    appName: {
      type: String,
      default: "Nuxt"
    },
    version: {
      type: String,
      default: ""
    },
    statusCode: {
      type: Number,
      default: 500
    },
    statusMessage: {
      type: String,
      default: "Server error"
    },
    description: {
      type: String,
      default: "This page is temporarily unavailable."
    }
  },
  setup(__props) {
    const props = __props;
    useHead({
      title: `${props.statusCode} - ${props.statusMessage} | ${props.appName}`,
      script: [],
      style: [
        {
          children: `*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--un-default-border-color, #e5e7eb)}:before,:after{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}h1{font-size:inherit;font-weight:inherit}h1,p{margin:0}*,:before,:after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / .5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }`
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs_1(vueExports.mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, _attrs))} data-v-0154b231><div class="fixed -bottom-1/2 left-0 right-0 h-1/2 spotlight" data-v-0154b231></div><div class="max-w-520px text-center" data-v-0154b231><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-0154b231>${ssrInterpolate_1(__props.statusCode)}</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-0154b231>${ssrInterpolate_1(__props.description)}</p></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/nuxt@3.13.1_@types+node@22.5.4_eslint@8.57.0_rollup@3.29.4_typescript@5.6.2_vite@5.4.3/node_modules/nuxt/dist/app/components/error-500.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const error500 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0154b231"]]);

export { error500 as default };
//# sourceMappingURL=error-500-C4rahNMx.mjs.map
