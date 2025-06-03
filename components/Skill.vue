<template>
    <div class="py-2 px-3 text-sm rounded-md transition-all duration-[.5s] ring-[1px] ring-green-500 hover:shadow-lg hover:shadow-neutral-900 w-fit flex items-center gap-2">
        <div class="flex">
            <div class="flex items-center gap-1 py-[1px] rounded-md h-fit group">
                <img loading="lazy" :src="dark + '.svg'" class="self-start hidden w-6 group-hover:block">
                <img loading="lazy" :src="svg + '.svg'" class="self-start block w-6 group-hover:hidden" />
            </div>
        </div>
        <div class="text-sky-300">{{ skillName }}</div>
    </div>
</template>

<script setup>
const props = defineProps({
    svg: String,
    dark: String,
    skillName: String,
    skillInfo: String,
    index: Number,
});
</script>

<style scoped>
</style>