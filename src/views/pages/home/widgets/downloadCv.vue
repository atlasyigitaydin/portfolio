<script setup lang="ts">
import CV from '~/assets/yigit_aydin_cv.pdf'
const downloadCV = () => {
  const link = document.createElement('a')
  link.href = CV
  link.download = 'yigit_aydin_cv.pdf'
  link.click()
}
</script>

<template>
  <Button icon="pi pi-download" label="CV" @click="downloadCV" />
</template>
