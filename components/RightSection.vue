<template>
    <div class="right-section">
        <div class="lg:w-[90%] lg:m-auto max-w-[500px] space-y-4">            
            <RightSectionAboutMe />
            <RightSectionMySkillset />
            <RightSectionMyProjects  />
            <RightSectionContactMe />
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
    .right-section {
        @apply w-[48.7%] my-md:w-[70%] min-w-[300px] my-md:m-auto max-w-[598px] flex flex-col
    }
</style>