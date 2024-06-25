<script setup lang="ts">
import VuePdfEmbed from 'vue-pdf-embed'
import type { RoutesButton } from '~/core/types'
import CV from '~/assets/yigit_aydin_cv.pdf'
const router = useRouter()
const cvDialog = ref<boolean>(false)
const routes: RoutesButton[] = [
  {
    label: 'Projects',
    icon: 'pi pi-code',
    route: () => router.push({ name: 'projects' }),
  },
  {
    label: 'Ability',
    icon: 'pi pi-crown',
    route: () => router.push({ name: 'abilitys' }),
  },
  {
    label: 'About',
    icon: 'pi pi-user',
    route: () => router.push({ name: 'about' }),
  },
  {
    label: 'See My CV',
    icon: 'pi pi-file',
    route: () => cvDialog.value = true,
  },
]
</script>

<template>
  <div class="w-full h-20rem flex flex-column gap-3 justify-content-center align-items-center">
    <RoutesButtons v-for="rout in routes" :key="rout" :routes="rout" />
  </div>
  <Dialog v-model:visible="cvDialog" :closable="true" modal class="w-full border-round-xl mx-2 overflow-auto">
    <template #header>
      <div class="flex w-full justify-content-between">
        <DownloadCv />
      </div>
    </template>
    <VuePdfEmbed :source="CV" class="overflow-hidden border-round w-full h-full" />
  </Dialog>
</template>
