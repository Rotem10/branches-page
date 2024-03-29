<template>
    <v-select :label="labelName" :items>
    </v-select>
</template>

<script setup>
const props = defineProps(['labelName', 'items'])
</script>