<template>
    <div id="about" class="pt-10 mb-10 intersect">        
        <div id="about" class="relative ring-[1px] rounded-md ring-green-700 scale-[80%] -mt-10" :class="[currentSection !== 'about' ? 'opacity-5 blur-[2px]' : '']">
            <div class="flex bg-[#121212] rounded-md relative">            
                <img loading="lazy" id="first" @click="current = 'first'" :class="[current === 'first' ? 'z-[3]' : 'bottom-0 z-[2] opacity-[.3]']" class="image border-r-[1px] border-r-black left-0" src="/programmer.svg" alt="">
                <img loading="lazy" id="second" ref="secondImage" @click="current = 'second'" :class="[current === 'second' ? 'z-[3]' : 'z-[2] opacity-[0.1]']" class="image border-l-[1px] border-l-black absolute right-0 bottom-0 top-0 h-[100%]" src="/me.jpg" alt="">
            </div>
        </div>
        <div v-if="currentSection === 'about'" class="flex justify-center gap-2">
            <div @click="current='first'" :class="[current === 'first' ? 'bg-green-700' : 'bg-white']" class="w-2 h-2 rounded-full"></div>
            <div @click="current='second'" :class="[current === 'second' ? 'bg-green-700' : 'bg-white']" class="w-2 h-2 rounded-full"></div>
        </div>
    </div>
</template>

<script setup>
const current  = ref('first')
const secondImage = ref(null)
const main = mainStore()
const {currentSection} = storeToRefs(main)

watch(current, newVal => {
    if (newVal === 'second') {
        setTimeout(() => { 
            current.value = 'first'
        }, 10000);
    }
})
</script>

<style scoped>
.image {
    @apply w-[80%] bg-neutral-900 rounded-md max-h-[400px]
}
</style>
