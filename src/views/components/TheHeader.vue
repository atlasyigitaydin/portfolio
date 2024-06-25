<script setup>
const router = useRouter()
const isHomePage = computed(() => {
  return !!(router.currentRoute.value.name === 'home')
})
</script>

<template>
  <div class="w-full h-full flex justify-content-between px-2">
    <div class="flex p-2 mt-1 gap-4 align-items-center">
      <Transition name="router-animation" mode="out-in">
        <MyLinks v-if="isHomePage" />
      </Transition>
    </div>
    <ChangeTheme class="m-1" link />
  </div>
</template>
