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
        @apply sm:w-[48.7%] max-[640px]:w-[80%] max-[640px]:m-auto max-[640px]:max-w-full max-w-[598px] flex flex-col
    }
</style>