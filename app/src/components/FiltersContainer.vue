<template>
    <div class="d-flex flex-wrap">
        <DropDown labelName="Area" />
        <DropDown labelName="City" />
        <SearchBox />
    </div>
</template>

<script setup>
import DropDown from './DropDown.vue'
import SearchBox from './SearchBox.vue'
</script>