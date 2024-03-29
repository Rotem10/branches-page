<template>
    <v-select :label="labelName" :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']">
    </v-select>
</template>

<script setup>
const props = defineProps(['labelName'])
</script>