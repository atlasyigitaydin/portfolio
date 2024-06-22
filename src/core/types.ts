import type { RouteMeta, Router } from 'vue-router'

import type { MenuItem } from 'primevue/menuitem'
import type { App } from 'vue'
import type { I18n } from 'vue-i18n'

export type RVModule = (ctx: { app: App<Element>; router: Router; i18n: I18n }) => void

export interface NavItem extends MenuItem {}

export interface RVMeta extends RouteMeta {
  requiresRole?: string[]
  requiresIsAppPlanUser?: boolean
  requiresIsPushNotificationUser?: boolean
  requiresIsExportUser?: boolean
  requiresIsDeleteIntegratorUser?: boolean
  requiresIsAppPlansUser?: boolean
  requiresIsActivityLogUser?: boolean
  requiresIsAppOrderUser?: boolean
}

export interface RoutesButton {
  label: string
  route: Function
  icon: string
}
