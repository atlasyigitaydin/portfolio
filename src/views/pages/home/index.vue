<script setup lang="ts">

</script>

<template>
  <div class="flex w-full h-full justify-content-center align-items-center">
    <label> {{ "Soon..." }} </label>
  </div>
  <Button link class="fixed top-0 right-0" :icon="`pi pi-${isDark ? 'sun' : 'moon'}`" @click="toggleDark()" />
</template>

<route lang="yaml">
name: home
path: /
meta:
  layout: default
        </route>
