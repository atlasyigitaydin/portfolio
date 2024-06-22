import '~/assets/styles/layout.css'
import auraDarkNoir from '~/assets/styles/themes/aura/dark/noir/theme.css?url'
import auraLightNoir from '~/assets/styles/themes/aura/light/noir/theme.css?url'
export const appMode = ref('v-boxed')
export const themeLinks = reactive([
  {
    rel: 'stylesheet',
    type: 'text/css',
    href: computed(() => isDark.value ? auraDarkNoir : auraLightNoir),
  },
])
