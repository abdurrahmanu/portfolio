<template>
    <div id="about" class="intersect">
        <div class="text-[14px] leading-[16.41px] font-medium text-gray-500 text-opacity-80">About me</div>
        <img loading="lazy" class="my-image" src="../../public/image.png" alt="">
        <SectionInfo
        sectionName=""
        :fixedHeading="aboutInfo.header"
        :fixedInformation="aboutInfo.info"
        />
    </div>
</template>

<script setup>
const { fixedSectionData } = allData()
const aboutInfo = fixedSectionData['About Me']
</script>

<style scoped>
.my-image {
    @apply w-full bg-neutral-900 rounded-md h-fit max-h-[685px]
}
</style>