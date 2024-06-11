export const useAppStore = defineStore('App Store', () => {
  const theme = computed(() => isDark.value)
  return {
    theme,
  }
})
