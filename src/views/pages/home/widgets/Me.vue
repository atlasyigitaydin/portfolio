<script setup lang="ts">
// import Abilitys from './Abilitys.vue'
import MePp from '~/assets/me.jpg'
</script>

<template>
  <div class="w-full h-full justify-content-between overflow-hidden flex flex-column align-items-center z-3 gap-5">
    <img class="overflow-hidden border-circle border-2 mt-3 shadow-8 flex" style="max-height: 200px; min-height: 200px;" image-style="width: 70%;" :src="MePp">
    <div
      class="gap-2 flex flex-column text-center h-full align-items-center justify-content-center"
    >
      <label class="font-bold text-2xl"> {{ "YİĞİT AYDIN" }} </label>
      <label class="text-xl"> {{ "FRONTEND DEVELOPER" }} </label>
    </div>
    <div class="w-full ">
      <!-- <Abilitys class="" /> -->
    </div>
  </div>
</template>
