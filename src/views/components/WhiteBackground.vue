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
  }, boxCount)
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

const getBoxClass = (index: number) => {
  const randomMatches = Array.from({ length: 12 }, () => Math.floor(Math.random() * boxCount))
  return (index === randomNumber.value || randomMatches.includes(index))
}
const defaultBoxClass = 'w-2rem h-2rem shadow-1'
</script>

<template>
  <div
    class="fixed top-0 left-0 w-full h-full flex flex-wrap gap-1 overflow-hidden p-1 justify-content-center align-items-center"
  >
    <Transition v-for="(box, index) in boxes" :key="box" name="boxShadowAnimation">
      <div
        v-if="getBoxClass(index)"
        :class="defaultBoxClass"
      />
      <div v-else :class="defaultBoxClass" />
    </Transition>
  </div>
</template>

<style>
.boxShadow {
  box-shadow: 0px 7px 30px rgba(0, 0, 0, 0.08), 0px 22px 30px 2px rgba(0, 0, 0, 0.15), 0px 8px 10px rgba(0, 0, 0, 0.15);
}

.boxShadowAnimation-enter-active,
.boxShadowAnimation-leave-active {
  transition: all 0.6s ease;
}

.boxShadowAnimation-enter-from,
.boxShadowAnimation-leave-to {
  opacity: 0;
}
</style>
