<template>
    <div>
        <SectionInfo
        :sectionName="projectsInfo.name"
        :fixedHeading="projectsInfo.header"
        :fixedInformation="projectsInfo.info"
        />
        <div id="projects" class="projects intersect">
            <BaseComponentsProject
            v-for="index in 5"
            :key="index"
            :index="index"
            :project="projects[0]" />
        </div>
    </div>
</template>

<script setup>
const { projects, fixedSectionData } = allData()
const projectsInfo = fixedSectionData['Projects']
</script>

<style scoped>
.projects {
    @apply flex flex-col gap-9 sm:pt-[73px] pt-10 transition-all duration-300
}
</style>