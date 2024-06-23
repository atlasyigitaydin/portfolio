<script setup lang="ts">
onMounted(() => {
  const container = document.querySelector('.rain-container')
  if (container) {
    for (let i = 0; i < 10; i++) {
      const raindrop = document.createElement('div')
      raindrop.classList.add('rain-white', 'animate-down-white')
      raindrop.style.left = `${Math.random() * 100}vw`
      raindrop.style.animationDelay = `${Math.random() * 3}s`
      container.appendChild(raindrop)
    }
  }
})
</script>

<template>
  <div class="fixed top-0 left-0 w-screen h-screen rain-container opacity-30 px-2" />
</template>

<style>
.rain-white {
  width: 1px;
  height: 150px;
  background: linear-gradient(0deg, rgb(0, 0, 0) 0%, rgba(0,0,0,0) 100%);
  position: fixed;
  top: -300px;
}

@keyframes move-down-white {
  0% {
    top: -100px;
  }
  100% {
    top: 100vh;
  }
}

.animate-down-white {
  animation: move-down-white 3s linear infinite;
}
</style>
