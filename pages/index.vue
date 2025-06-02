<template>
    <Grid />
    <div class="bg-slate-100 select-none">
        <ClickEffect />
        <Navbar />
        <div v-if="!playGame" :class="[showSkills || showProjects ? 'mt-10' : 'mt-40']" class="select-none transition-all duration-[.8s] ease-out bg-transparent w-fit m-auto relative">
            <div class="space-y-2">
                <p class="text-center text-2xl caveat">HELLO, I AM</p>
                <div class="flex text-center justify-center items-center caveat text-3xl">
                    <p :class="[showSkills || showProjects ? 'text-white' : 'text-slate-700']" class="uppercase hover:text-green-500" v-for="(char, index) in name.split('')" :key="index">{{ char === ' ' ? '\u00A0' : char }}</p>
                </div>
                <p class="text-lg text-center text-blue-500 exo font-bold">A Frontend Website developer</p>
            </div>

            <div class="flex gap-3 exo items-center justify-center transition-all relative duration-[.2s] ease-out text-white text-xl py-4">
                 <div @click="showSection('skills')" :class="[showSkills ? 'text-green-400 ring-[2px] ring-green-500' : '']" class="px-8 h-fit hover:text-green-500 w-fit rounded-md py-2 transition-all duration-[.2s] ease-out bg-neutral-900 hover:ring ring-green-500">SKILLS</div>
                 <div @click="showSection('projects')" :class="[showProjects ? 'text-green-400 ring-[2px] ring-green-500' : '']" class="px-6 hover:text-green-500 md:px-10 py-2 transition-all duration-[.2s] ease-out h-fit w-fit rounded-md bg-neutral-900 hover:ring ring-green-500">PROJECTS</div>
                </div>                
        </div>

        <div v-if="!playGame" class="min-h-[300px] max-w-[500px] w-[90%] m-auto text-white pt-5">
            <Transition name="page">
                <div v-if="showSkills || showProjects">
                    <Transition name="page-drop">
                        <div v-if="pageDrop" class="bg-white/10 backdrop-blur-md shadow-md shadow-blue-800 border-t-[10px] border-t-green-500">
                            <div v-if="skills_ || projects_" class="pt-2">
                                <Skills v-if="showSkills && skills_" />
                                <Projects v-if="showProjects && projects_" />
                            </div>
                        </div>
                    </Transition>
                </div>
            </Transition>
        </div>
    </div>
</template>

<script setup>
const pageDrop = ref(false)
const skills_ = ref(false)
const projects_ = ref(false)
let name = 'Abdulrahman Ahmed'

const gamestore = gameStore()
const {playGame} = storeToRefs(gamestore)

const mainstore = mainStore()
const {showSkills, showProjects} = storeToRefs(mainstore)

const showSection = (arg) => {
    playGame.value = false
    if (arg === 'skills') {
        pageDrop.value = false
        showSkills.value = true
        projects_.value = false
        showProjects.value = false
    } else {
        pageDrop.value = false
        skills_.value = false
        showSkills.value = false
        showProjects.value = true
    }
}

watch([showSkills, showProjects], ([newShowSkills, newShowProjects]) => {
    if (newShowSkills || newShowProjects) {
        setTimeout(() => {
            pageDrop.value = true;
            setTimeout(() => {
                if (newShowSkills) {
                    skills_.value = true
                } 
                if (newShowProjects) {
                    projects_.value = true
                }
            }, 1000);
        }, 100);
    }
})
</script>

<style scoped>
.page-enter-active {
    transition: width 0.5s ease-out 0.5s;
}

.page-drop-enter-active {
    transition: height 0.5s ease-out 0.5s;
}

.page-enter-from {
    width: 0;
}

.page-drop-enter-from {
    height: 0;
}

.page-drop-enter-to {
    height: fit-content;
}

.page-enter-to {
    width: 100%;
}

.page-drop-leave-active {
    transition: height .5s ease-in 0.5s;
}

.page-drop-leave-from {
    height: fit-content;
}

.page-drop-leave-to {
    height: 0;
}
</style>








































