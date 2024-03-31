<template>
    <v-text-field @click:append-inner="$emit('inputText', text)" v-model="text" append-inner-icon="mdi-magnify"
        label="Search"></v-text-field>
</template>

<script setup>
defineEmits(['inputText'])
const text = defineModel()
</script>
