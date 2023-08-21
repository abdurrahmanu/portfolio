<template>
    <div 
    v-motion
    :initial="{ opacity: 0, X: 500}"
    :enter="{ opacity: 1, x: 0, scale: 1 }"
    :delay="300 * index"
    class="project">

        <div class="h-[62.7%] bg-black rounded-t-[17px]">
            <img class="w-full max-h-[367px] relative" src="../public/projectBackground.png" alt="">
        </div>

        <div class="h-full px-[17.5px] relative flex flex-col">
                <div class="text-[18px] font-bold custom-screen-xl:text-[32px] custom-screen-md:text-[24px]">PROJECT TITLE</div>

                <div class="text-[#7D7D7D] pt-[2.74%] text-[10px] custom-screen-lg:text-[16px] font-medium leading-[20.48px]">Lörem ipsum vara på tårna derade därade. Stenoll guldsot nekodade. Plabel nenar jån tasigförsamhet gubelt plade. Faledes nivinade vyv, förutom demicentrism i eulor fäbiktiga förlåtandeintervall. Kuv kövis. Infraktigt trir, jinas att geor utvigning, blockchain. Soheten</div>

                <div class="flex justify-between pt-[2.74%]">
                    <div class="bg-[rgba(240,219,79,0.10)] text-[10px] custom-screen-lg:p-2 max-w-[500px] custom-screen-lg:text-base font-normal text-[#F0DB4F] p-1 rounded-full w-fit">
                        <div>web and mobile development</div>
                    </div>
                    <div class="opacity-[0.6] flex gap-[17px] text-[10px] custom-screen-lg:text-[16px] items-center font-normal">view project <SvgComponentsArrowSvg/> </div>
                </div>
        </div>

    </div>
</template>

<script setup>
const props = defineProps({
    index: Number,
    project: Object,
})

</script>

<style scoped>
    .project {
        @apply h-fit max-h-fit pb-[8.1%] gap-[5.8%] border-[rgba(255,255,255,0.10)]
 border-[1px] flex flex-col rounded-[17px]
    }


    
</style>