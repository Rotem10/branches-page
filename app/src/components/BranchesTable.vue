<template>
    <v-table density="compact">
        <thead>
            <tr>
                <th class="text-left">
                    Id
                </th>
                <th class="text-left">
                    Name
                </th>
                <th class="text-left">
                    Address
                </th>
                <th class="text-left">
                    City
                </th>
                <th class="text-left">
                    Area
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in branchesToDisplay" :key="item.store_id">
                <td>{{ item.store_id }}</td>
                <td>{{ item.store_title }}</td>
                <td>{{ item.store_address }}</td>
                <td>{{ item.city }}</td>
                <td>{{ item.store_region }}</td>
            </tr>
        </tbody>
    </v-table>
</template>

<script setup>
const props = defineProps(['branchesToDisplay'])
</script>
