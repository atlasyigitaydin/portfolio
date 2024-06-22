<script setup lang="ts">
import type { RoutesButton } from '~/core/types'
defineProps<{
  routes: RoutesButton
}>()
</script>

<template>
  <MyButton
    :label="routes.label"
    :icon="`${routes.icon} text-lg`"
    style="width: 80%;"
    class="shadow-8 h-3rem border-round justify-content-between px-3 flex align-items-center text-lg"
    @click="routes.route"
  />
</template>
