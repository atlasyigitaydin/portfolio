<script setup lang="ts">
import { initializeApp } from 'firebase/app'

const config = useRuntimeConfig()

const firebaseConfig = {
  apiKey: config.public.firebaseApiKey as string,
  authDomain: config.public.firebaseAuthDomain as string,
  projectId: config.public.firebaseProjectId as string,
  storageBucket: config.public.firebaseStorageBucket as string,
  messagingSenderId: config.public.firebaseMessagingSenderId as string,
  appId: config.public.firebaseAppId as string,
}

initializeApp(firebaseConfig)
</script>

<template>
  <div class="fixed top-0 left-0 w-screen h-screen flex items-center justify-center font-extralight text-2xl bg-zinc-900 text-white">
    FoxJs
  </div>
</template>
