import '~/assets/styles/layout.css'

import auraDarkAmber from '~/assets/styles/themes/aura/dark/amber/theme.css?url'
import auraLightAmber from '~/assets/styles/themes/aura/light/amber/theme.css?url'

// import auraDarkBlue from '~/assets/styles/themes/aura/dark/blue/theme.css?url'
// import auraLightBlue from '~/assets/styles/themes/aura/light/blue/theme.css?url'

// import auraDarkCyan from '~/assets/styles/themes/aura/dark/cyan/theme.css?url'
// import auraLightCyan from '~/assets/styles/themes/aura/light/cyan/theme.css?url'

// import auraDarkGreen from '~/assets/styles/themes/aura/dark/green/theme.css?url'
// import auraLightGreen from '~/assets/styles/themes/aura/light/green/theme.css?url'

// import auraDarkIndigo from '~/assets/styles/themes/aura/dark/indigo/theme.css?url'
// import auraLightIndigo from '~/assets/styles/themes/aura/light/indigo/theme.css?url'

// import auraDarkLime from '~/assets/styles/themes/aura/dark/lime/theme.css?url'
// import auraLightLime from '~/assets/styles/themes/aura/light/lime/theme.css?url'

// import auraDarkNoir from '~/assets/styles/themes/aura/dark/noir/theme.css?url'
// import auraLightNoir from '~/assets/styles/themes/aura/light/noir/theme.css?url'

// import auraDarkPink from '~/assets/styles/themes/aura/dark/pink/theme.css?url'
// import auraLightPink from '~/assets/styles/themes/aura/light/pink/theme.css?url'

// import auraDarkPurple from '~/assets/styles/themes/aura/dark/purple/theme.css?url'
// import auraLightPurple from '~/assets/styles/themes/aura/light/purple/theme.css?url'

// import auraDarkTeal from '~/assets/styles/themes/aura/dark/teal/theme.css?url'
// import auraLightTeal from '~/assets/styles/themes/aura/light/teal/theme.css?url'

// import laraDarkAmber from '~/assets/styles/themes/lara/dark/amber/theme.css?url'
// import laraLightAmber from '~/assets/styles/themes/lara/light/amber/theme.css?url'

// import laraDarkBlue from '~/assets/styles/themes/lara/dark/blue/theme.css?url'
// import laraLightBlue from '~/assets/styles/themes/lara/light/blue/theme.css?url'

// import laraDarkCyan from '~/assets/styles/themes/lara/dark/cyan/theme.css?url'
// import laraLightCyan from '~/assets/styles/themes/lara/light/cyan/theme.css?url'

// import laraDarkGreen from '~/assets/styles/themes/lara/dark/green/theme.css?url'
// import laraLightGreen from '~/assets/styles/themes/lara/light/green/theme.css?url'

// import laraDarkIndigo from '~/assets/styles/themes/lara/dark/indigo/theme.css?url'
// import laraLightIndigo from '~/assets/styles/themes/lara/light/indigo/theme.css?url'

// import laraDarkPink from '~/assets/styles/themes/lara/dark/pink/theme.css?url'
// import laraLightPink from '~/assets/styles/themes/lara/light/pink/theme.css?url'

// import laraDarkPurple from '~/assets/styles/themes/lara/dark/purple/theme.css?url'
// import laraLightPurple from '~/assets/styles/themes/lara/light/purple/theme.css?url'

// import auraDarkTeal from '~/assets/styles/themes/aura/dark/teal/theme.css?url'
// import auraLightTeal from '~/assets/styles/themes/aura/light/teal/theme.css?url'

// import sohoDark from '~/assets/styles/themes/soho/dark/theme.css?url'
// import sohoLight from '~/assets/styles/themes/soho/light/theme.css?url'

// import vivaDark from '~/assets/styles/themes/viva/dark/theme.css?url'
// import vivaLight from '~/assets/styles/themes/viva/light/theme.css?url'

// import materialDarkCompactDeeppurple from '~/assets/styles/themes/material/dark/compact/deeppurple/theme.css?url'
// import materialLightCompactDeeppurple from '~/assets/styles/themes/material/light/compact/deeppurple/theme.css?url'

// import materialDarkCompactIndigo from '~/assets/styles/themes/material/dark/compact/indigo/theme.css?url'
// import materialLightCompactIndigo from '~/assets/styles/themes/material/light/compact/indigo/theme.css?url'

// import materialDarkStandardDeeppurple from '~/assets/styles/themes/material/dark/standard/deeppurple/theme.css?url'
// import materialLightStandardDeeppurple from '~/assets/styles/themes/material/light/standard/deeppurple/theme.css?url'

// import materialDarkStandardIndigo from '~/assets/styles/themes/material/dark/standard/indigo/theme.css?url'
// import materialLightStandardIndigo from '~/assets/styles/themes/material/light/standard/indigo/theme.css?url'

export const appMode = ref('v-boxed')

export const themeLinks = reactive([
  {
    rel: 'stylesheet',
    type: 'text/css',
    href: computed(() => isDark.value ? auraDarkAmber : auraLightAmber),
  },
])
