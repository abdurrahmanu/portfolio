<template>
    <section :class="[scrollStyle, currentSection === 'contact' ? 'pt-4' : '']" class="fixed space-y-[2px] font-sans text-neutral-400 my-md:pt-6 my-md:m-auto max-w-[500px]">
        <h1 :class="[headingText]" class="text-lg font-bold leading-none my-md:text-2xl sm:text-xl text-shadow md:text-2xl lg:text-3xl exo">
            <p>Hello, I'm</p>
            <p>Ahmed Abdulrahman</p>
        </h1>
        
        <p :class="[borderBg]" class="relative pl-2 text-sm my-md:leading-7 exo text-zinc-500 sm:leading-6">I'm a frontend web developer with expertise in JavaScript, NuxtJs, VueJs, TailwindCSS, Git & GitHub, NodeJs and Firebase. Passionate about crafting captivating user experience and turning designs into interactive realities. Dedicated to continuous learning and pushing the boundaries of web development. <span @click="reachOut" :class="[contactMe]" class="hover:underline">Contact me</span>, let's build something amazing together!</p>

        <div class="border-b border-b-neutral-800 my-md:hidden my-md:bg-red-500">
            <div class="h-[2px] bg-neutral-600 rotate-[180deg]">
                <div ref="scroll" :class="[currentSection === 'about' ? 'bg-green-700 after:shadow-green-500' : currentSection === 'skills' ? 'bg-yellow-700 after:shadow-yellow-500' : currentSection === 'projects' ? 'bg-red-700 after:shadow-red-500' : 'bg-sky-900 after:shadow-sky-900']" class="h-[2px] after:absolute after:p-[1px] after:shadow-lg after:right-0 relative"></div>
            </div>
        </div>
    </section>
</template>

<script setup>
const scroll = ref(null)
const scrollStyle = ref(0)
const scrollbar = useScrollBar()
const {scrollPercent} = storeToRefs(scrollbar)

const main = mainStore()
const {currentSection} = storeToRefs(main)

onMounted(() => {
    watchEffect(() => {
        scroll.value.style.width = `${scrollPercent.value}%`
    })
})

const borderBg = computed(() => {
    return  currentSection.value === 'about' ?
                'border-l-green-900 border-l-[5px]' :
            currentSection.value === 'skills' ?
                'border-l-yellow-900 border-l-[5px]' :
            currentSection.value === 'projects'?
                'border-l-red-900 border-l-[5px]' :
            currentSection.value === 'contact' ?
                'border-l-sky-900 border-l-[5px]'  : ''
})

window.addEventListener('scroll', e => {
    if (scrollY > 80) scrollStyle.value = 'my-md:blur-[8px]'
    else scrollStyle.value = ''
})

const headingText = computed(() => {
    return  currentSection.value === 'about' ?
                'text-green-800' :
            currentSection.value === 'skills' ?
                'text-yellow-800' :
            currentSection.value === 'projects'?
                'text-red-900' :
            currentSection.value === 'contact' ?
                'text-sky-900'  : ''
})

const contactMe = computed(() => {
    return  currentSection.value === 'about' ?
                ' text-green-600' :
            currentSection.value === 'skills' ?
                ' text-yellow-600' :
            currentSection.value === 'projects'?
                ' text-red-600' :
            currentSection.value === 'contact' ?
                ' text-sky-600'  : ''
})

const reachOut = () => {
    
}
</script>

<style scoped>
    .fixed {
        @apply sticky top-[85px] my-md:top-[40px] left-0 my-md:w-full w-[46.18%] flex flex-col gap-[3.3%] pb-[40px] h-[calc(100vh_-_110px)] my-md:h-fit
    }

    .text-shadow {
        text-shadow: 2px 2px black;
    }
</style>
