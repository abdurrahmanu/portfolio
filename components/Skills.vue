<template>
    <div>
        <div class="gap-[20px] p-2 flex flex-wrap items-center justify-center">
            <Skill 
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
const mainstore = mainStore()
const {skillSet} = mainstore
</script>