<template>
  <v-select :label="labelName" :items @update:modelValue="$emit('selected', $event)">
  </v-select>
</template>

<script setup>
const props = defineProps(['labelName', 'items'])
defineEmits(['selected'])
</script>