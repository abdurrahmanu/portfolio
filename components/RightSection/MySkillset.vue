<template>
    <div :class="[scrolledInSection !== 'skills' ? 'opacity-5 blur-[2px]' : '']">
        <div id="skills" class="flex flex-col gap-[20px] intersect pt-16">
            <BaseComponentsSkill 
            v-for="(skill, index) in skillSet"
            :index="index"
            :key="index"
            :svg="skill.svg"
            :dark="skill.darkSvg"
            :skillName="skill.name"
            :skillInfo="skill.info" />
        </div>
    </div>
</template>

<script setup>
const skillSet = [
        {
            svg: 'nuxt-c',
            darkSvg: 'nuxt-b',
            name: 'NuxtJS'
        },
        {
            svg: 'vue-c',
            darkSvg: 'vue-b',
            name: 'VueJS'
        },
        {
            svg: 'js-c',
            darkSvg: 'js-b',
            name: 'JavaScript'
        },
        {
            svg: 'tailwindcss-c',
            darkSvg: 'tailwindcss-b',
            name: 'TailwindCSS'
        },
        {
            svg: 'nodejs-c',
            darkSvg: 'nodejs-b',
            name: 'NodeJS'
        },
        {
            svg: 'github-c',
            darkSvg: 'github-b',
            name: 'Github'
        },
        {
            svg: 'firebase-c',
            darkSvg: 'firebase-b',
            name: 'FireStore'
        }
    ]

const main = mainStore()
const {scrolledInSection} = storeToRefs(main)
</script>