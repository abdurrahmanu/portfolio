<template>
    <div class="px-5 sm:px-10 lg:px-24 bg-[#121212] pb-[40px] m-auto w-fit text-slate-400 home">
        <Navbar />
        <div class=" flex gap-[5.1%] pt-0 max-w-[1230px] px-6 m-auto w-fit max-[640px]:flex-col">
            <FixedSection />
            <RightSection />
        </div>
    </div>
    <!-- <div class="absolute hidden md:text-3xl md:block right-[-20%]">                
        <div  :class="[scrolledInSection === 'about' ? 'text-green-700' : scrolledInSection === 'skills' ? 'text-yellow-700' : scrolledInSection === 'projects' ? 'text-red-900' : 'text-sky-900']" class="font-medium top-[50%] translate-y-[-50%] opacity-60 uppercase left-[100%] pl-10 absolute">{{scrolledInSection}}</div>       
        <div class="z-[1] text-black font-medium top-[50%] translate-y-[-50%] uppercase left-[100%] pl-[43px] absolute">{{scrolledInSection}}</div>       
    </div> -->
</template>

<script setup>
const observer = ref(null)
const main = mainStore()
const {scrolledInSection} = storeToRefs(main)

const unobserveIntersection = () => {
    document.querySelectorAll('.intersect').forEach((section) => {
        observer.value.unobserve(section);
    })
}

onMounted(() => {
    observer.value = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                scrolledInSection.value = entry.target.id
            }
        });
    },
    {
        root: null,
        rootMargin: '-10% 0px -90% 0px',
    });

    document.querySelectorAll('.intersect').forEach((section) => observer.value.observe(section))
})

onUnmounted(() => unobserveIntersection());

// const track = computed(() => {
//     return scrolledInSection.value === 'about' ?
//         'green' : scrolledInSection.value === 'skills' ?
//             'yellow' : scrolledInSection.value === 'projects' ?
//                 'red' : 
//                     'blue'
// })

// const thumb = computed(() => {
//     return scrolledInSection.value === 'about' ?
//         'green' : scrolledInSection.value === 'skills' ?
//             'yellow' : scrolledInSection.value === 'projects' ?
//                 'red' : 
//                     'blue'
// })

// const thumbHover = computed(() => {
//     return scrolledInSection.value === 'about' ?
//         'green' : scrolledInSection.value === 'skills' ?
//             'yellow' : scrolledInSection.value === 'projects' ?
//                 'red' : 
//                     'blue'
// })

</script>

<!-- <style>
::-webkit-scrollbar-track {
    background: v-bind(track);
}

::-webkit-scrollbar-thumb {
    background: v-bind(thumb);
}

::-webkit-scrollbar-thumb:hover {
    background: v-bind(thumbHover);
}
</style> -->