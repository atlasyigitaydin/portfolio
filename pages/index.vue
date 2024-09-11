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

<style scoped>
.button {
  border: none;
  color: white;
  padding: 8px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>
