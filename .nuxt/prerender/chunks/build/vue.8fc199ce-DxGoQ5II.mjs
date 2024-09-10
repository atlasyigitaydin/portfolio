import { i as injectHead, v as vueExports, g as resolveUnrefHeadInput } from './server.mjs';

function useHead(input, options = {}) {
  const head = options.head || injectHead();
  if (head) {
    if (!head.ssr)
      return clientUseHead(head, input, options);
    return head.push(input, options);
  }
}
function clientUseHead(head, input, options = {}) {
  const deactivated = vueExports.ref(false);
  const resolvedInput = vueExports.ref({});
  vueExports.watchEffect(() => {
    resolvedInput.value = deactivated.value ? {} : resolveUnrefHeadInput(input);
  });
  const entry = head.push(resolvedInput.value, options);
  vueExports.watch(resolvedInput, (e) => {
    entry.patch(e);
  });
  vueExports.getCurrentInstance();
  return entry;
}

export { useHead as u };
//# sourceMappingURL=vue.8fc199ce-DxGoQ5II.mjs.map
