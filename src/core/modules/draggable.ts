import { VueDraggableNext } from 'vue-draggable-next'
import type { RVModule } from '~/core/types'
import '@vue/runtime-core'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    Draggable: typeof VueDraggableNext
  }
}

export const install: RVModule = ({ app }) => {
  app.component('Draggable', VueDraggableNext)
}
