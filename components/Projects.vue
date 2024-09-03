<template>
    <div>
        <div id="projects" class="flex flex-col pt-[75px] gap-9 intersect" :class="[currentSection !== 'projects' || scrollPercent === 100 ? 'opacity-5 blur-[2px]' : '']">
            <Project
            v-for="(project, index) in projects"
            :key="index"
            :index="index"
            :link="project.link"
            :title="project.title"
            :info="project.info"
            :img="project.img" />
        </div>
    </div>
</template>

<script setup>
const main = mainStore()
const {currentSection} = storeToRefs(main)

const scrollbar = useScrollBar()
const {scrollPercent} = storeToRefs(scrollbar)

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
</script>