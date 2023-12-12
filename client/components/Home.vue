<template>
    <div class="main-container">
        <NavBar v-if="fixedNavInViewPort" />
        <CustomNavBar />
        <div class="main-content">
            <FixedSection
            @fixedNavInViewPort="fixedNavInViewPort = $event"
            @clickNavigation="clickedLeftNavigation = $event"
            :scrolledInSection="scrolledInSection" />
            <RightSection />
        </div>
        <BaseComponentsFooter />
    </div>
</template>

<script setup>
const scrolledInSection = ref('');
const fixedNavInViewPort = ref(false)
const clickedLeftNavigation = ref(false)
const observer = ref(null)

const unobserveIntersection = () => {
    document.querySelectorAll('.intersect').forEach((section) => {
        observer.value.unobserve(section);
    })
}

onMounted(() => {
    observer.value = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !clickedLeftNavigation.value) {
                scrolledInSection.value = entry.target.id
            }
        });
    },
    {
        root: document.getElementById('#app'),
        rootMargin: '0px 0px -95% 0px',
    });

    document.querySelectorAll('.intersect').forEach((section) => {
        observer.value.observe(section);
    })
})

onUnmounted(() => unobserveIntersection());
</script>

<style scoped>
.main-content {
    @apply flex gap-[5.1%] relative max-w-[1228px] px-6 min-w-fit m-auto transition-all duration-100 h-fit
    }

    .main-container {
        @apply sm:px-[106px] px-5 bg-baseBlack pb-[63px] text-white transition-all delay-150
    } 

</style>
