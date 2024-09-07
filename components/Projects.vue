<template>
    <div>
        <div id="projects" class="flex flex-col pt-[100px] gap-9 intersect" :class="[currentSection !== 'projects' ? 'opacity-5 blur-[2px]' : '']">
            <Project
            v-for="(project, index) in projects"
            :key="index"
            :index="index"
            :link="project.link"
            :title="project.title"
            :info="project.info"
            :img="project.img" />
        </div>
    </div>
</template>

<script setup>
const main = mainStore()
const {currentSection, projects} = storeToRefs(main)
</script>