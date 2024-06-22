<script setup lang="ts">
import type { RoutesButton } from '~/core/types'
defineProps<{
  routes: RoutesButton
}>()
</script>

<template>
  <div
    :class="!isDark ?? 'bg-green-400'"
    style="width: 80%; background-color: var(--surface-0);"
    class="shadow-8 h-3rem border-round justify-content-between px-3 flex align-items-center"
  >
    <label class=""> {{ routes.label }} </label>
    <div :class="routes.icon" />
  </div>
</template>
