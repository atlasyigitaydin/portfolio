import { Field } from 'vee-validate'
import { setLocale } from 'yup'
import type { Composer } from 'vue-i18n'
import type { RVModule } from '~/core/types'
import '@vue/runtime-core'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    VEField: typeof Field
  }
}

export const install: RVModule = ({ app, i18n }) => {
  const composer = i18n.global as Composer

  setLocale({
    mixed: {
      default: composer.t('field_invalid'),
      required: composer.t('field_required'),
    },
    number: {
      min: ({ min }) => ({ key: composer.t('field_too_short'), values: { min } }),
      max: ({ max }) => ({ key: composer.t('field_too_big'), values: { max } }),
    },
  })

  app.component('VEField', Field)
}
