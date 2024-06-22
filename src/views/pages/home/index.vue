<script setup lang="ts">
import Welcome from './widgets/Welcome.vue'
import Routes from './widgets/Routers.vue'
</script>

<template>
  <div class="w-full h-full flex flex-column justify-content-around gap-2">
    <Welcome class="h-full" />
    <Routes class="h-full" />
  </div>
</template>

<route lang="yaml">
name: home
path: /
meta:
  layout: default
        </route>
