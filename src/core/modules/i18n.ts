import type { RVModule } from '~/core/types'

export const install: RVModule = ({ app, i18n }) => {
  app.use(i18n)
}
