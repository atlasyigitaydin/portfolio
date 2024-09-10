import { v as vueExports, _ as _export_sfc, u as useRouter, s as ssrRenderAttrs_1, l as ssrRenderList_1, m as ssrRenderClass_1, e as ssrInterpolate_1, o as ssrRenderSlot_1, a as navigateTo } from './server.mjs';
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
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'devalue';
import 'vue/server-renderer';
import '@unhead/ssr';
import 'unhead';
import 'vue';
import '@unhead/shared';

const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const currentRoute = vueExports.computed(() => {
      return useRouter().currentRoute.value.name;
    });
    const items = [{
      key: "me",
      label: "Me",
      to: () => {
        navigateTo({
          name: "me"
        });
      }
    }, {
      key: "projects",
      label: "Projects",
      to: () => {
        navigateTo({
          name: "projects"
        });
      }
    }, {
      key: "works",
      label: "Works",
      to: () => {
        navigateTo({
          name: "works"
        });
      }
    }, {
      key: "contact",
      label: "Contact me",
      to: () => {
        navigateTo({
          name: "contact"
        });
      }
    }];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs_1(_attrs)} data-v-fbd21167><header data-v-fbd21167><!--[-->`);
      ssrRenderList_1(items, (item, index) => {
        _push(`<div class="${ssrRenderClass_1([item.key === vueExports.unref(currentRoute) ? "headerButtonsClick" : "", "headerButtons"])}" data-v-fbd21167>${ssrInterpolate_1(item.label)}</div>`);
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
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fbd21167"]]);

export { _default as default };
//# sourceMappingURL=default-7FxAqSVi.mjs.map
