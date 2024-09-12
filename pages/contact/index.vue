<script lang="ts" setup>
import { ref } from 'vue'

// Page metadata
definePageMeta({
  name: 'contact',
  path: '/contact',
  validate: route => !!route,
  key: route => route.fullPath
})

const email = ref<string>('')
const message = ref<string>('')

const sendEmail = () => {
  if (!email.value || !message.value) {
    return
  }

  email.value = ''
  message.value = ''
}
</script>

<template>
  <div class="w-full h-full flex flex-col justify-end items-center">
    <div class="flex flex-col lg:h-4/6 lg:w-5/12 w-full h-full gap-6 p-6">
      <input
        v-model="email"
        class="transition-all outline-0 duration-500 ease-in-out hover:border-zinc-600 border-b border-zinc-900 bg-transparent text-xl focus:border-none py-3 px-6"
        placeholder="example@example.com"
        type="email"
      >

      <textarea
        v-model="message"
        class="transition-all outline-0 duration-500 ease-in-out hover:border-zinc-600 border border-zinc-900 h-full bg-transparent text-xl focus:border-none py-3 px-6"
        placeholder="your message"
      />

      <button class="headerButtons" @click="sendEmail">
        send (not working)
      </button>
    </div>
  </div>
</template>

<style scoped>
.headerButtons {
    @apply cursor-pointer shadow-lg py-2 lg:text-lg text-sm border border-zinc-900 lg:opacity-80 font-extralight transition-all duration-500 ease-in-out z-10;
}

.headerButtons:hover {
    @apply font-light opacity-100 lg:text-xl text-base lg:mx-8 mx-6 border-zinc-600;
}
</style>
