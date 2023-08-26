<template>
    <div id="skills" class="skills intersect">
        <BaseSkill 
        v-for="(skill, index) in skillSet"
        :index="index"
        :key="index"
        :svgComponent="{component: skill.component}"
        :skillName="skill.name"
        :skillInfo="skill.info" />
    </div>
</template>

<script setup>
const { skillSet } = allData()

</script>

<style scoped>
.skills {
    @apply flex flex-col gap-[27px] pt-[73px]
}
</style>
