<template>
    <div class="space-y-1 text-sm rounded-md ring-[1px] ring-red-900 shadow-md shadow-black hover:shadow-sm scale-100 bg-[#121212]">
        <div class="h-[50%] rounded-md rounded-b-none">
            <img class="rounded-md rounded-b-none" src="/projectBackground.png" alt="">
        </div>
        <div class="flex items-center justify-between p-2 px-3">
            <div class="text-xs font-bold text-red-800 uppercase text-shadow">{{ project.title }}</div>
            <div class="flex items-center gap-3 px-3 py-1 rounded-md ring-[1px] ring-neutral-800 hover:ring-red-900 hover:text-green-300 h-fit">
                <img src="/arrow.svg" class="self-end w-3 rotate-[135deg]" />
            </div>
        </div>
        <div class="p-2">{{ project.info }}</div>
    </div>
</template>

<script setup>
const props = defineProps({
    index: Number,
    project: Object,
})
</script>

<style scoped>
    .text-shadow {
        text-shadow: 2px 2px black;
    }
</style>
