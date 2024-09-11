<script setup lang="ts">

const currentPath = computed(() => {
  return useRouter().currentRoute.value.path
})

const items = [{
  key: 'me',
  label: 'Me',
  path: '/me'
}, {
  key: 'projects',
  label: 'Projects',
  path: '/projects'
}, {
  key: 'works',
  label: 'Works',
  path: '/works'
}, {
  key: 'contact',
  label: 'Contact me',
  path: '/contact'
}]
</script>

<template>
  <div>
    <header>
      <div
        class="absolute z-0 left-0 top-0 flex w-full h-full lg:justify-center justify-start lg:px-0 px-4 items-center"
      >
        <NuxtLink to="/" class="w-5/12">
          <div
            class="h-6 w-6 border-2 rounded-full hover:bg-white transition-all duration-500 ease-in-out"
            :class="currentPath === '/' ? 'bg-white' : ''"
          />
        </NuxtLink>
      </div>
      <div
        v-for="(item, index) in items"
        :key="index"
        class="headerButtons"
        :class="item.path === currentPath ? 'headerButtonsClick' : ''"
      >
        <NuxtLink :to="item.path === currentPath ? '/' : item.path">
          {{ item.label }}
        </NuxtLink>
      </div>
    </header>
    <slot />
  </div>
</template>

<style scoped>
header {
  @apply lg:h-16 h-12 lg:items-end items-center lg:py-4 py-3 bg-transparent w-full flex lg:justify-center justify-end lg:px-8 relative lg:bg-[#09090b] bg-[#000000]
}

.headerButtons {
  @apply cursor-pointer shadow-lg lg:text-lg text-sm lg:mx-4 mx-4 lg:opacity-80 font-extralight transition-all duration-500 ease-in-out z-10;
}

.headerButtonsClick {
  @apply opacity-100 lg:text-xl text-base lg:mx-8 mx-6 font-normal
}

.headerButtons:hover {
  @apply font-light opacity-100 lg:text-xl text-base lg:mx-8 mx-6
}
</style>
