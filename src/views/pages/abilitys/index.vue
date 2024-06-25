<script setup lang="ts">
import { useAbilityStore } from './stores/abilitys'

const abilitysStore = useAbilityStore()
</script>

<template>
  <AbilityGaleria class="z-1" :abilitys="abilitysStore.abilitys" />
</template>

<route lang="yaml">
name: abilitys
path: /abilitys
meta:
  layout: default
            </route>
