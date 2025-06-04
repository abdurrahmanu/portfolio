<template>
    <div>
        <div class="flex px-3 pt-4 gap-4 caveat">
            <div @click="move > 0 ? move-- : move = projects.length - 1" class="arrow">&lt;</div>
            <Project
                :link="projects[currentPage].link"
                :title="projects[currentPage].title"
                :info="projects[currentPage].info"
                :img="projects[currentPage].img" 
            />
            <div @click="move < projects.length - 1 ? move++ : move = 0" class="arrow">&gt;</div>
        </div>

        <div class="pagination flex justify-center text-3xl font-bold text-green-500 items-center mt-5 flex gap-3 pb-2">
            <p>{{ currentPage + 1 }}</p>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { mainStore } from '@/stores/mainStore';
import { storeToRefs } from 'pinia';

const main = mainStore();
const { projects } = storeToRefs(main);
const move = ref(0)

const currentPage = computed(() => {
    return move.value
})
</script>

<style scoped>
.arrow {
    @apply text-3xl cursor-pointer hover:bg-neutral-900 hover:text-green-500 ring-[1px] p-3 rounded-md
    text-3xl cursor-pointer hover:bg-neutral-900 hover:text-green-500 ring-[1px] p-3 rounded-md font-bold h-fit
}
</style>