<template>
    <div class="px-5 sm:px-10 lg:px-24 bg-[#121212] pb-[40px] m-auto w-fit text-slate-400 home">
        <Navbar />
        <div class=" flex gap-[5.1%] max-w-[1230px] px-4 my-md:px-3 m-auto my-md:flex-col my-md:space-y-3 ">
            <FixedSection />
            <RightSection />
        </div>
    </div>
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
        rootMargin: '-15% 0px -90% 0px',
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