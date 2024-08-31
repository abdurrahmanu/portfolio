<template>
    <div class="p-3 space-y-3 text-sm rounded-md transition-all duration-150 ring-[1px] shadow-md shadow-black hover:shadow-sm z-[2] bg-[#121212] ring-yellow-900">
        <div class="flex justify-between">
            <div @click="goToProjects" class="flex items-center gap-3 px-3 py-1 rounded-md ring-[1px] ring-neutral-800 hover:ring-yellow-900 hover:text-green-300 h-fit">
                <img :src="'linkedin.svg' || svg + '.svg'" class="self-start w-3" />
            </div>
        </div>
        <div class="font-bold text-yellow-700 uppercase">{{ skillName }}</div>
        <div>{{ skillInfo }}</div>
    </div>
</template>

<script setup>
const props = defineProps({
    svg: String,
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
    @apply pt-3 pl-3 pr-5 text-[10px] border pb-3 rounded-[10px] shadow-lg flex flex-col bg-neutral-800
}

.link {
    @apply flex items-center gap-[17px]
}

.info {
    @apply max-w-[549px] font-normal
}
</style>

