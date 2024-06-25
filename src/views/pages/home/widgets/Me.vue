<script setup lang="ts">
import MePp from '~/assets/me.jpg'

const binaryText = (text: string) => {
  return text
}
</script>

<template>
  <div class="w-full justify-content-between overflow-hidden flex flex-column align-items-center z-3 gap-4">
    <img class="overflow-hidden border-round border-2 mt-3 shadow-8" style="max-height: 200px; min-height: 200px;" image-style="width: 70%;" :src="MePp">
    <div
      class="gap-2 flex flex-column text-center"
    >
      <label class="font-bold text-2xl"> {{ binaryText("YİĞİT AYDIN") }} </label>
      <label class="text-xl"> {{ binaryText("FRONTEND DEVELOPER") }} </label>
    </div>
  </div>
</template>

<style scoped>

</style>
