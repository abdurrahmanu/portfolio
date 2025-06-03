<template>
    <div class="space-y-1 max-w-[350px] m-auto text-blue-400 exo">
        <div class="ring rounded-md">
            <!-- <img class="relative bg-black rounded-md"  :src="'/' + img + '.jpg'"> -->
        </div>
        <div class="flex items-center justify-between p-1 px-3">
            <div class="font-bold uppercase">{{ title }}</div>
            <a class="py-1 rounded-md ring-green-400 ring-[2px] p-2 cursor-pointer" :href="link" target="_blank">
                <img loading="lazy" src="/arrow-up.svg"  class="w-3 h-3" />
            </a>
        </div>
        <p class="w-[90%] m-auto">{{ info }}</p>
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
