<script setup lang="ts">
import FloatLabel from 'primevue/floatlabel'
import { Icon } from '@iconify/vue'
import { useToast } from 'primevue/usetoast'
import { ref } from 'vue'

const toast = useToast()
const inputValue = ref('test değeri')
const knobValue = ref(20)
const cities = ref([
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' },
])
const selectedCitiesMulti = ref()
const selectedCities = ref()

const selectButton1 = ref('Off')
const selectButton2 = ref()
const optionsSelectButton1 = ref(['Off', 'On'])
const optionsSelectButton2 = ref([
  { name: 'Option 1', value: 1, constant: false },
  { name: 'Option 2', value: 2, constant: false },
])

const slider = ref(50)

const SpeedDialItems = ref([
  {
    label: 'Add',
    icon: 'pi pi-pencil',
    command: () => {
      toast.add({ severity: 'info', summary: 'Add', detail: 'Data Added' })
    },
  },
  {
    label: 'Update',
    icon: 'pi pi-refresh',
    command: () => {
      toast.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' })
    },
  },
  {
    label: 'Delete',
    icon: 'pi pi-trash',
    command: () => {
      toast.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' })
    },
  },
  {
    label: 'Upload',
    icon: 'pi pi-upload',
    command: () => {
      toast.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' })
    },
  },
  {
    label: 'Vue Website',
    icon: 'pi pi-external-link',
    command: () => {
      toast.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' })
    },
  },
])
const visible = ref(false)
</script>

<template>
  <div class="flex flex-column gap-6 w-full h-full p-5">
    <label> {{ "Font Test: Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative, component-based programming model that helps you efficiently develop user interfaces of any complexity." }} </label>

    <div class="flex w-full justify-content-around">
      <Button label="Primary" />
      <Button label="Secondary" severity="secondary" />
      <Button label="Success" severity="success" />
      <Button label="Info" severity="info" />
      <Button label="Warning" severity="warning" />
      <Button label="Help" severity="help" />
      <Button label="Danger" severity="danger" />
      <Button label="Contrast" severity="contrast" />
    </div>
    <div class="flex w-full justify-content-around">
      <Button label="Primary" raised />
      <Button label="Secondary" severity="secondary" raised />
      <Button label="Success" severity="success" raised />
      <Button label="Info" severity="info" raised />
      <Button label="Warning" severity="warning" raised />
      <Button label="Help" severity="help" raised />
      <Button label="Danger" severity="danger" raised />
      <Button label="Contrast" severity="contrast" raised />
    </div>
    <div class="flex w-full justify-content-around">
      <Button class="w-30rem" icon="pi pi-user" label="ICON" />
      <Button class="w-10rem" icon="pi pi-link" link label="Link" />
    </div>
    <div class="flex w-full justify-content-around">
      <InputText v-model="inputValue" />
      <InputText v-model="inputValue" type="password" />
      <InputText v-model="inputValue" invalid />
      <InputText v-model="inputValue" disabled />
    </div>
    <div class="flex w-full justify-content-around">
      <div class="flex gap-3">
        <label> {{ "Icons:" }} </label>
        <Icon icon="meteocons:dust-wind" class="" />
        <Icon icon="svg-spinners:blocks-shuffle-3" class="text-red-400" />
        <Icon icon="logos:vue" />
        <Icon icon="mdi-light:home" />
        <Icon icon="heroicons-outline:location-marker" />
        <Icon icon="heroicons-outline:translate" />
        <Icon icon="svg-spinners:3-dots-move" />
      </div>
      <Button label="DIALOG" @click="visible = true" />
      <Button
        label="CONTRAST TOAST" severity="contrast" @click="() => {
          toast.add({
            severity: 'contrast',
            summary: 'TOAST',
            life: 3000,
            detail: 'Contrast',
          })
        }"
      />
    </div>
    <div class="flex w-full justify-content-around">
      <MultiSelect
        v-model="selectedCitiesMulti" :options="cities" filter option-label="name" placeholder="Select Cities"
        :max-selected-labels="3" class="w-full md:w-20rem"
      />
      <FloatLabel class="w-full md:w-20rem">
        <MultiSelect id="ms-cities" v-model="selectedCitiesMulti" :options="cities" option-label="name" :max-selected-labels="3" class="w-full" />
        <label for="ms-cities">MultiSelect</label>
      </FloatLabel>
      <MultiSelect placeholder="Loading..." loading class="w-full md:w-20rem" />
      <Dropdown v-model="selectedCities" class="w-20rem" option-label="name" :options="cities" />
    </div>
    <div class="flex w-full justify-content-around">
      <Knob v-model="knobValue" />
      <Knob v-model="knobValue" disabled />
      <Knob v-model="knobValue" value-color="SlateGray" range-color="MediumTurquoise" />
      <div class="flex flex-column justify-content-center gap-3 align-items-center">
        <SelectButton v-model="selectButton1" :options="optionsSelectButton1" />
        <SelectButton v-model="selectButton2" :options="optionsSelectButton2" option-disabled="constant" option-label="name" />
      </div>
      <Slider v-model="slider" orientation="vertical" class="h-6rem" />
      <Slider v-model="slider" class="w-8rem" />
    </div>
    <Paginator class="w-full" :rows="10" :total-records="120" />
  </div>

  <Dialog v-model:visible="visible" modal header="Edit Profile" :style="{ width: '25rem' }">
    <span class="p-text-secondary block mb-5">Update your information.</span>
    <div class="flex align-items-center gap-3 mb-3">
      <label for="username" class="font-semibold w-6rem">Username</label>
      <InputText id="username" class="flex-auto" autocomplete="off" />
    </div>
    <div class="flex align-items-center gap-3 mb-5">
      <label for="email" class="font-semibold w-6rem">Email</label>
      <InputText id="email" class="flex-auto" autocomplete="off" />
    </div>
    <div class="flex justify-content-end gap-2">
      <Button type="button" label="Cancel" severity="secondary" @click="visible = false" />
      <Button type="button" label="Save" @click="visible = false" />
    </div>
  </Dialog>
  <SpeedDial class="ml-4" :model="SpeedDialItems" direction="right" :style="{ top: 'calc(50%)', left: 0 }" />
</template>

<route lang="yaml">
name: home
path: /
meta:
  layout: default
        </route>
