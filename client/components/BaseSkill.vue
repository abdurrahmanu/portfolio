<template>
    <div
    v-motion
    :initial="{ opacity: 0, X: 500}"
    :enter="{ opacity: 1, x: 0, scale: 1 }"
    :delay="300 * index"
    class="pt-4 px-4 text-[10px] custom-screen-lg:text-[16px] border border-rgba(255, 255, 255, 0.10) pb-[14px] rounded-[10px] shadow-lg bg-gradient-to-b from-bg-white to-black flex flex-col">
        <div class="flex justify-between items-center pb-6">
            <div class="">
                <component :is="svgComponent.component" />
            </div>
            <div class="text-[rgba(255,255,255,0.6)] flex items-center gap-[17px] font-normal hover:text-white">view project <ArrowSvg /> </div>
        </div>
        <div class="text-white font-medium pb-[10px]">{{ skillName }}</div>
        <div class="text-[rgba(255,255,255,0.6)] typography-info max-w-[549px] font-normal">{{ skillInfo }}</div>
    </div>
</template>

<script setup>
import ArrowSvg from './svgComponents/ArrowSvg.vue'

const props = defineProps({
    svgComponent: Object,
    skillName: String,
    skillInfo: String,
    index: Number,
});

</script>

