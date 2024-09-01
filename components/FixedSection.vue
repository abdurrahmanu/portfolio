<template>
    <div :class="[scrollStyle]" class="fixed space-y-4 max-[640px]:space-y-2 font-sans text-neutral-400">
        <h1 class="text-2xl font-bold md:text-3xl lg:text-4xl max-[640px]:text-center redit">
            <p>Hello, I'm</p>
            <p>Ahmed Abdulrahman</p>
        </h1>
        
        <p :class="[borderBg]" class="relative pl-2 text-sm leading-7 pacifico">I'm a frontend web developer with expertise in HTML, JavaScript, CSS, Vue.js, Tailwind CSS, Git, GitHub, and Firebase. Passionate about crafting captivating user experiences and turning designs into interactive realities. Dedicated to continuous learning and pushing the boundaries of web development. Contact me, let's build something amazing together!</p>
        
        <div class="relative flex flex-row items-center justify-between gap-10 m-auto caveat">                
            <div v-for="(svg, index) in svgs" class="flex items-center gap-[8px] justify-between">
                <img class="w-3" :src="'linkedin.svg' || svg + '.svg'" alt="">
            </div>
        </div>

        <div class="border-b border-b-neutral-800">
            <div class="h-[2px] bg-white">
                <div ref="scroll" :class="[scrolledInSection === 'about' ? 'bg-green-700 after:shadow-green-500' : scrolledInSection === 'skills' ? 'bg-yellow-700 after:shadow-yellow-500' : scrolledInSection === 'projects' ? 'bg-red-700 after:shadow-red-500' : 'bg-sky-900 after:shadow-sky-900']" class="h-[2px] after:absolute after:p-[1px] after:shadow-lg after:right-0 relative"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
const svgs = ['github', 'linkedin', 'download']
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
</script>

<style scoped>
    .fixed {
        @apply sticky top-[85px] max-[640px]:top-[40px] left-0 max-[640px]:w-full w-[46.18%] flex flex-col gap-[3.3%] pb-[40px] h-[calc(100vh_-_110px)] max-[640px]:h-fit
    }
</style>
