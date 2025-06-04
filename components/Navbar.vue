<template>
    <div class="p-3 px-4 relative flex justify-between items-center">
        <div v-if="playGame && gameGrid.length" class="flex flex-row text-white gap-3 w-[1px]">
            <p class="flex gap-3">X <span :class="[gameScores['x'] > gameScores['o'] ? 'text-green-600' : '']" class="px-2 caveat font-black text-xl py-[1px] ring-[1px]">{{ gameScores['x'] }}</span> </p>
            <p class="flex gap-3">O <span :class="[gameScores['o'] > gameScores['x'] ? 'text-green-600' : '']" class="px-2 caveat font-black text-xl py-[1px] ring-[1px]">{{ gameScores['o'] }}</span></p>
        </div>
        <div @mouseover="openNav = !openNav" @mouseleave="openNav = !openNav" @click="openNav = true" class="relative flex gap-6 text-white w-full text-base caveat justify-center uppercase w-fit cursor-pointer text-sm w-full pl-7">
            <div class="flex gap-3">
                <div v-if="playGame && gameGrid.length" @click="clearAll()" :class="[playGame ? 'text-white' : '']" class="px-5 hover:text-black hover:bg-white transition-all duration-[.5s] relative h-fit py-1 font-light w-fit rounded-md ring-[2px]">
                    <p>Clear all</p>
                </div>
                <div @click="playGame = !playGame" :class="[playGame ? 'text-white' : '']" class="px-5 hover:text-black hover:bg-white transition-all duration-[.5s] relative h-fit py-1 font-light w-fit rounded-md ring-[2px]">
                    <p>{{ !playGame ? 'Play TIC-TAC-TOE' : 'Back' }}</p>
                </div>
                <div v-if="(showSkills || showProjects) && !playGame" @click="home()" :class="[playGame ? 'text-white' : '']" class="px-5 hover:text-black hover:bg-white transition-all duration-[.5s] relative h-fit py-1 font-light w-fit rounded-md ring-[2px]">
                    <p>Back</p>
                </div>
            </div>
        </div>
        <div v-if="playGame" class="space-x-2 flex">
            <p class="text-white w-5 flex pb-4 font-black hover:text-red-600 justify-center items-center h-5 ring-[1px] ring-slate-600 rounded-full">_</p>
            <p class="text-white w-5 flex font-bold hover:text-green-600 justify-center items-center h-5 ring-[1px] ring-slate-600 rounded-full pb-1">+</p>
        </div>
    </div>
</template>

<script setup>
const gamestore = gameStore()
const {playGame, gameScores, gameGrid} = storeToRefs(gamestore)
const {clearAll} = gamestore

const mainstore = mainStore()
const {showSkills, showProjects} = storeToRefs(mainstore)

const openNav = ref(false)

const home = () => {
    showSkills.value = false
    showProjects.value = false
}
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