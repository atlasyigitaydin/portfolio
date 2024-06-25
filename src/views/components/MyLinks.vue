<script setup lang="ts">
import GitWhite from '../../assets/icons/git_white.png'
import GitDark from '../../assets/icons/git_dark.png'
import LinkedinWhite from '../../assets/icons/linkedin_white.png'
import LinkedinDark from '../../assets/icons/linkedin_dark.jpg'
import InstagramWhite from '../../assets/icons/instagram_white.png'
import InstagramDark from '../../assets/icons/instagram_dark.png'

const goTo = (url: string) => {
  window.open(url)
}
</script>

<template>
  <div class="flex gap-4">
    <Image
      image-style="max-width: 25px;"
      :src="isDark ? GitWhite : GitDark"
      class="cursor-pointer"
      @click="goTo('https://github.com/AtlsDev')"
    />
    <Image
      image-style="max-width: 25px;"
      :src="isDark ? InstagramWhite : InstagramDark"
      class="cursor-pointer"
      @click="goTo('https://www.instagram.com/atlass.dev')"
    />
    <Image
      image-style="max-width: 25px;"
      :src="isDark ? LinkedinWhite : LinkedinDark"
      class="cursor-pointer"
      @click="goTo('https://www.linkedin.com/in/yi%C4%9Fitayd%C4%B1n/')"
    />
  </div>
</template>
