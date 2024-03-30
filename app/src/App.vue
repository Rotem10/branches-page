<template>
  <v-app>
    <div class="d-flex justify-center bg-surface-variant">
      <h1>Branches</h1>
    </div>
    <v-main>
      <div class="d-flex flex-wrap">
        <DropDown labelName="Area" :items=areas @selected="filterByArea" />
        <DropDown labelName="City" :items=cities @selected="filterByCity" />
        <SearchBox />
      </div>
      <BranchesTable v-if=isMounted :branchesToDisplay />
      <div v-else class="d-flex justify-center">Loading...</div>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
import getData from './api/api.js'
import BranchesTable from './components/BranchesTable.vue'
import DropDown from './components/DropDown.vue';
import SearchBox from './components/SearchBox.vue';

let branches = []
const branchesToDisplay = ref([])
const cities = ref([])
const areas = ref([])
const isMounted = ref(false)

onBeforeMount(async () => {
  const data = await getData()
  updateValues(data)
});

const updateValues = (data) => {
  branches = data
  branchesToDisplay.value = branches
  cities.value = Array.from(new Set(branches.map((item) => { return item.city.trim() }))).sort()
  areas.value = Array.from(new Set(branches.map((item) => { return item.store_region }))).sort((a, b) => a - b)
  isMounted.value = true
}

const filterByArea = (area) => {
  const filteredBranches = branches.filter((item) => item.store_region === area)
  branchesToDisplay.value = filteredBranches
}
const filterByCity = (city) => {
  const filteredBranches = branches.filter((item) => item.city.trim() === city)
  branchesToDisplay.value = filteredBranches
}

</script>
