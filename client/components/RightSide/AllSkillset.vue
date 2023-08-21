<template>
    <div id="skills" class="flex flex-col gap-[27px] pt-[73px]">
        <BaseSkill 
        :key="index"
        :svgComponent="{component: skill.component}"
        :skillName="skill.name"
        :skillInfo="skill.info"
        :index="index"
        v-for="(skill, index) in skillSet"/>
    </div>
</template>

<script setup>
const { skillSet } = allData()

</script>
