import { VueDraggableNext } from "vue-draggable-next";
import "@vue/runtime-core";
import { createHead, useHead } from "@vueuse/head";
import { Icon } from "@iconify/vue";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import ConfirmationService from "primevue/confirmationservice";
import DialogService from "primevue/dialogservice";
import ToastService from "primevue/toastservice";
import Tooltip from "primevue/tooltip";
import Ripple from "primevue/ripple";
import { Field } from "vee-validate";
import { setLocale } from "yup";
import { defineComponent, mergeProps, useSSRContext, ref, onMounted, onUnmounted, computed, unref, reactive, resolveComponent, withCtx, createVNode, createApp } from "vue";
import { useRouter, createRouter, createWebHistory } from "vue-router";
import { useI18n, createI18n } from "vue-i18n/dist/vue-i18n.runtime.esm-bundler.js";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderComponent } from "vue/server-renderer";
import { useDark, useToggle, usePreferredDark } from "@vueuse/core";
const en = {
  "button": {
    "about": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["About"]);
    },
    "back": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Back"]);
    },
    "go": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["GO"]);
    },
    "home": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Home"]);
    },
    "toggle_dark": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Toggle dark mode"]);
    },
    "toggle_langs": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Change languages"]);
    }
  },
  "intro": {
    "desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Opinionated Vite Starter Template"]);
    },
    "dynamic-route": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Demo of dynamic route"]);
    },
    "hi": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["Hi, ", _interpolate(_named("name")), "!"]);
    },
    "aka": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Also known as"]);
    },
    "whats-your-name": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["What's your name"]);
    }
  },
  "not-found": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Not found"]);
  },
  "field_invalid": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Invalid field"]);
  },
  "field_required": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["This field is required"]);
  },
  "field_too_big": (ctx) => {
    const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
    return _normalize(["Must be at most ", _interpolate(_list(0)), " characters"]);
  },
  "field_too_short": (ctx) => {
    const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
    return _normalize(["Must be at least ", _interpolate(_list(0)), " characters"]);
  }
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: en
}, Symbol.toStringTag, { value: "Module" }));
const tr = {
  "button": {
    "about": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Hakkımda"]);
    },
    "back": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Geri"]);
    },
    "go": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["İLERİ"]);
    },
    "home": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Anasayfa"]);
    },
    "toggle_dark": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Karanlık modu değiştir"]);
    },
    "toggle_langs": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Dilleri değiştir"]);
    }
  },
  "intro": {
    "desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Görüşlü Vite Başlangıç Şablonu"]);
    },
    "dynamic-route": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Dinamik rota demosu"]);
    },
    "hi": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["Merhaba, ", _interpolate(_named("name")), "!"]);
    },
    "aka": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ayrıca şöyle bilinir"]);
    },
    "whats-your-name": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Adınız nedir?"]);
    }
  },
  "not-found": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Bulunamadı"]);
  },
  "field_invalid": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Geçersiz alan"]);
  },
  "field_required": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Bu alan zorunludur"]);
  },
  "field_too_short": (ctx) => {
    const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
    return _normalize(["En az ", _interpolate(_list(0)), " karakter olmalıdır"]);
  },
  "field_too_big": (ctx) => {
    const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
    return _normalize(["En fazla ", _interpolate(_list(0)), " karakter olmalıdır"]);
  }
};
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: tr
}, Symbol.toStringTag, { value: "Module" }));
const install$7 = ({ app: app2 }) => {
  app2.component("Draggable", VueDraggableNext);
};
const __vite_glob_1_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  install: install$7
}, Symbol.toStringTag, { value: "Module" }));
const install$6 = ({ app: app2 }) => {
  const head = createHead();
  app2.use(head);
};
const __vite_glob_1_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  install: install$6
}, Symbol.toStringTag, { value: "Module" }));
const install$5 = ({ app: app2, i18n: i18n2 }) => {
  app2.use(i18n2);
};
const __vite_glob_1_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  install: install$5
}, Symbol.toStringTag, { value: "Module" }));
const install$4 = ({ app: app2 }) => {
  app2.component("IFIcon", {
    ...Icon
  });
};
const __vite_glob_1_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  install: install$4
}, Symbol.toStringTag, { value: "Module" }));
const install$3 = ({ app: app2 }) => {
  const pinia = createPinia();
  app2.use(pinia);
};
const __vite_glob_1_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  install: install$3
}, Symbol.toStringTag, { value: "Module" }));
const primevue_min = "";
const primeflex = "";
const primeicons = "";
const install$2 = ({ app: app2 }) => {
  app2.use(PrimeVue, { ripple: true });
  app2.use(ConfirmationService);
  app2.use(DialogService);
  app2.use(ToastService);
  app2.directive("ripple", Ripple);
  app2.directive("tooltip", Tooltip);
};
const __vite_glob_1_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  install: install$2
}, Symbol.toStringTag, { value: "Module" }));
const install$1 = ({ app: app2, router: router2 }) => {
  app2.use(router2);
};
const __vite_glob_1_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  install: install$1
}, Symbol.toStringTag, { value: "Module" }));
const install = ({ app: app2, i18n: i18n2 }) => {
  const composer = i18n2.global;
  setLocale({
    mixed: {
      default: composer.t("field_invalid"),
      required: composer.t("field_required")
    },
    number: {
      min: ({ min }) => ({ key: composer.t("field_too_short"), values: { min } }),
      max: ({ max }) => ({ key: composer.t("field_too_big"), values: { max } })
    }
  });
  app2.component("VEField", Field);
};
const __vite_glob_1_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  install
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "404",
  __ssrInlineRender: true,
  setup(__props) {
    const router2 = useRouter();
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-content-center align-items-center h-full w-full z-5" }, _attrs))}><label class="text-4xl"> 404 </label></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/layouts/404.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const boxCount = 2e3;
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "backgound",
  __ssrInlineRender: true,
  setup(__props) {
    const generateRandomNumber = () => {
      return Math.floor(Math.random() * boxCount);
    };
    const randomNumber = ref(generateRandomNumber());
    let intervalId;
    onMounted(() => {
      intervalId = window.setInterval(() => {
        randomNumber.value = generateRandomNumber();
      }, 500);
    });
    onUnmounted(() => {
      if (intervalId !== void 0)
        clearInterval(intervalId);
    });
    const generateBox = (count) => {
      const Boxes = [];
      for (let i = 0; i < count; i++)
        Boxes.push(i);
      return Boxes;
    };
    const boxes = computed(() => {
      return generateBox(boxCount);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed top-0 left-0 w-full h-full flex flex-wrap gap-1 overflow-hidden p-1" }, _attrs))}><!--[-->`);
      ssrRenderList(unref(boxes), (box, index) => {
        _push(`<div class="${ssrRenderClass([{
          "shadow-8": index === unref(randomNumber) || index === Math.floor(Math.random() * 2e3) || index === Math.floor(Math.random() * 2e3) || index === Math.floor(Math.random() * 2e3) || index === Math.floor(Math.random() * 2e3) || index === Math.floor(Math.random() * 2e3) || index === Math.floor(Math.random() * 2e3) || index === Math.floor(Math.random() * 2e3) || index === Math.floor(Math.random() * 2e3) || index === Math.floor(Math.random() * 2e3) || index === Math.floor(Math.random() * 2e3) || index === Math.floor(Math.random() * 2e3) || index === Math.floor(Math.random() * 2e3) || index === Math.floor(Math.random() * 2e3) || index === Math.floor(Math.random() * 2e3)
        }, "shadow-2 w-2rem h-2rem border-round-sm hover:shadow-8"])}"></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/layouts/backgound.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const layouts = {
  "404": _sfc_main$3,
  "backgound": _sfc_main$2
};
function setupLayouts(routes2) {
  return routes2.map((route) => {
    var _a;
    return {
      path: route.path,
      component: layouts[((_a = route.meta) == null ? void 0 : _a.layout) || "default"],
      children: [{ ...route, path: "" }]
    };
  });
}
const isDark = useDark();
const toggleDark = useToggle(isDark);
const preferredDark = usePreferredDark();
const layout = "";
const auraDarkAmber = "/assets/theme-bb54bfbf.css?used";
const auraLightAmber = "/assets/theme-d62b83cd.css?used";
const appMode = ref("v-boxed");
const themeLinks = reactive([
  {
    rel: "stylesheet",
    type: "text/css",
    href: computed(() => isDark.value ? auraDarkAmber : auraLightAmber)
  }
]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "App",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Temp",
      htmlAttrs: { class: appMode.value },
      meta: [
        {
          name: "description",
          content: "template"
        },
        {
          name: "app-mode",
          content: computed(() => appMode.value)
        }
      ],
      link: [
        {
          rel: "icon",
          type: "image/svg+xml",
          href: () => isDark.value ? "/src/assets/icons/svg/dark-vue.svg" : "/src/assets/icons/svg/light-vue.svg"
        },
        ...themeLinks
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Toast = resolveComponent("Toast");
      const _component_ConfirmDialog = resolveComponent("ConfirmDialog");
      const _component_DynamicDialog = resolveComponent("DynamicDialog");
      const _component_RouterSide = resolveComponent("RouterSide");
      const _component_RouterView = resolveComponent("RouterView");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(ssrRenderComponent(_component_Toast, null, null, _parent));
      _push(ssrRenderComponent(_component_ConfirmDialog, null, null, _parent));
      _push(ssrRenderComponent(_component_DynamicDialog, null, null, _parent));
      _push(ssrRenderComponent(_component_RouterSide, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_RouterView, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_RouterView)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(` .. `);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __pages_import_2__ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const __pages_import_0__ = () => import("./assets/downloadCv-3f829889.js");
const __pages_import_1__ = () => import("./assets/index-abca10f4.js");
const __pages_import_3__ = () => import("./assets/_...all_-40e2efcd.js");
const routes$1 = [{ "name": "home-widgets-downloadCv", "path": "/home/widgets/downloadcv", "component": __pages_import_0__, "props": true }, { "name": "home", "path": "/", "component": __pages_import_1__, "props": true, "meta": { "layout": "default" } }, { "name": "index", "path": "/", "component": __pages_import_2__, "props": true }, { "name": "all", "path": "/:all(.*)*", "component": __pages_import_3__, "props": true, "meta": { "layout": 404 } }];
const app = createApp(_sfc_main$1);
const routes = setupLayouts(routes$1);
const router = createRouter({
  history: createWebHistory("/"),
  routes
});
const messages = Object.fromEntries(
  Object.entries(
    /* @__PURE__ */ Object.assign({ "/locales/en.yml": __vite_glob_0_0, "/locales/tr.yml": __vite_glob_0_1 })
  ).map(([key, value]) => {
    const yaml = key.endsWith(".yaml");
    return [key.slice(9, yaml ? -5 : -4), value.default];
  })
);
const i18n = createI18n({
  legacy: false,
  locale: "tr",
  messages
});
Object.values(/* @__PURE__ */ Object.assign({ "./core/modules/draggable.ts": __vite_glob_1_0, "./core/modules/head.ts": __vite_glob_1_1, "./core/modules/i18n.ts": __vite_glob_1_2, "./core/modules/iconify.ts": __vite_glob_1_3, "./core/modules/pinia.ts": __vite_glob_1_4, "./core/modules/primevue.ts": __vite_glob_1_5, "./core/modules/router.ts": __vite_glob_1_6, "./core/modules/veevalidate.ts": __vite_glob_1_7 })).forEach((i) => {
  var _a;
  return (_a = i.install) == null ? void 0 : _a.call(i, { app, router, i18n });
});
app.mount("#app");
export {
  app,
  messages,
  router
};
