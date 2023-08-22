<template>
    <div id="projects" class="projects intersect">
        <BaseProject
        v-for="(project, index) in projects"
        :key="index"
        :project="project"
        />
    </div>
</template>

<script setup>
const projects = ref([{}, {}, {}, {}, {}, {}, {}, {}])
</script>

<style scoped>
.projects {
    @apply flex flex-col gap-9 pt-[73px] transition-all duration-300
}
</style>