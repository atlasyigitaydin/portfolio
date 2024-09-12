<script setup lang="ts">
definePageMeta({
  name: 'home',
  path: '/'
  // layout: false
})
</script>

<template>
  <div class="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-0">
    <div class="w-full flex flex-col h-full items-center justify-center">
      <div class="flex w-full">
        <label class="lg:text-[180px] md:text-[130px] text-[50px] font-thin flex w-full justify-start">FRONTEND</label>
        <!-- <div class="flex flex-col justify-center gap-3 py-12 px-4 items-around w-full">
          <label> ATLAS </label>
          <label> YİĞİT </label>
          <label> AYDIN </label>
        </div> -->
      </div>
      <label class="lg:text-[160px] md:text-[120px] text-[40px] font-thin flex w-full justify-end">DEVELOPER</label>
    </div>
    <div class="w-full ">
      <!-- <AbilitySlider /> -->
    </div>
  </div>
</template>

<style scoped>
</style>
