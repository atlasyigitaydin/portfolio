<script setup lang="ts">
const boxCount = 2000

const generateRandomNumber = () => {
  return Math.floor(Math.random() * boxCount)
}

const randomNumber = ref(generateRandomNumber())

let intervalId: number | undefined

onMounted(() => {
  intervalId = window.setInterval(() => {
    randomNumber.value = generateRandomNumber()
  }, 500)
})

onUnmounted(() => {
  if (intervalId !== undefined)
    clearInterval(intervalId)
})

const generateBox = (count: number) => {
  const Boxes = []
  for (let i = 0; i < count; i++)
    Boxes.push(i)

  return Boxes
}

const boxes = computed(() => {
  return generateBox(boxCount)
})
</script>

<template>
  <div class="fixed top-0 left-0 w-full h-full flex flex-wrap gap-1 overflow-hidden p-1 justify-content-center align-items-center">
    <div
      v-for="(box, index) in boxes"
      :key="box"
      class="shadow-2 w-2rem h-2rem border-round-sm hover:shadow-8 shadow-animation"
      :class="{
        'shadow-8':
          index === randomNumber
          || index === Math.floor(Math.random() * 2000)
          || index === Math.floor(Math.random() * 2000)
          || index === Math.floor(Math.random() * 2000)
          || index === Math.floor(Math.random() * 2000)
          || index === Math.floor(Math.random() * 2000)
          || index === Math.floor(Math.random() * 2000)
          || index === Math.floor(Math.random() * 2000)
          || index === Math.floor(Math.random() * 2000)
          || index === Math.floor(Math.random() * 2000)
          || index === Math.floor(Math.random() * 2000)
          || index === Math.floor(Math.random() * 2000)
          || index === Math.floor(Math.random() * 2000)
          || index === Math.floor(Math.random() * 2000)
          || index === Math.floor(Math.random() * 2000)
          || index === Math.floor(Math.random() * 2000),
      }"
    />
  </div>
</template>

<style scoped>
.shadow-animation {
  animation: shadowAnimation 5s infinite;
  box-shadow: 0px 9px 46px 8px rgba(0, 0, 0, 0.12), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 11px 15px rgba(0, 0, 0, 0.2);
}

@keyframes shadowAnimation {
  0% { box-shadow: 0px 9px 46px 8px rgba(0, 0, 0, 0.12), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 11px 15px rgba(0, 0, 0, 0.2); }
  50% { box-shadow: 0px 12px 50px 10px rgba(0, 0, 0, 0.2), 0px 30px 50px 5px rgba(0, 0, 0, 0.25), 0px 15px 20px rgba(0, 0, 0, 0.3); }
  100% { box-shadow: 0px 9px 46px 8px rgba(0, 0, 0, 0.12), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 11px 15px rgba(0, 0, 0, 0.2); }
}

.hover\\:shadow-8:hover {
  box-shadow: 0px 12px 50px 10px rgba(0, 0, 0, 0.2), 0px 30px 50px 5px rgba(0, 0, 0, 0.25), 0px 15px 20px rgba(0, 0, 0, 0.3);
}
</style>
