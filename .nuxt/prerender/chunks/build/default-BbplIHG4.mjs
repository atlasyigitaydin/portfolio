import { v as vueExports, u as useRouter, s as ssrRenderAttrs_1, k as ssrRenderList_1, l as ssrRenderClass_1, f as ssrInterpolate_1, m as ssrRenderSlot_1 } from './server.mjs';
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

const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const currentRoute = vueExports.computed(() => {
      return useRouter().currentRoute.value.name;
    });
    const items = [{
      key: "me",
      label: "Me"
    }, {
      key: "projects",
      label: "Projects"
    }, {
      key: "works",
      label: "Works"
    }, {
      key: "contact",
      label: "Contact me"
    }];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs_1(_attrs)} data-v-fc744de3><header data-v-fc744de3><!--[-->`);
      ssrRenderList_1(items, (item, index) => {
        _push(`<div class="${ssrRenderClass_1([item.key === vueExports.unref(currentRoute) ? "headerButtonsClick" : "", "headerButtons"])}" data-v-fc744de3>${ssrInterpolate_1(item.label)}</div>`);
      });
      _push(`<!--]--></header>`);
      ssrRenderSlot_1(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fc744de3"]]);

export { _default as default };
//# sourceMappingURL=default-BbplIHG4.mjs.map
