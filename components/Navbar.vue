<template>
    <div class="text-[10px] nav font-sans z-[9]">
        <div class="relative flex items-center justify-between w-full max-w-[900px] m-auto rounded-full shadow-black" :class="[openMenu ? 'bg-black rounded-full' : '']">
            <div :class="[openMenu ? 'w-[20%] rounded-r-none' : '']" class="flex items-center gap-2 px-2 py-1 rounded-full shadow-sm bg-neutral-900 shadow-black">
                <div class="w-[10px] h-[10px] bg-white rounded-full"></div>
                <div class="pr-2 text-sm font-bold uppercase caveat">Dorayi</div>
            </div>
            <div ref="menuElement" :class="[openMenu ? 'w-[80%] rounded-l-none ' : 'w-fit']" class="px-2 py-[6px]  rounded-full bg-neutral-900 relative shadow-sm shadow-black">
                <div v-if="openMenu" class="flex items-center justify-between">               
                    <div class="flex items-center justify-around font-sans text-xs transition-all duration-500 w-[95%] max-w-[600px]">
                        
                        <div v-for="(nav, index) in navigations" :key="index" class="relative transition-all duration-150 nav-item">
                            <div @mouseover="hoveredNav = nav" @mouseleave="hoveredNav = ''" @click="goToSection(nav)" class="uppercase peer" :class="[hoveredNav === nav ? hoverText : '', nav.toLowerCase().includes(scrolledInSection) ? navText : '']">{{ nav }}</div>
                            <div v-if="openMenu" :class="[hoveredNav === nav ? hoverShadow : '', nav.toLowerCase().includes(scrolledInSection) ?  navShadow : '']" class="absolute top-0 bottom-0 left-0 right-0 z-[-1] animate-pulse"></div>
                        </div>
                        
                    </div>
                    <div @click="openMenu = !openMenu" class="relative hover:text-red-400">
                        <div class="peer hover:text-red-400">X</div>
                        <div class="absolute top-0 bottom-0 left-0 right-0 bg-red-600 peer-hover:shadow-[0_3px_30px_3px_#dc2626] z-[-1]"></div>
                    </div>
                </div>
                <div @click="openMenu = !openMenu" v-else class="border-y border-white py-[3px] w-[15px]"></div>
            </div>
        </div>
        <div class="bg-green-900"></div>
    </div>
</template>

<script setup>
const nav_ = ref('about')
const hoveredNav = ref('')
const openMenu = ref(false);
const menuElement = ref(null)
const navigations = ['about', 'skills', 'projects', 'contact']

const main = mainStore()
const {scrolledInSection} = storeToRefs(main)

const navShadow = computed(() => {
    return nav_.value.includes('about') && scrolledInSection.value === 'about' ? 'shadow-[0_2px_30px_2px_#14532d]' :
        nav_.value.includes('skills') && scrolledInSection.value === 'skills' ? 'shadow-[0_2px_30px_2px_#713f12]' :
            nav_.value.includes('projects') && scrolledInSection.value === 'projects' ? 'shadow-[0_2px_30px_2px_#7f1d1d]' :
                nav_.value.includes('contact') && scrolledInSection.value === 'contact' ? 'shadow-[0_2px_30px_2px_#0c4a6e]'  :
                    ''
})

const navText = computed(() => {
    return nav_.value.includes('about') && scrolledInSection.value === 'about' ? 'text-green-500' :
        nav_.value.includes('skills') && scrolledInSection.value === 'skills' ? 'text-yellow-500' :
            nav_.value.includes('projects') && scrolledInSection.value === 'projects' ? 'text-red-500' :
                nav_.value.includes('contact') && scrolledInSection.value === 'contact' ? 'text-sky-500'  :
                    ''
})

const hoverShadow = computed(() => {
    return hoveredNav.value.includes('about') ? 'shadow-[0_2px_14px_2px_#14532d]' :
        hoveredNav.value.includes('skills') ? 'shadow-[0_2px_14px_2px_#713f12]' :
            hoveredNav.value.includes('projects') ? 'shadow-[0_2px_14px_2px_#7f1d1d]' :
                hoveredNav.value.includes('contact') ? ' shadow-[0_2px_14px_2px_#0c4a6e]'  :
                    ''
})

const hoverText = computed(() => {
    return hoveredNav.value.includes('about') ? 'text-green-300' :
        hoveredNav.value.includes('skills') ? 'text-yellow-300' :
            hoveredNav.value.toLowerCase().includes('projects') ? 'text-red-300' :
                hoveredNav.value.toLowerCase().includes('contact') ? 'text-sky-300'  :
                    ''
})

const goToSection = (section) => {
    if (scrolledInSection.value === section) return
    scrolledInSection.value = section
    if (section === 'about') {
        window.scrollTo(0, 0)
    }
    else if (section === 'contact') window.scrollTo(0, document.body.scrollHeight)
    else {
        document.getElementById(section).scrollIntoView({
            block: 'start',
            behaviour: "smoooth"
        })
    }
}

watch(scrolledInSection, newVal => {
    nav_.value = newVal
})
</script>

<style scoped>
.nav {
    @apply w-full sm:sticky max-w-[1228px] m-auto fixed top-0 left-0 px-6 text-[10px] flex justify-around items-center py-6 max-[640px]:min-h-[40px] min-h-[20px] max-[640px]:py-2
}
</style>
