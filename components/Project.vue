<template>
    <div class="space-y-1 text-sm rounded-md ring-[1px] ring-red-900 shadow-md shadow-black hover:shadow-sm bg-[#121212]  max-w-[350px] m-auto">
        <div class="rounded-md rounded-b-none">
            <img class="relative bg-black rounded-md rounded-b-none"  :src="'/' + img + '.jpg'" alt="">
        </div>
        <div class="flex items-center justify-between p-1 px-3">
            <div class="font-bold text-[10px] text-red-800 uppercase sm:text-xs text-shadow">{{ title }}</div>
            <a class="sm:px-3 py-1 rounded-md ring-[1px] ring-neutral-800 hover:ring-red-900 px-2 cursor-pointer" :href="link" target="_blank">
                <img src="/arrow-up.svg" class="w-2 sm:w-3" />
            </a>
        </div>
        <div class="p-2 pt-1 text-xs sm:text-sm">{{ info }}</div>
    </div>
</template>

<script setup>
const props = defineProps({
    index: Number,
    img: String,
    link: String,
    title: String,
    info: String,
})
</script>

<style scoped>
    .text-shadow {
        text-shadow: 2px 2px black;
    }
</style>
