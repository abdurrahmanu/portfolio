<template>
    <div class="scroller">
        <div @click="useDirection">{{ scrollerDirection() }}</div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['scrollerDirection'])
const scrollPosition = ref(window.scrollY)
const windowHeight = ref(window.innerHeight)

window.addEventListener('scroll', event => {
    scrollPosition.value = window.scrollY
    emit('scrollerDirection', scrollerDirection())
})

window.addEventListener('resize', event => {
    windowHeight.value = window.innerHeight
    emit('scrollerDirection', scrollerDirection())
})

const scrollerDirection = () => {
    const halfScreenHeight = Math.floor(windowHeight.value / 2)
    if (halfScreenHeight < scrollPosition.value) return 'T'
    return 'B'
}

const useDirection = () => {
    const height = document.documentElement.scrollHeight
    if (scrollerDirection() === 'T')  window.scrollTo(0,0)
    else if (scrollerDirection() === 'B')  window.scrollTo(0, height)
}

</script>

<style scoped>
.scroller {
    @apply shadow shadow-black rounded-full bg-neutral-700 hover:bg-neutral-900 font-sans h-6 w-6 text-xs absolute right-0 flex items-center  justify-center p-2
}

.now {
    background-color:  #cddfdf;
}
</style>

