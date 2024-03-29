<template>
  <v-app>
    <div class="d-flex justify-center bg-surface-variant">
      <h1>Our Branches</h1>
    </div>
    <v-main>
      <div class="d-flex flex-wrap">
        <DropDown labelName="Area" />
        <DropDown labelName="City" />
        <SearchBox />
      </div>
      <BranchesTable :data=branches />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
import axios from 'axios'
import BranchesTable from './components/BranchesTable.vue'
import DropDown from './components/DropDown.vue';
import SearchBox from './components/SearchBox.vue';
// import FiltersContainer from './components/FiltersContainer.vue'

const branches = ref({})

onBeforeMount(async () => {
  const axiosResponse = await axios.get('http://localhost:9000/')
  branches.value = axiosResponse.data
});

</script>
