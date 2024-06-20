<script setup lang="ts">
import Background from './widgets/backgound.vue'
import CV from './widgets/downloadCv.vue'
</script>

<template>
  <div class="z-5">
    <CV />
  </div>
  <Background class="z-1" />
</template>

<route lang="yaml">
name: home
path: /
meta:
  layout: default
        </route>
