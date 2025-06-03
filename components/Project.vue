<template>
    <div class="space-y-1 max-w-[350px] m-auto text-blue-400 exo">
        <div class="ring rounded-md">
            <!-- <img class="relative bg-black rounded-md"  :src="'/' + img + '.jpg'"> -->
        </div>
        <div class="flex items-center justify-between p-1 pt-2">
            <div class="font-bold uppercase text-sm">{{ title }}</div>
            <a class="py-1 rounded-md ring-green-400 ring-[1px] p-2 cursor-pointer" :href="link" target="_blank">
                <img loading="lazy" src="/arrow-up.svg"  class="w-2 h-2" />
            </a>
        </div>
        <p class="m-auto text-justify text-sm font-medium leading-7">{{ info }}</p>
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
