<script setup lang="ts">
import CV from '~/assets/yigit_aydin_cv.pdf'
const downloadCV = async () => {
  const link = document.createElement('a')
  link.href = CV
  link.download = 'yigit_aydin_cv.pdf'
  link.click()
}
</script>

<template>
  <MyButton icon="download" label="CV" @click="downloadCV" />
</template>
