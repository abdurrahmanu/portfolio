<template>
    <div 
    @click="$emit('emitCurrentNavigation', currentNavigation)"
    :class="[activeNavigation ? 'text-white' : 'text-[#7d7d7d]']"
    class="navigation">
        <span class="inline-block">{{ navigationIndex }}</span>
        <div class="line"
        :class="[activeNavigation ? 'w-[51px] bg-white' : 'bg-gray-500 w-[30px]']">
        </div>
        <div class="inline-block">{{ navigationName }}</div>
    </div>
</template>

<script setup>
const { fixedSectionData } = allData()

const emit = defineEmits(['emitCurrentNavigation'])
const props = defineProps({
    navigationName: String,
    navigationIndex: Number,
    activeNavigation: Boolean
})

const currentNavigation = ref(fixedSectionData[props.navigationName].name)
</script>

<style scoped>
.navigation {
    @apply font-normal text-[10px] custom-screen-xl:text-[13px] custom-screen-3xl:text-[16px] hover:text-white hover:text-opacity-80 w-fit flex gap-2 items-center tracking-[1.04px]
}

.line {
    @apply inline-block transition-all duration-200 h-[2px] 
}

</style>