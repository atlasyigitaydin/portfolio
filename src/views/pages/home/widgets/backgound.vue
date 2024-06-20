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
  <div class="fixed top-0 left-0 w-full h-full flex flex-wrap gap-1 overflow-hidden p-1 z-1">
    <div
      v-for="(box, index) in boxes"
      :key="box"
      class="shadow-2 w-2rem h-2rem border-round-sm hover:shadow-8"
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
          || index === Math.floor(Math.random() * 2000),
      }"
    />
  </div>
</template>
