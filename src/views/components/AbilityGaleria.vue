<script setup lang="ts">
import { computed, onMounted, reactive } from 'vue'
import type { Ability } from '~/core/types'

const props = defineProps<{
  abilitys: Ability[]
}>()

const abilitysStore = useAbilityStore()

const reactiveAbility = reactive<Ability[]>([])
const abilityCount = computed(() => reactiveAbility.length)

const prevAbility = () => {
  if (reactiveAbility.length > 0) {
    const lastContent = reactiveAbility.pop()
    if (lastContent) {
      setTimeout(() => {
        abilitysStore.selectedAbility = reactiveAbility[0]
        reactiveAbility.unshift(lastContent)
      })
    }
  }
}

const nextAbility = () => {
  if (reactiveAbility.length > 0) {
    const firstContent = reactiveAbility.shift()
    if (firstContent) {
      setTimeout(() => {
        abilitysStore.selectedAbility = reactiveAbility[0]
        reactiveAbility.push(firstContent)
      }, 1000)
    }
  }
}

onMounted(() => {
  props.abilitys.forEach((ability, index) => {
    setTimeout(() => {
      reactiveAbility.push(ability)
    }, index * 200)
  })
})
</script>

<template>
  <TransitionGroup
    name="list"
    tag="div"
    style="width: 100%; height: 100%;"
    class="h-20rem flex justify-content-center align-items-center relative"
  >
    <img
      v-for="(ability, index) in reactiveAbility"
      :key="ability.name"
      :style="{
        zIndex: `${abilityCount - index}`,
        marginRight: `${index * 90}px`,
        marginBottom: `${index * 90}px`,
      }"
      style="width: 100px;
      -webkit-filter: drop-shadow(5px 5px 5px #222);
      filter: drop-shadow(5px 5px 5px #222);"
      class="absolute"
      :class="index === 0 ?? 'bg-gray-900'"
      :src="ability.img"
    >
  </TransitionGroup>
  <div class="flex w-full justify-content-between">
    <Button label="Prev" @click="prevAbility" />
    <Button label="Next" @click="nextAbility" />
  </div>
</template>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(120px);
}
</style>
