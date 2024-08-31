<template>
    <div>
        <div id="projects" class="projects intersect" :class="[scrolledInSection !== 'projects' ? 'opacity-5 blur-[2px]' : '']">
            <BaseComponentsProject
            v-for="index in 5"
            :key="index"
            :index="index"
            :project="projects[0]" />
        </div>
    </div>
</template>

<script setup>
const main = mainStore()
const {scrolledInSection} = storeToRefs(main)

const projects = ref([{
        title: 'PROJECT TITLE',
        info: 'Lörem ipsum vara på tårna derade därade. Stenoll guldsot nekodade. Plabel nenar jån tasigförsamhet gubelt plade. Faledes nivinade vyv, förutom demicentrism i eulor fäbiktiga förlåtandeintervall. Kuv kövis. Infraktigt trir, jinas att geor utvigning, blockchain. Soheten',
        type: 'web and mobile development',
        link: 'www.google.com',
        language: 'web'
    }])
</script>

<style scoped>
.projects {
    @apply flex flex-col gap-9 sm:pt-[73px] pt-10 transition-all duration-300
}
</style>