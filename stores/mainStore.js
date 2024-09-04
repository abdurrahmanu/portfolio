import { defineStore } from 'pinia';
import { ref } from 'vue';

export const mainStore = defineStore('main', () => {
    const currentSection = ref('about');
    const tempNav = ref(null)

    const sectionStyles = ref({
        'about' : {
            'headingText': '#166534',
            'scrollRange': '#166534',
            'contactMe': '#16a34a',
            'borderBg': '#166534',
            'box': '0 7px 40px 7px #14532d',
            'navText': '#22c55e',
            'navShadow': '0 2px 30px 2px #14532d',
            'hoverText': '#86efac',
            'hoverShadow': '0 2px 14px 2px #14532d',
        },
        'skills': {
            'headingText': '#854d0e',
            'scrollRange': '#854d0e',
            'contactMe': '#ca8a04',
            'borderBg': '#854d0e',
            'box': '0 7px 40px 7px #713f12',
            'navText': '#eab308',
            'navShadow': '0 2px 30px 2px #713f12',
            'hoverText': '#fde047',
            'hoverShadow': '0 2px 14px 2px #713f12',
        },
        'projects': {
            'headingText': '#991b1b',
            'scrollRange': '#991b1b',
            'contactMe': '#dc2626',
            'borderBg': '#991b1b',
            'box': '0 7px 40px 7px #7f1d1d',
            'navText': '#ef4444',
            'navShadow': '0 2px 30px 2px #7f1d1d',
            'hoverText': '#fca5a5',
            'hoverShadow': '0 2px 14px 2px #7f1d1d',
        },
        'contact': {
            'headingText': '#075985',
            'scrollRange': '#075985',
            'contactMe': '#0284c7',
            'borderBg': '#075985',
            'box': '0 7px 40px 7px #0c4a6e',
            'navText': '#0ea5e9',
            'navShadow': '0 2px 30px 2px #0c4a6e',
            'hoverText': '#7dd3fc',
            'hoverShadow': '0 2px 14px 2px #0c4a6e',
        }
    })

    const currentSectionStyle = computed(() => {
        return sectionStyles.value[currentSection.value]
    })

    return {
        tempNav,
        sectionStyles,
        currentSection,
        currentSectionStyle
    }
})