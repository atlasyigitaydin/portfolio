<script setup>
import { ref } from 'vue'
import Menubar from 'primevue/menubar'

const router = useRouter()
const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home',
    command: () => {
      router.push('/')
    },
  },
  {
    label: 'Projects',
    icon: 'pi pi-lightbulb',
    command: () => {
      router.push('/projects')
    },
  },
  {
    label: 'About',
    icon: 'pi pi-paperclip',
    command: () => {
      router.push('/about')
    },
  },
  {
    icon: () => `pi pi-${isDark.value ? 'sun' : 'moon'}`,
    command: () => {
      toggleDark()
    },
  },
])
</script>

<template>
  <div class="w-full">
    <Menubar class="w-full flex justify-content-between " :model="items">
      <template #start>
        <div
          class="flex cursor-pointer gap-1 text-xl"
          @click="router.push('/')"
        >
          <div class="text-blue-400">
            {{ "PROJECT" }}
          </div>
          <div>
            {{ "NAME" }}
          </div>
        </div>
      </template>
    </Menubar>
  </div>
</template>
