<script setup lang="ts">

// const r = (name: string) => { useNavigation().navigateTo(name) }

const currentRoute = computed(() => {
  return useRouter().currentRoute.value.name
})

const items = [{
  key: 'me',
  label: 'Me'
}, {
  key: 'projects',
  label: 'Projects'
}, {
  key: 'works',
  label: 'Works'
}, {
  key: 'contact',
  label: 'Contact me'
}]
</script>

<template>
  <header>
    <div
      v-for="(item, index) in items"
      :key="index"
      class="headerButtons"
      :class="item.key === currentRoute ? 'headerButtonsClick' : ''"
    >
      <NuxtLink :to="{name: item.key}">
        {{ item.label }}
      </NuxtLink>
    </div>
  </header>
  <slot />
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
