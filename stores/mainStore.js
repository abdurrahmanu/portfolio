import { defineStore } from 'pinia';
import { ref } from 'vue';

export const mainStore = defineStore('main', () => {
    const scrolledInSection = ref('about');

    return {
        scrolledInSection,
    }
})