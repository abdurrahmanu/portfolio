<template>
    <div class="main-container">
        <div class="main-content">
            <FixedSection
            @clickNavigation="clickedNavigation = $event"
            :currentSection="currentSection"  />
            <div class="w-[48.7%] max-w-[598px] flex flex-col">
                <RightSectionAboutMe />
                <RightSectionAllSkillset />
                <RightSectionProjectsList  />
                <RightSectionContactMe />
            </div>
        </div>
        <div class="min-w-fit max-w-[1228px] mx-auto">
            <BaseFooter />
        </div>
    </div>
</template>

<script setup>
const currentSection = ref('');
const clickedNavigation = ref(false)
const observer = ref(null)

const unobserveIntersection = () => {
    document.querySelectorAll('.intersect').forEach((section) => {
        observer.value.unobserve(section);
    })
}

onMounted(() => {
    observer.value = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !clickedNavigation.value) {
                currentSection.value = entry.target.id
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

onUnmounted(() => {
    unobserveIntersection()
});

</script>

<style scoped>
    .main-container {
        @apply px-[106px] pb-[63px] min-h-screen text-white transition-all delay-150
    }

    .main-content {
        @apply flex gap-[5.1%] relative max-w-[1228px] min-w-fit m-auto transition-all duration-100 h-fit
    }
</style>





