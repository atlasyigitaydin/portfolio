<script setup lang="ts">
definePageMeta({
  name: 'home',
  key: route => route.fullPath,
  path: '/'
})
</script>

<template>
  <div class="h-[800px] text-center w-full flex justify-center items-center overflow-auto">
    <div class="w-5/12 text-center">
      hi
    </div>
  </div>
</template>
