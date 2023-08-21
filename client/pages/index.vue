<template>
    <div class="app-container">
        <div class="main-content">
            <DynamicBio />
            <div class="w-[48.7%] max-w-[598px] flex flex-col">
                <RightSideAboutMe />
                <RightSideAllSkillset />
                <RightSideProjectsList />
                <RightSideContactMe />
            </div>
        </div>
        <div class="pb-[63px] min-w-fit max-w-[1228px] mx-auto">
            <BaseFooter />
        </div>
    </div>
</template>

<style scoped>
    .app-container {
        @apply px-[106px] bg-baseBlack min-h-screen text-white transition-all delay-150
    }

    .main-content {
        @apply flex gap-[5.1%] relative max-w-[1228px] min-w-fit m-auto transition-all duration-100 h-fit
    }
</style>





