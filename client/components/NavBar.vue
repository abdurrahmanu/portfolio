<template>
    <nav class=" justify-between bg-baseblack shadow-md w-full shadow-black fixed top-0 left-0 text-sm z-[9999] hidden xl:flex">
        <div class="flex gap-5 py-5 pl-[100px] pr-2 bg-baseBlack">
            <FixedSectionNavigation
            v-for="(navigationName, navigationIndex) in navigation"
            :key="navigationIndex"
            :navigationName="navigationName"
            :navigationIndex="navigationIndex"
            />
        </div>
        <div class="flex gap-5 py-5 pr-10">
            <FixedSectionContactInfo
            v-for="(social, index) in socialContact" 
            :key="index"
            :svg="[svgs[index]]"
            :link="social.link"
            :name="social.name" />
        </div>
    </nav>
</template>

<script setup>
const { svgs, socialContact } = allData()
const navigation =  ['About Me', 'Skillset', 'Projects', 'Contact Me']

</script>

<style lang="scss" scoped>

</style>