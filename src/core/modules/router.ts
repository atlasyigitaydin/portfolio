// import NProgress from 'nprogress'
import type { RVModule } from '~/core/types'

export const install: RVModule = ({ app, router }) => {
  /* router.beforeEach(async (to, from) => {
    if (to.path !== from.path)
      NProgress.start()
  }) */

  /* router.afterEach(() => {
    NProgress.done()
  }) */

  app.use(router)
}
