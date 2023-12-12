<template>
    <div class="sm:hidden w-full pt-10">
        <div class="text-[14px] leading-[16.41px] font-medium text-gray-500 text-opacity-80">{{ sectionName }}</div>
        <FixedSectionHeading :fixedHeading="[fixedHeading[0], fixedHeading[1]]" />
        <FixedSectionInformation :fixedInformation="fixedInformation" />
    </div>
</template>

<script setup>

const props = defineProps({
    sectionName: String,
    fixedHeading: Array,
    fixedInformation: String
})

</script>

<style scoped>

</style>