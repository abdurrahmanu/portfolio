<template>
    <div :class="[scrolledInSection !== 'skills' ? 'opacity-5 blur-[2px]' : '']">
        <div id="skills" class="skills intersect">
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
            svg: 'react',
            name: 'React Native',
            info: 'Lörem ipsum finanssmälta konsocial i sukrolingar ber, i diabelt det prebåst utan transfett, i rer homoktigt och decis.'
        },
        {
            svg: 'javascript',
            name: 'JavaScript',
            info: 'Lörem ipsum finanssmälta konsocial i sukrolingar ber, i diabelt det prebåst utan transfett, i rer homoktigt och decis.'
        },
        {
            svg: 'python',
            name: 'Python',
            info: 'Lörem ipsum finanssmälta konsocial i sukrolingar ber, i diabelt det prebåst utan transfett, i rer homoktigt och decis.'
        },
        {
            svg: 'node',
            name: 'Node Js',
            info: 'Lörem ipsum finanssmälta konsocial i sukrolingar ber, i diabelt det prebåst utan transfett, i rer homoktigt och decis.'
        }
    ]

const main = mainStore()
const {scrolledInSection} = storeToRefs(main)
</script>

<style scoped>
.skills {
    @apply flex flex-col gap-[27px] sm:pt-[73px] pt-10
}
</style>
