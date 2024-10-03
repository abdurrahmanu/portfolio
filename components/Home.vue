<template>
    <div class="px-5 sm:px-10 lg:px-24 bg-neutral-700 pb-[40px] mx-auto w-fit text-slate-400 home selection:bg-transparent exo">
        <Navbar />
        <div class=" flex gap-[5.1%] my-md:gap-0 max-w-[1230px] px-4 my-md:px-3 mx-auto my-md:flex-col">
            <FixedSection />
            <RightSection />
        </div>
    </div>
</template>

<script setup>
const observer = ref(null)
const main = mainStore()
const {currentSection} = storeToRefs(main)

const unobserveIntersection = () => document.querySelectorAll('.intersect').forEach( section => observer.value.unobserve(section) )

onMounted(() => {
    observer.value = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                if (entry.target.id) currentSection.value = entry.target.id
            }
        })
        }, 
        { 
            root: null, 
            rootMargin: '0px 0px -100% 0px'
        }
    )
    document.querySelectorAll('.intersect').forEach((section) => observer.value.observe(section))
})

onUnmounted(() => unobserveIntersection());
</script>
