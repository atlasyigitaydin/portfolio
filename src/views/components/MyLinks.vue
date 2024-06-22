<script setup lang="ts">
import GitWhite from '../../assets/icons/git_white.png'
import GitDark from '../../assets/icons/git_dark.png'
import LinkedinWhite from '../../assets/icons/linkedin_white.png'
import LinkedinDark from '../../assets/icons/linkedin_dark.jpg'
import InstagramWhite from '../../assets/icons/instagram_white.png'
import InstagramDark from '../../assets/icons/instagram_dark.png'
</script>

<template>
  <div class="w-full flex">
    <Divider
      :pt="{
        content: {
          class: 'border-round shadow-8',
        },
      }"
      align="left"
    >
      <div class="flex gap-2">
        <Image image-style="max-width: 25px;" class="p-1 flex justify-content-center align-items-center" :src="isDark ? GitWhite : GitDark" />
        <Divider layout="vertical" class="my-1" />
        <Image image-style="max-width: 25px;" class="p-1 flex justify-content-center align-items-center" :src="isDark ? InstagramWhite : InstagramDark" />
        <Divider layout="vertical" class="my-1" />
        <Image image-style="max-width: 25px;" class="p-1 flex justify-content-center align-items-center" :src="isDark ? LinkedinWhite : LinkedinDark" />
      </div>
    </Divider>
    <Divider
      :pt="{
        content: {
          class: 'border-round shadow-8',
        },
      }"
      align="right"
    >
      <ChangeTheme />
    </Divider>
  </div>
</template>
