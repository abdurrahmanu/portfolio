<template>
    <div class="skill">
        <div class="flex justify-between items-center pb-6">
            <component :is="svgComponent.component" />
            <div @click="filterProjects" class="link">
                <span>view project</span>
                <SvgComponentsArrowSvg/>
            </div>
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

const filterProjects = () => {
    console.log(props.skillName)
}

</script>

<style scoped>
.skill {
    @apply pt-3 pl-3 pr-5 text-[10px] custom-screen-lg:text-[16px] border border-[rgba(255,255,255,0.10)] pb-3 rounded-[10px] shadow-lg flex flex-col custom-screen-lg:pt-4 custom-screen-lg:pl-4 custom-screen-lg:pr-[24.89px] custom-screen-lg:pb-[14px]
}

.link {
    @apply text-[rgba(255,255,255,0.6)] flex items-center gap-[17px] font-normal hover:text-white
}

.info {
    @apply text-[rgba(255,255,255,0.6)] max-w-[549px] font-normal
}
</style>

