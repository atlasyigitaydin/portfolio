import { createHead } from '@vueuse/head'
import type { RVModule } from '~/core/types'

export const install: RVModule = ({ app }) => {
  const head = createHead()
  app.use(head)
}
