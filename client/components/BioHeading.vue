<template>
    <h1
    v-motion
    :initial="{ opacity: 0.3}"
    :enter="{ opacity: 1, transition: { opacity: { duration: 1000} }}"
    class="typography-heading font-bold">
        <p>{{ bigHeading[0] }}</p>
        <p>{{ bigHeading[1] }}</p>
    </h1>
</template>

<script setup>
const props = defineProps({
    bigHeading: Array
})
</script>

<style scoped>
    .typography-heading {
        @apply text-[30px] text-[rgba(255,255,255,0.80)] font-bold 
        custom-screen-2xl:text-custom-2xl custom-screen-xl:text-custom-xl custom-screen-lg:text-custom-lg custom-screen-md:text-custom-md custom-screen-sm:text-custom-sm custom-screen-3xl:text-custom-3xl
    }
</style>