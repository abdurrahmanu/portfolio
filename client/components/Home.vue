<template>
    <div class="main-container">
        <div class="main-content">
            <FixedSection
            @clickNavigation="clickedLeftNavigation = $event"
            :scrolledInSection="scrolledInSection"
            />
            <RightSection />
        </div>
        <BaseComponentsFooter />
    </div>
</template>

<script setup>
const scrolledInSection = ref('');
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
    .main-container {
        @apply md:px-[106px] px-4 bg-baseBlack pb-[63px] text-white transition-all delay-150
    }

    .main-content {
        @apply flex gap-[5.1%] relative max-w-[1228px] min-w-fit m-auto transition-all duration-100 h-fit
    }
</style>
