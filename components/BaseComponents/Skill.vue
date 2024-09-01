<template>
    <div class="p-3 text-sm rounded-md transition-all duration-150 ring-[1px] shadow-md shadow-black hover:shadow-sm z-[2] bg-[#121212] ring-yellow-900 flex items-center gap-4">
        <div class="flex justify-between">
            <div class="flex items-center gap-3 px-3 py-1 rounded-md ring-[1px] ring-neutral-800 hover:ring-yellow-900 hover:text-green-300 h-fit">
                <img :src="svg + '.svg'" class="self-start w-6" />
            </div>
        </div>
        <div class="font-bold text-yellow-700 uppercase text-shadow">{{ skillName }}</div>
    </div>
</template>

<script setup>
const props = defineProps({
    svg: String,
    skillName: String,
    skillInfo: String,
    index: Number,
});
</script>

<style scoped>
    .text-shadow {
        text-shadow: 2px 2px black;
    }
</style>
