<template>
    <div>
        <SectionInfo
        :sectionName="skillsetInfo.name"
        :fixedHeading="skillsetInfo.header"
        :fixedInformation="skillsetInfo.info"
        />
        <div id="skills" class="skills intersect">
            <BaseComponentsSkill 
            v-for="(skill, index) in skillSet"
            :index="index"
            :key="index"
            :svgComponent="{component: skill.component}"
            :skillName="skill.name"
            :skillInfo="skill.info" />
        </div>
    </div>
</template>

<script setup>
const { skillSet, fixedSectionData } = allData()
const skillsetInfo = fixedSectionData['Skillset']

</script>

<style scoped>
.skills {
    @apply flex flex-col gap-[27px] sm:pt-[73px] pt-10
}
</style>
