<template>
  <v-app>
    <div class="d-flex justify-center bg-surface-variant">
      <h1>Branches</h1>
    </div>
    <v-main>
      <div class="d-flex flex-wrap">
        <DropDown labelName="Area" :items=areas />
        <DropDown labelName="City" :items=cities />
        <SearchBox />
      </div>
      <BranchesTable v-if=isMounted :branches />
      <div v-else class="d-flex justify-center">Loading...</div>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
import axios from 'axios'
import BranchesTable from './components/BranchesTable.vue'
import DropDown from './components/DropDown.vue';
import SearchBox from './components/SearchBox.vue';

const branches = ref([])
const cities = ref([])
const areas = ref([])
const isMounted = ref(false)

onBeforeMount(async () => {
  const axiosResponse = await axios.get('http://localhost:9000/')
  updateValues(axiosResponse.data)
});

function updateValues(data) {
  branches.value = data
  cities.value = data.map((item) => { return item.city })
  areas.value = data.map((item) => { return item.store_region })
  isMounted.value = true
}
</script>
