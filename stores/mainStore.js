import { defineStore } from 'pinia';
import { ref } from 'vue';

export const mainStore = defineStore('main', () => {
    const currentSection = ref('about');

    return {
        currentSection,
    }
})