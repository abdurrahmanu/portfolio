<template>
    <div class="p-3 px-4">
        <div @mouseover="openNav = !openNav" @mouseleave="openNav = !openNav" @click="openNav = true" class="relative flex gap-6 text-white w-full text-base caveat justify-center uppercase cursor-pointer text-sm">
            <div class="flex gap-3">
                <div v-if="playGame" @click="clearAll()" :class="[playGame ? 'text-white' : '']" class="px-5 hover:text-black hover:bg-white transition-all duration-[.5s] relative h-fit py-1 font-light w-fit rounded-md ring-[2px]">
                    <p>Clear all</p>
                </div>
                <div @click="playGame = !playGame" :class="[playGame ? 'text-white' : '']" class="px-5 hover:text-black hover:bg-white transition-all duration-[.5s] relative h-fit py-1 font-light w-fit rounded-md ring-[2px]">
                    <p>{{ !playGame ? 'Play TIC-TAC-TOE' : 'Back' }}</p>
                </div>
                <div v-if="(showSkills || showProjects) && !playGame" @click="" :class="[playGame ? 'text-white' : '']" class="px-5 hover:text-black hover:bg-white transition-all duration-[.5s] relative h-fit py-1 font-light w-fit rounded-md ring-[2px]">
                    <p>Back</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const gamestore = gameStore()
const {playGame, startGame, gameGrid, gameEnd} = storeToRefs(gamestore)
const {clearAll} = gamestore

const mainstore = mainStore()
const {showSkills, showProjects} = storeToRefs(mainstore)

const openNav = ref(false)
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap');

@keyframes upDown {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
}

.animate {
    animation: upDown 1s infinite;
}
</style>