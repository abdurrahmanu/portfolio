<template>
    <div 
    @click="$emit('currentNav', currentNavigation)"
    :key="index"
    :class="[active ? 'text-white' : 'text-[#7d7d7d]']"
    class="font-normal hover:text-white hover:text-opacity-80 transition-all duration-100 w-fit flex gap-2 items-center tracking-[1.04px]">
        <div class="inline-block">{{ index }}</div>
        <div
        :class="[active ? 'w-[51px] bg-white' : 'bg-gray-500 w-[30px]']" class="inline-block transition-all duration-200 h-[2px]"></div>
        <div class="inline-block">{{ item }}</div>
    </div>
</template>

<script setup>
const { dynamicComponentData } = allData()

const emit = defineEmits(['currentNav'])

const props = defineProps({
    item: String,
    index: Number,
    active: Boolean
})

const currentNavigation = ref(dynamicComponentData[props.item].name)
</script>