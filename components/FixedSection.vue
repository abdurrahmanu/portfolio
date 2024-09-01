<template>
    <div :class="[scrollStyle, scrolledInSection === 'contact' ? 'pt-4' : '']" class="fixed space-y-1 max-[640px]:space-y-2 font-sans text-neutral-400">
        <h1 :class="[headingText]" class="text-xl sm:text-2xl text-shadow font-bold md:text-3xl lg:text-4xl max-[640px]:text-center exo">
            <p>Hello, I'm</p>
            <p>Ahmed Abdulrahman</p>
        </h1>
        
        <p :class="[borderBg]" class="relative pl-2 text-xs leading-5 sm:leading-7 sm:text-sm exo text-zinc-400">I'm a frontend web developer with expertise in HTML, JavaScript, CSS, Vue.js, Tailwind CSS, Git, GitHub, and Firebase. Passionate about crafting captivating user experiences and turning designs into interactive realities. Dedicated to continuous learning and pushing the boundaries of web development. Contact me, let's build something amazing together!</p>
        
        <div class="relative flex flex-row items-center justify-between gap-10 m-auto caveat">                
            <div v-for="(svg, index) in svgs" class="flex items-center gap-[8px] justify-center rounded-full h-8 text-center w-8 bg-neutral-700 hover:bg-neutral-600 shadow shadow-black">
                <img :class="[svg === 'arrow' ? 'rotate-[-90deg] w-4' : 'w-6']" :src="svg + '.svg'" alt="">
            </div>
        </div>

        <div class="border-b border-b-neutral-800">
            <div class="h-[2px] bg-neutral-600">
                <div ref="scroll" :class="[scrolledInSection === 'about' ? 'bg-green-700 after:shadow-green-500' : scrolledInSection === 'skills' ? 'bg-yellow-700 after:shadow-yellow-500' : scrolledInSection === 'projects' ? 'bg-red-700 after:shadow-red-500' : 'bg-sky-900 after:shadow-sky-900']" class="h-[2px] after:absolute after:p-[1px] after:shadow-lg after:right-0 relative"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
const svgs = ['github', 'arrow']
const scroll = ref(null)
const scrollbar = useScrollBar()
const scrollStyle = ref(0)
const {scrollPercent} = storeToRefs(scrollbar)

const main = mainStore()
const {scrolledInSection} = storeToRefs(main)

onMounted(() => {
    watchEffect(() => {
        scroll.value.style.width = `${scrollPercent.value}%`
    })
})

const borderBg = computed(() => {
    return  scrolledInSection.value === 'about' ?
                'border-l-green-900 border-l-[5px]' :
            scrolledInSection.value === 'skills' ?
                'border-l-yellow-900 border-l-[5px]' :
            scrolledInSection.value === 'projects'?
                'border-l-red-900 border-l-[5px]' :
            scrolledInSection.value === 'contact' ?
                'border-l-sky-900 border-l-[5px]'  : ''
})

window.addEventListener('scroll', e => {
    if (scrollY > 80) scrollStyle.value = 'max-[640px]:blur-[8px]'
    else scrollStyle.value = ''
})

const headingText = computed(() => {
    return  scrolledInSection.value === 'about' ?
                'text-green-800' :
            scrolledInSection.value === 'skills' ?
                'text-yellow-800' :
            scrolledInSection.value === 'projects'?
                'text-red-900' :
            scrolledInSection.value === 'contact' ?
                'text-sky-900'  : ''
})
</script>

<style scoped>
    .fixed {
        @apply sticky top-[85px] max-[640px]:top-[40px] left-0 max-[640px]:w-full w-[46.18%] flex flex-col gap-[3.3%] pb-[40px] h-[calc(100vh_-_110px)] max-[640px]:h-fit
    }

    .text-shadow {
        text-shadow: 2px 2px black;
    }
</style>
