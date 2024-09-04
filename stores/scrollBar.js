import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useScrollBar = defineStore('scroll', () => {
    const scrollPercent = ref(0)
    
    const scrollEvent = () => {
        scrollPercent.value = (scrollY / (document.body.scrollHeight - window.innerHeight) ) * 100
    }

    window.addEventListener('scroll', () => {
        scrollEvent()
});

    return {
        scrollPercent,
        scrollEvent
    }
})
