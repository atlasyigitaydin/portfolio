<script setup lang="ts">
definePageMeta({
  name: 'home',
  path: '/'
})
</script>

<template>
  <div class="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-0">
    <div class="w-full flex flex-col h-full items-center justify-center">
      <!-- Add animation classes for each label -->
      <label class="lg:text-[180px] md:text-[130px] text-[50px] font-thin flex w-full justify-start animate-fade-slide-in-left">FRONTEND</label>
      <label class="lg:text-[160px] md:text-[120px] text-[40px] font-thin flex w-full justify-end animate-fade-slide-in-right">DEVELOPER</label>
    </div>
    <div class="w-full ">
      <AbilitySlider />
    </div>
  </div>
</template>

<style scoped>
@keyframes fadeSlideInLeft {
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeSlideInRight {
  0% {
    opacity: 0;
    transform: translateX(100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fade-slide-in-left {
  animation: fadeSlideInLeft 1.5s ease-in-out forwards;
}

.animate-fade-slide-in-right {
  animation: fadeSlideInRight 1.5s ease-in-out forwards;
}
</style>
