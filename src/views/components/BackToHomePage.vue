<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <MyButton link icon="angle-left" label="Home Page" @click="router.push({ name: 'home' })" />
</template>
