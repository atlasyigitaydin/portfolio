<script setup lang="ts">
defineProps<{
  label?: string
  icon?: string
  click: Function
  disabled?: boolean
  link?: boolean
}>()
</script>

<template>
  <Button
    v-animateonscroll="{ enterClass: 'animate-fadein', leaveClass: 'animate-fadeout' }"
    class="animate-duration-1000 animate-ease-in-out"
    :label="label"
    :link="link"
    :icon="`pi pi-${icon}`"
    :disabled="disabled"
    @click="click"
  />
</template>
