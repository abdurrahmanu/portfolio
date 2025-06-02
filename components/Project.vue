<template>
    <div class="space-y-1 max-w-[350px] m-auto text-blue-400 exo text-center">
        <div class="ring rounded-md">
            <!-- <img class="relative bg-black rounded-md"  :src="'/' + img + '.jpg'"> -->
        </div>
        <div class="flex items-center justify-between p-1 px-3">
            <div class="font-bold uppercase">{{ title }}</div>
            <a class="py-1 rounded-md ring-green-400 ring-[2px] px-2 cursor-pointer" :href="link" target="_blank">
                <img src="/arrow-up.svg" class="w-2 sm:w-3" />
            </a>
        </div>
        <p>{{ info }}</p>
    </div>
</template>

<script setup>
const props = defineProps({
    img: String,
    link: String,
    title: String,
    info: String,
})
</script>

<style scoped>
</style>
