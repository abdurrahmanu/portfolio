<template>
    <div 
    @click="$emit('emitCurrentNavigation', currentNavigation)"
    :key="navigationIndex"
    :class="[activeNavigation ? 'text-white' : 'text-[#7d7d7d]']"
    class="navigation">
        <div class="inline-block">{{ navigationIndex }}</div>
        <div
        :class="[activeNavigation ? 'w-[51px] bg-white' : 'bg-gray-500 w-[30px]']" 
        class="line"></div>
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
    @apply font-normal hover:text-white hover:text-opacity-80 transition-all duration-100 w-fit flex gap-2 items-center tracking-[1.04px]
}

.line {
    @apply inline-block transition-all duration-200 h-[2px] 
}

</style>