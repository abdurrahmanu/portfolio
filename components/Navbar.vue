<template>
    <div class="nav font-sans z-[9] p-5 sm:py-4 shadow-black">
        <div class="relative flex items-center justify-between w-full max-w-[900px] m-auto rounded-full shadow-black">
            <div  class="flex items-center gap-2 px-2 py-1 rounded-full shadow-sm bg-neutral-900 shadow-black">
                <div class="px-3 py-1 font-bold uppercase text-green-400 sm:text-sm caveat">Dorayi</div>
            </div>
            <div class="relative rounded-full shadow-sm bg-neutral-900 shadow-black">
                <div class="px-5 py-3">                    
                    <div class="py-[4px] w-8 border border-green-400"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const toggleNav = ref(false);
const menuElement = ref(null)
</script>

<style scoped>
</style>
