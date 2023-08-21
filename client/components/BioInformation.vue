<template>
    <p
    v-motion
    :initial="{ opacity: 0.3}"
    :enter="{ opacity: 1, transition: { opacity: { delay: 100, duration: 2000} }}"
    class="leading-[20.484px] typography-info max-w-[525px] info-typography font-medium text-[#7d7d7d] pt-[21px]">{{ pageInformation }}</p>
</template>

<script setup>
const props = defineProps({
    pageInformation: String
})
</script>