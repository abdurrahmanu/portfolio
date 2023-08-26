<template>
    <div class="footer-container">
        <div class="pt-[115px]">
            <div class="footer ">
                <div class="flex flex-col gap-6">
                    <div class="leading-[26.91px]"> 
                        Designed by <span>{{ Fullname }}</span>
                    </div>
                    <div>
                        <span class="p-1">Mail {{ name }}</span>
                        <span class="p-1">| call</span>
                        <span>{{ name }}:</span>
                        <span>{{ phoneNumber }}</span>
                    </div>
                </div>
                <div>copyright {{ new Date().getFullYear() }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
const Fullname = ref('John Niyon')
const name = ref('John')
const phoneNumber = ref(' +234453453445')
</script>

<style scoped>
    .footer {
        @apply border-t border-white flex m-auto justify-between items-center border-opacity-[0.1] pt-[33px] font-normal relative text-[rgba(255,255,255,0.70)] custom-screen-3xl:text-base gap-2 custom-screen-2xl:text-[14px] custom-screen-xl:text-[12px] custom-screen-lg:text-[10px] text-[9px] w-full
    }

    .footer-container {
        @apply min-w-fit max-w-[1228px] mx-auto
    }
</style>