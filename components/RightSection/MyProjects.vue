<template>
    <div>
        <div id="projects" class="flex flex-col pt-16 gap-9 intersect" :class="[scrolledInSection !== 'projects' ? 'opacity-5 blur-[2px]' : '']">
            <BaseComponentsProject
            v-for="(project, index) in projects"
            :key="index"
            :index="index"
            :project="project" />
        </div>
    </div>
</template>

<script setup>
const main = mainStore()
const {scrolledInSection} = storeToRefs(main)

const projects = ref([
    {
        title: 'kiBoard',
        link: 'http://dorayi-typing.netlify.app/',
        code: 'https://github.com/abdurrahmanu/learn-typing',
        info: 'A highly customizable typing app. It was made with the intention to improve your typing skills and most importantly your fluidity and speed',
        img: ''
    },
    {
        title: 'Tic Tac Toe',
        link: 'http://myxando.netlify.app',
        code: 'https://github.com/abdurrahmanu/tic-tac-toe',
        info: 'A simple tic-tac-toe game with nice user experience. I implemented all logic from scratch.',
        img: ''
    },
    {
        title: 'Xpressway Logistics',
        link: 'https://xpressway-logistics.web.app',
        code: 'https://github.com/abdurrahmanu/dorayii.git',
        info: 'This is a mock transport logistics company website.',
        img: ''
    },
    {
        title: 'Airbnb Homepage',
        link: 'https://air-bnb-homepage.netlify.app',
        code: 'https://github.com/abdurrahmanu/airbnb',
        info: 'Tried recreating airbnb homepage.',
        img: ''
    },
    {
        title: 'Loyalty Management Landing page',
        link: 'http://loyalty-mgt.netlify.app',
        code: 'https://github.com/abdurrahmanu/loyalty-management',
        info: 'A very beautiful UI, I did this as an internship task.',
        img: ''
    },
    {
        title: 'Dictionary',
        link: 'http://qamus.netlify.app',
        code: 'https://github.com/abdurrahmanu/qamus',
        info: 'This dictionary fetches real time data from an external API.',
        img: ''
    },
])
</script>