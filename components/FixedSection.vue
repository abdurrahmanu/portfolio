<template>
    <section :class="[scrollPercent > 8 ? 'my-md:blur-[8px]' : '']" class="fixed space-y-[2px] font-sans text-neutral-400 my-md:pt-6 my-md:m-auto max-w-[500px]">
        <h1  :style="{'color' : sectionStyles[currentSection]['headingText']}" class="text-lg font-bold leading-none my-md:text-2xl sm:text-xl text-shadow md:text-2xl lg:text-3xl exo">
            <p>Hello, I'm</p>
            <p>Ahmed Abdulrahman</p>
        </h1>
        
        <p :style="{'borderLeft' : `5px solid ${sectionStyles[currentSection]['borderBg']}`}" class="relative pl-2 text-sm my-md:leading-7 exo text-zinc-500 sm:leading-6">I'm a frontend web developer with expertise in JavaScript, NuxtJs, VueJs, TailwindCSS, Git & GitHub, NodeJs and Firebase. Passionate about crafting captivating user experience and turning designs into interactive realities. Dedicated to continuous learning and pushing the boundaries of web development. <span @click="reachOut" :style="{'color' : sectionStyles[currentSection]['contactMe']}" class="hover:underline">Contact me</span>, let's build something amazing together!</p>
        <div class="border-b border-b-neutral-800 my-md:hidden my-md:bg-red-500">
            <div class="h-[2px] bg-neutral-400 rotate-[180deg]">
                <div :style="{'width' : scrollPercent + '%', 'background' : currentSectionStyle['scrollRange']}" class="h-[2px] after:absolute after:p-[1px] after:shadow-lg after:right-0 relative"></div>
            </div>
        </div>
    </section>
</template>

<script setup>
const scrollbar = useScrollBar()
const {scrollPercent} = storeToRefs(scrollbar)

const main = mainStore()
const {currentSection, currentSectionStyle, sectionStyles} = storeToRefs(main)
</script>

<style scoped>
    .fixed {
        @apply sticky top-[85px] my-md:top-[40px] left-0 my-md:w-full w-[46.18%] flex flex-col gap-[3.3%] pb-[40px] h-[calc(100vh_-_110px)] my-md:h-fit
    }

    .text-shadow {
        text-shadow: 2px 2px black;        
    }
</style>
