<template>
    <div class="space-y-1 text-sm rounded-md ring-[1px] ring-red-900 shadow-md shadow-black hover:shadow-sm scale-100 bg-[#121212]">
        <div class="h-[50%] rounded-md rounded-b-none">
            <img class="rounded-md rounded-b-none" src="/projectBackground.png" alt="">
        </div>
        <div class="p-2 px-3 space-y-2">
            <div class="text-base font-bold text-red-400">{{ project.title }}</div>
            <div class="text-xs md:text-sm">{{ project.info }}</div>
            <div class="flex items-center justify-between text-xs">
                <p class="px-2 py-[5px] rounded-full bg-[#564b04] leading-none text-[#F0DB4F]">{{ project.type }}</p>
                <div class="flex items-center gap-3 px-3 py-1 rounded-md ring-[1px] ring-neutral-800 hover:ring-red-900 hover:text-green-300 h-fit">
                    <img src="/linkedin.svg" class="self-end w-3" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const main = mainStore()
const {scrolledInSection} = storeToRefs(main)

const props = defineProps({
    index: Number,
    project: Object,
})
</script>
