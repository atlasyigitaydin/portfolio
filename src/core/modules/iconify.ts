import { Icon } from '@iconify/vue'
import type { RVModule } from '~/core/types'
import '@vue/runtime-core'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    IFIcon: typeof Icon
  }
}

export const install: RVModule = ({ app }) => {
  app.component('IFIcon', {
    ...Icon,
  })
}
