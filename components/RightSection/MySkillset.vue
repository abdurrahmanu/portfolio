<template>
    <div :class="[scrolledInSection !== 'skills' ? 'opacity-5 blur-[2px]' : '']">
        <div id="skills" class="flex flex-col gap-[20px] intersect pt-16">
            <BaseComponentsSkill 
            v-for="(skill, index) in skillSet"
            :index="index"
            :key="index"
            :svg="skill.svg"
            :skillName="skill.name"
            :skillInfo="skill.info" />
        </div>
    </div>
</template>

<script setup>
const skillSet = [
        {
            svg: 'nuxt',
            name: 'NuxtJS'
        },
        {
            svg: 'vue',
            name: 'VueJS'
        },
        {
            svg: 'js',
            name: 'JavaScript'
        },
        {
            svg: 'tailwindcss',
            name: 'TailwindCSS'
        },
        {
            svg: 'node',
            name: 'NodeJS'
        },
        {
            svg: 'github',
            name: 'Github'
        },
        {
            svg: 'firebase',
            name: 'FireStore'
        }
    ]

const main = mainStore()
const {scrolledInSection} = storeToRefs(main)
</script>