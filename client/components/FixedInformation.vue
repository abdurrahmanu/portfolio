<template>
    <p
    v-motion
    :initial="{ opacity: 0.3}"
    :enter="{ opacity: 1, transition: { opacity: { delay: 100, duration: 2000} }}"
    class="info">{{ fixedInformation }}</p>
</template>

<script setup>
const props = defineProps({
    fixedInformation: String
})
</script>

<style scoped>
.info {
    @apply leading-[20.484px] max-w-[525px] font-medium text-[#7d7d7d] pt-[21px]
}
</style>