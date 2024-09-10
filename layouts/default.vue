<script setup lang="ts">

const currentRoute = computed(() => {
  return useRouter().currentRoute.value.name
})

const items = [{
  key: 'me',
  label: 'Me',
  to: () => {
    navigateTo({
      name: 'me'
    })
  }
}, {
  key: 'projects',
  label: 'Projects',
  to: () => {
    navigateTo({
      name: 'projects'
    })
  }
}, {
  key: 'works',
  label: 'Works',
  to: () => {
    navigateTo({
      name: 'works'
    })
  }
}, {
  key: 'contact',
  label: 'Contact me',
  to: () => {
    navigateTo({
      name: 'contact'
    })
  }
}]
</script>

<template>
  <div>
    <header>
      <div
        v-for="(item, index) in items"
        :key="index"
        class="headerButtons"
        :class="item.key === currentRoute ? 'headerButtonsClick' : ''"
        @click="item.to"
      >
        {{ item.label }}
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
  @apply cursor-pointer shadow-lg lg:text-lg text-sm lg:mx-4 mx-4 lg:opacity-80
  font-extralight transition-all duration-500 ease-in-out;
}

.headerButtonsClick {
  @apply opacity-100 lg:text-xl text-base lg:mx-8 mx-6 font-normal
}

.headerButtons:hover {
  @apply font-light opacity-100 lg:text-xl text-base lg:mx-8 mx-6
}
</style>
