<template>
    <div id="about" class="relative ring-[1px] rounded-md ring-green-700 intersect bg-[#121212]" :class="[scrolledInSection !== 'about' ? 'opacity-5 blur-[2px]' : '']">
        <div class="flex">            
            <img loading="lazy" id="first" @click="current = 'first'" :class="[current === 'first' ? 'over-image' : 'under-image']" class="image border-r-[1px] border-r-black left-0" src="/image.png" alt="">
            <img loading="lazy" id="second" @click="current = 'second'" :class="[current === 'second' ? 'over-image' : 'under-image']" class="image border-l-[1px] border-l-black absolute right-0" src="/image.png" alt="">
        </div>
    </div>
    <div v-if="scrolledInSection === 'about'" class="flex justify-center gap-2 pt-3">
        <div @click="current='first'" :class="[current === 'first' ? 'bg-green-700' : 'bg-white']" class="w-2 h-2 rounded-full"></div>
        <div @click="current='second'" :class="[current === 'second' ? 'bg-green-700' : 'bg-white']" class="w-2 h-2 bg-white rounded-full"></div>
    </div>
</template>

<script setup>
const current  = ref('first')

const main = mainStore()
const {scrolledInSection} = storeToRefs(main)
</script>

<style scoped>
.image {
    @apply w-[70%] bg-neutral-900 rounded-md h-fit max-h-[400px]
}

.over-image {
    @apply z-[3] 
}

.under-image {
    @apply top-0 bottom-0 z-[2] opacity-[.1]
}
</style>