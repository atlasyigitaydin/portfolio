<script setup lang="ts">
import type { RoutesButton } from '~/core/types'
const router = useRouter()
const routes: RoutesButton[] = [
  {
    label: 'Projects',
    icon: 'pi pi-code',
    route: () => router.push({ name: 'projects' }),
  },
  {
    label: 'Ability',
    icon: 'pi pi-crown',
    route: () => null,
  },
  {
    label: 'About',
    icon: 'pi pi-user',
    route: () => null,
  },
  {
    label: 'See My CV',
    icon: 'pi pi-file',
    route: () => null,
  },
]
</script>

<template>
  <div class="w-full h-full flex flex-column gap-3 justify-content-center align-items-center">
    <RoutesButtons v-for="rout in routes" :key="rout" :routes="rout" />
  </div>
</template>
