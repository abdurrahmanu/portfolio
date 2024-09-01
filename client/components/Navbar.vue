<template>
    <div class="text-[10px] nav font-sans z-[9]">
        <div class="relative flex items-center justify-between w-full max-w-[900px] m-auto rounded-full shadow-black" :class="[openMenu ? 'bg-black rounded-full' : '']">
            
            <div :class="[openMenu ? 'w-[20%] rounded-r-none' : '']" class="flex items-center gap-2 px-2 py-1 bg-black rounded-full">
                <div class="w-[10px] h-[10px] bg-white rounded-full"></div>
                <div class="font-bold uppercase caveat">Dorayi</div>
            </div>
            <div ref="menuElement" :class="[openMenu ? 'w-[80%] rounded-l-none ' : 'w-fit']" class="px-2 py-[6px]  rounded-full bg-black relative">
                <div v-if="openMenu" class="flex items-center justify-between">                    
                    <div class="flex items-center justify-around font-sans text-xs transition-all duration-500 w-[95%] max-w-[600px]">
                        <div v-for="(nav, index) in navigations" :key="index" class="relative transition-all duration-150 nav-item">
                            <div @click="nav.toLowerCase().includes(scrolledInSection)" class="peer hover:text-green-300" :class="[nav.toLowerCase().includes(scrolledInSection) ? 'text-green-500' : '']">{{ nav }}</div>
                            <div v-if="openMenu" :class="[nav.toLowerCase().includes(scrolledInSection) ? 'shadow-[0_2px_30px_2px_#22c55e]' : '']" class="absolute top-0 bottom-0 left-0 right-0 bg-green-500 peer-hover:shadow-[0_1px_20px_1px_#8cefac] z-[-1] animate-pulse"></div>
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
    </div>
</template>

<script setup>
const openMenu = ref(false);
const menuElement = ref(null)
const navigations = ['About Me', 'My Skills', 'My Projects', 'Contact Me']

const main = mainStore()
const {scrolledInSection} = storeToRefs(main)
</script>

<style scoped>
.nav {
    @apply w-full sm:sticky max-w-[1228px] m-auto fixed top-0 left-0 px-6 text-[10px] flex justify-around items-center py-6 max-[640px]:min-h-[40px] min-h-[100px] max-[640px]:py-2
}
</style>
