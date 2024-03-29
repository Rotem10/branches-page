<template>
  <v-app>
    <div class="d-flex justify-center bg-surface-variant">
      <h1>Our BranchesTable</h1>
    </div>
    <v-main>
      <FiltersContainer />
      <BranchesTable />
      <div>
        {{ branches }}
      </div>

    </v-main>
  </v-app>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
import axios from 'axios'
import BranchesTable from './components/BranchesTable.vue'
import FiltersContainer from './components/FiltersContainer.vue'

const branches = ref({})

onBeforeMount(async () => {
  const axiosResponse = await axios.get('http://localhost:9000/')
  branches.value = axiosResponse.data
});

</script>
