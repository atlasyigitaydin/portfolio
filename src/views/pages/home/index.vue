<script setup lang="ts">
import Me from './widgets/Me.vue'
import Routes from './widgets/Routers.vue'
import Abilitys from './widgets/Abilitys.vue'
</script>

<template>
  <div class="flex flex-column gap-5 overflow-scroll">
    <Me />
    <Abilitys />
    <Routes />
  </div>
</template>

<route lang="yaml">
name: home
path: /
meta:
  layout: default
</route>
