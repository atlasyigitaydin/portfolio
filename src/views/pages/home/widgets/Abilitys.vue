<script setup lang="ts">
import { useRouter } from 'vue-router'

import VueIcon from '~/assets/icons/vue.png'
import VueuseIcon from '~/assets/icons/vueuse.png'
import BootstrapIcon from '~/assets/icons/bootstrap.png'
import JiraIcon from '~/assets/icons/jira.png'
import GitlabIcon from '~/assets/icons/gitlab.png'
import GitIcon from '~/assets/icons/git.png'
import NuxtIcon from '~/assets/icons/nuxt.png'
import ViteIcon from '~/assets/icons/vite.png'
import PrimevueIcon from '~/assets/icons/primevue.png'
import HTMLIcon from '~/assets/icons/html.png'
import CSSIcon from '~/assets/icons/css.png'
import JSIcon from '~/assets/icons/js.png'
import TSIcon from '~/assets/icons/ts.png'
import TailwindIcon from '~/assets/icons/tailwind.png'
import PiniaIcon from '~/assets/icons/pinia.png'

const router = useRouter()

const icons = [
  { src: VueuseIcon, name: 'Vueuse' },
  { src: BootstrapIcon, name: 'Bootstrap' },
  { src: JiraIcon, name: 'Jira' },
  { src: VueIcon, name: 'Vue' },
  { src: GitlabIcon, name: 'Gitlab' },
  { src: GitIcon, name: 'Git' },
  { src: NuxtIcon, name: 'Nuxt' },
  { src: ViteIcon, name: 'Vite' },
  { src: PrimevueIcon, name: 'Primevue' },
  { src: HTMLIcon, name: 'HTML' },
  { src: CSSIcon, name: 'CSS' },
  { src: JSIcon, name: 'JavaScript' },
  { src: TSIcon, name: 'TypeScript' },
  { src: TailwindIcon, name: 'Tailwind' },
  { src: PiniaIcon, name: 'Pinia' },
]
</script>

<template>
  <div class="icon-marquee cursor-pointer" style="min-height: 3rem; max-height: 3rem;" @click="router.push({ name: 'abilitys' })">
    <div class="icon-container">
      <div v-for="icon in icons" :key="icon.name" class="icon-item">
        <img v-tooltip.bottom="icon.name" :src="icon.src" :alt="icon.name" class="h-2rem">
      </div>
      <div v-for="icon in icons" :key="icon.name" class="icon-item">
        <img v-tooltip.bottom="icon.name" :src="icon.src" :alt="icon.name" class="h-2rem">
      </div>
      <div v-for="icon in icons" :key="icon.name" class="icon-item">
        <img v-tooltip.bottom="icon.name" :src="icon.src" :alt="icon.name" class="h-2rem">
      </div>
      <div v-for="icon in icons" :key="icon.name" class="icon-item">
        <img v-tooltip.bottom="icon.name" :src="icon.src" :alt="icon.name" class="h-2rem">
      </div>
    </div>
  </div>
</template>

<style scoped>
.icon-marquee {
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 100%;
  align-items: center;
  position: relative;
}

.icon-container {
  display: flex;
  width: max-content;
  animation: scroll 100s linear infinite;
}

.icon-item {
  margin: 0 0.5rem;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
