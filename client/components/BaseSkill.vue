<template>
    <div
    v-motion
    :initial="{ opacity: 0, X: 500}"
    :enter="{ opacity: 1, x: 0, scale: 1 }"
    :delay="300 * index"
    class="skill">
        <div class="flex justify-between items-center pb-6">
            <div class="">
                <component :is="svgComponent.component" />
            </div>
            <div class="link">view project <SvgComponentsArrowSvg/> </div>
        </div>
        <div class="text-white font-medium pb-[10px]">{{ skillName }}</div>
        <div class="info">{{ skillInfo }}</div>
    </div>
</template>

<script setup>

const props = defineProps({
    svgComponent: Object,
    skillName: String,
    skillInfo: String,
    index: Number,
});

</script>

<style scoped>
.skill {
    @apply pt-4 px-4 text-[10px] custom-screen-lg:text-[16px] border border-[rgba(255,255,255,0.10)] pb-[14px] rounded-[10px] shadow-lg flex flex-col
}

.link {
    @apply text-[rgba(255,255,255,0.6)] flex items-center gap-[17px] font-normal hover:text-white
}

.info {
    @apply text-[rgba(255,255,255,0.6)] max-w-[549px] font-normal
}
</style>

