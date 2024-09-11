<script setup lang="ts">
definePageMeta({
  name: 'home',
  path: '/',
  key: route => route.fullPath
  // layout: false
})
</script>

<template>
  <div class="h-[800px] text-center w-full flex justify-center items-center overflow-auto">
    <div class="w-5/12 text-center">
      hi
    </div>
  </div>
</template>
