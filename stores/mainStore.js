import { defineStore } from 'pinia';
import { ref } from 'vue';

export const mainStore = defineStore('main', () => {
    const currentSection = ref('about');
    const contactEl = ref(null)

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

    const projects = ref([
        {
            title: 'kiBoard',
            link: 'https://kiboard.netlify.app',
            code: 'github.com/abdurrahmanu/learn-typing',
            info: 'A highly customizable typing app. It was made with the intention to improve your typing skills and most importantly your fluidity and speed',
            img: 'kiboard'
        },
        {
            title: 'Tic Tac Toe',
            link: 'https://myxando.netlify.app',
            code: 'github.com/abdurrahmanu/tic-tac-toe',
            info: 'A simple tic-tac-toe game with nice user experience. I implemented all logic from scratch.',
            img: 'xando'
        },
        {
            title: 'Xpressway Logistics',
            link: 'https://xpressway-logistics.web.app',
            code: 'github.com/abdurrahmanu/dorayii.git',
            info: 'This is a mock transport logistics company website.',
            img: 'xpressway'
        },
        {
            title: 'Airbnb Homepage',
            link: 'https://air-bnb-homepage.netlify.app',
            code: 'github.com/abdurrahmanu/airbnb',
            info: 'Tried recreating airbnb homepage.',
            img: 'airbnb'
        },
        {
            title: 'Loyalty Management Landing page',
            link: 'https://loyalty-mgt.netlify.app',
            code: 'github.com/abdurrahmanu/loyalty-management',
            info: 'A very beautiful UI, I did this as an internship task.',
            img: 'loyalty-mgt'
        },
        // {
        //     title: 'Dictionary',
        //     link: 'http://qamus.netlify.app',
        //     code: 'github.com/abdurrahmanu/qamus',
        //     info: 'This dictionary fetches real time data from an external API.',
        //     img: 'dictionary'
        // },
    ])

    const currentSectionStyle = computed(() => {
        return sectionStyles.value[currentSection.value]
    })

    return {
        projects,
        contactEl,
        sectionStyles,
        currentSection,
        currentSectionStyle
    }
})