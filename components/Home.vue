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
const {currentSection} = storeToRefs(main)

const unobserveIntersection = () => {
    document.querySelectorAll('.intersect').forEach((section) => {
        observer.value.unobserve(section);
    })
}

onMounted(() => {
    observer.value = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                currentSection.value = entry.target.id
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
</script>