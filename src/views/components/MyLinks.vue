<script setup lang="ts">
import GitWhite from '../../assets/icons/git_white.png'
import GitDark from '../../assets/icons/git_dark.png'
import LinkedinWhite from '../../assets/icons/linkedin_white.png'
import LinkedinDark from '../../assets/icons/linkedin_dark.jpg'
import InstagramWhite from '../../assets/icons/instagram_white.png'
import InstagramDark from '../../assets/icons/instagram_dark.png'
import ChangeTheme from './ChangeTheme.vue'

const goTo = (url: string) => {
  window.open(url)
}
const router = useRouter()
const isHomePage = computed(() => {
  return router.currentRoute.value.name === 'home'
})
</script>

<template>
  <!-- <div class="w-full flex">
    <Divider
      :pt="{
        content: {
          class: 'border-round bg-transparent',
        },
      }"
      align="left"
    >
      <div v-if="isHomePage" class="flex gap-1 w-13rem align-items-center justify-content-center border-round" style="height: 45px;" :style="!isDark ? 'background-color: #020617' : 'background-color: #f4f4f5'">
        <Image
          image-style="max-width: 25px;"
          class="p-1 flex justify-content-center align-items-center"
          :src="!isDark ? GitWhite : GitDark"
          @click="goTo('https://github.com/AtlsDev')"
        />
        <Divider layout="vertical" />
        <Image
          image-style="max-width: 25px;"
          class="p-1 flex justify-content-center align-items-center"
          :src="!isDark ? InstagramWhite : InstagramDark"
          @click="goTo('https://www.instagram.com/atlass.dev')"
        />
        <Divider layout="vertical" />
        <Image
          image-style="max-width: 25px;"
          class="p-1 flex justify-content-center align-items-center"
          :src="!isDark ? LinkedinWhite : LinkedinDark"
          @click="goTo('https://www.linkedin.com/in/yi%C4%9Fitayd%C4%B1n/')"
        />
      </div>
      <div v-else class="flex gap-2 px-2 w-13rem justify-content-center align-items-center" style="height: 45px;">
        <MyButton class="flex w-full my-1 align-items-center h-full" label="Home Page" icon="pi pi-angle-left text-xl" @click="router.push({ name: 'home' })" />
      </div>
    </Divider>
    <Divider
      :pt="{
        content: {
          class: 'border-round bg-transparent',
        },
      }"
      align="right"
    >
      <ChangeTheme />
    </Divider>
  </div> -->
  <div class="fixed flex w-full justify-content-end top-0 left-0">
    <ChangeTheme link />
  </div>
</template>
