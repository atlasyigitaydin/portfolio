import __unplugin_components_0 from "primevue/button";
import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
const CV = "/assets/yigit_aydin_cv-9d26bad9.pdf";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "downloadCv",
  __ssrInlineRender: true,
  setup(__props) {
    const downloadCV = () => {
      const link = document.createElement("a");
      link.href = CV;
      link.download = "yigit_aydin_cv.pdf";
      link.click();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = __unplugin_components_0;
      _push(ssrRenderComponent(_component_Button, mergeProps({
        icon: "pi pi-download",
        label: "CV",
        onClick: downloadCV
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/pages/home/widgets/downloadCv.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
