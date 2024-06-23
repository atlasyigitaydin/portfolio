<script setup lang="ts">
import Toast from 'primevue/Toast'
import DarkBackground from './views/components/DarkBackground.vue'
import WhiteBackground from './views/components/WhiteBackground.vue'
// import DynamicDialog from 'primevue/dynamicdialog'
// import ConfirmDialog from 'primevue/ConfirmDialog'

useHead({
  title: 'Yiğit Aydın',
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
  <DarkBackground v-if="isDark" />
  <WhiteBackground v-if="!isDark" />
  <Toast />
  <ConfirmDialog />
  <DynamicDialog />
  <RouterSide class="montserrat">
    <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transition || 'fade'">
        <component :is="Component" />
      </transition>
    </router-view>
    <MyLinks class="fixed bottom-0 left-0" />
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

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
