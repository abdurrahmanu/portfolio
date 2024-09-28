<template>
    <div class="text-[10px] nav font-sans z-[9]">
        <div class="relative flex items-center justify-between w-full max-w-[900px] m-auto rounded-full shadow-black" :class="[toggleNav ? 'bg-black rounded-full' : '']">
            <div :class="[toggleNav ? 'w-[20%] rounded-r-none' : '']" class="flex items-center gap-2 px-2 py-1 rounded-full shadow-sm bg-neutral-900 shadow-black">
                <div :style="{'color' : currentSectionStyle['contactMe']}" class="px-3 py-1 text-xs font-bold uppercase sm:text-sm caveat">Dorayi</div>
            </div>
            <div ref="menuElement" :class="[toggleNav ? 'w-[80%] rounded-l-none px-2 py-[6px]' : 'w-fit']" class="relative rounded-full shadow-sm bg-neutral-900 shadow-black">
                <div v-if="toggleNav" class="flex items-center justify-between">               
                    <div class="flex items-center justify-around font-sans text-xs transition-all duration-500 w-[95%] max-w-[600px]">

                        <div v-for="(nav, index) in navigations" :key="index" class="relative transition-all duration-150 nav-item">
                            <div @mouseover="hoveredNav = nav" @mouseleave="hoveredNav = ''" @click="goToSection(nav)" class="text-[10px] sm:text-xs lg:text-sm uppercase peer  exo" :style="{'color' : hoveredNav === nav ? currentSectionStyle['hoverText'] : '', 'color': nav.toLowerCase().includes(currentSection) ? currentSectionStyle['navText']: ''}">{{ nav }}</div>
                            <div v-if="toggleNav" :style="{ 'boxShadow' : hoveredNav === nav ? currentSectionStyle['hoverShadow'] : '', 'boxShadow' : nav.toLowerCase().includes(currentSection) ?  currentSectionStyle['navShadow'] : ''}" class="absolute top-0 bottom-0 left-0 right-0 z-[-1] animate-pulse"></div>
                        </div>
                        
                    </div>
                    <div @click="toggleNav = !toggleNav" class="relative hover:text-red-400">
                        <div class="peer hover:text-red-400">X</div>
                        <div class="absolute top-0 bottom-0 left-0 right-0 bg-red-600 peer-hover:shadow-[0_3px_30px_3px_#dc2626] z-[-1]"></div>
                    </div>
                </div>
                <div @click="toggleNav = !toggleNav" class="px-3 py-2" v-else>                    
                    <div :style="{'border' : `2px solid ${currentSectionStyle['borderBg']}` }" class="py-[3px] w-[15px] border-x-0 border"></div>
                </div>
            </div>
        </div>
        <div class="bg-green-900"></div>
    </div>
</template>

<script setup>
const nav_ = ref('about')
const hoveredNav = ref('')
const toggleNav = ref(false);
const menuElement = ref(null)
const navigations = ['about', 'skills', 'projects', 'contact']

const main = mainStore()
const {currentSection, currentSectionStyle} = storeToRefs(main)

const goToSection = (section) => {
    if (currentSection.value === section) return
    if (section === 'about')  window.scrollTo(0, 0)
    else if (section === 'contact') window.scrollTo(0, document.body.scrollHeight)
    else document.getElementById(section).scrollIntoView()
    currentSection.value = section
}

watch(currentSection, newVal => nav_.value = newVal )
</script>

<style scoped>
.nav {
    @apply w-full sm:sticky max-w-[1228px] m-auto fixed top-0 left-0 px-6 text-[10px] flex justify-around items-center py-6 my-md:min-h-[40px] min-h-[20px] my-md:py-4
}
</style>
