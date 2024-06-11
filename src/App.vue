<script setup lang="ts">
// import DynamicDialog from 'primevue/dynamicdialog'
// import Toast from 'primevue/Toast'
// import ConfirmDialog from 'primevue/ConfirmDialog'

useHead({
  title: 'Temp',
  htmlAttrs: { class: appMode.value },
  meta: [
    {
      name: 'description',
      content: 'template',
    },
    {
      name: 'app-mode',
      content: computed(() => appMode.value),
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: () => isDark.value ? '/src/assets/icons/svg/dark-vue.svg' : '/src/assets/icons/svg/light-vue.svg',
    },
    ...themeLinks,
  ],
})
</script>

<template>
  <!-- <Toast />
  <ConfirmDialog />
  <DynamicDialog />
  <header>
    <TheHeader />
  </header>
  <routerSide>
    <RouterView />
  </routerSide> -->
  <!-- <footer>
    <TheFooter />
  </footer> -->
    <RouterView />
</template>
