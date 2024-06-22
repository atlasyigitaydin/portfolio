<script setup lang="ts">
import Background from './views/layouts/backgound.vue'
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
  <Background />
  <Toast />
  <ConfirmDialog />
  <DynamicDialog />
  <RouterSide class="montserrat">
    <RouterView />
    <MyLinks class="fixed bottom-0 left-0" />
    <!-- <ChangeTheme class="fixed bottom-0 right-0" /> -->
  </RouterSide>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

.montserrat {
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: bold;
}
</style>
