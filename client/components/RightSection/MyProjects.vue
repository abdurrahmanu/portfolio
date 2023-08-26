<template>
    <div id="projects" class="projects intersect">
        <BaseProject
        v-for="index in 5"
        :key="index"
        :index="index"
        :project="projects[0]" />
    </div>
</template>

<script setup>
const { projects } = allData()

</script>

<style scoped>
.projects {
    @apply flex flex-col gap-9 pt-[73px] transition-all duration-300
}
</style>