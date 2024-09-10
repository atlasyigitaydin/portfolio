<script setup lang="ts">
import { useHead } from '#imports'

useHead({
  title: 'Atlas Yiğit Aydın',
  meta: [
    {
      name: 'description',
      content: 'Atlas Yiğit Aydın Portfolio'
    }
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/app-logo.svg'
    }
  ]
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
    transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(1rem);
}
</style>
