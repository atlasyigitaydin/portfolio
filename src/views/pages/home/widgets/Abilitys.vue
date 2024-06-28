<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useAbilityStore } from '../../abilitys/stores/abilitys'
import type { Ability } from '~/core/types'

const router = useRouter()
const abilitysStore = useAbilityStore()
const selectAbility = (_ability: Ability) => {
  abilitysStore.selectedAbility = _ability
  router.push({ name: 'abilitys' })
}

const reactiveAbilitys = reactive(abilitysStore.abilitys)
onMounted(() => {
})
</script>

<template>
  <div class="icon-marquee">
    <div class="icon-container">
      <template v-for="ability in reactiveAbilitys" :key="ability.name">
        <div class="icon-item cursor-pointer" @click="selectAbility(ability)">
          <img
            v-tooltip.bottom="ability.name"
            :src="ability.img"
            :alt="ability.name"
            class="h-2rem icon-img"
          >
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.icon-marquee {
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 3rem;
  align-items: center;
  position: relative;
}

.icon-container {
  display: flex;
  width: max-content;
  animation: scroll 20s linear infinite;
}

.icon-item {
  margin: 0 0.5rem;
}

.icon-img {
  -webkit-filter: drop-shadow(3px 3px 3px #222);
  filter: drop-shadow(3px 3px 3px #222);
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
