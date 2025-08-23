import { defineStore } from 'pinia';
import { ref } from 'vue';

export const mainStore = defineStore('main', () => {
    const showSkills = ref(false)
    const showProjects = ref(false)

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
            title: 'Airbnb Homepage',
            link: 'https://air-bnb-homepage.netlify.app',
            code: 'github.com/abdurrahmanu/airbnb',
            info: 'Tried recreating airbnb homepage.',
            img: 'airbnb'
        },
        {
            title: 'Landing page',
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

    const skillSet = [
        {
            svg: 'nuxt-c',
            darkSvg: 'nuxt-b',
            name: 'NuxtJS'
        },
        {
            svg: 'vue-c',
            darkSvg: 'vue-b',
            name: 'VueJS'
        },
        {
            svg: 'js-c',
            darkSvg: 'js-b',
            name: 'JavaScript'
        },
        {
            svg: 'tailwindcss-c',
            darkSvg: 'tailwindcss-b',
            name: 'TailwindCSS'
        },
        {
            svg: 'nodejs-c',
            darkSvg: 'nodejs-b',
            name: 'NodeJS'
        },
        {
            svg: 'github-c',
            darkSvg: 'github-b',
            name: 'Github'
        },
        {
            svg: 'firebase-c',
            darkSvg: 'firebase-b',
            name: 'FireStore'
        }
]

    return {
        skillSet,
        projects,
        showSkills,
        showProjects,
    }
})