<template>
    <div class="dynamic-bio">
        <BioHeading
        v-if="detectChange" 
        :bigHeading="bigHeading" />

        <div class="flex flex-col gap-[10.6%]">
            <BioInformation 
            v-if="detectChange" 
            :pageInformation="pageInformation" />

            <div class="nav">
                <NavigationComponent
                @currentNav="currentNavigation = $event"
                :active="currentNavigation === Object.values(dynamicComponentData)[index].name"
                v-for="(item, index) in navigation"
                :key="index"
                :item="item"
                :index="index"
                />
            </div>
    
            <div class="social-contact">
                <BioSocial
                v-for="(contact, index) in socialContact" 
                :key="index"
                :svg="[svgs[index]]"
                :contact="contact" />
            </div>
        </div>
    </div>
</template>

<script setup>
const { dynamicComponentData, svgs } = allData()

const currentNavigation = ref('AboutMe')
const detectChange = ref(true)
const navigation =  ['About Me', 'Skillset', 'Projects', 'Contact Me']
const socialContact = ['Github', 'Linkedin', 'Download resume']

const scrollElement = (el) => {
    el.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
} 



onMounted(() => {
    watchEffect(() => {
        if (currentNavigation.value) {
            detectChange.value = false
            if (currentNavigation.value === 'AboutMe') {
                let el = document.getElementById('about')
                scrollElement(el)
            } else if (currentNavigation.value === 'AllSkillset') {
                let el = document.getElementById('skills')
                scrollElement(el)
            } else if (currentNavigation.value === 'ProjectsList') {
                let el = document.getElementById('projects')
                scrollElement(el)
            } else if (currentNavigation.value === 'ContactMe') {
                let el = document.getElementById('contact')
                scrollElement(el)
            }
            setInterval(() => {
                detectChange.value = true
            }, 0);
        }
    })
})

const bigHeading = computed(() => {
    if (Object.values(dynamicComponentData).filter(nav => nav.name === currentNavigation.value).length) {
        return Object.values(dynamicComponentData).filter(nav => nav.name === currentNavigation.value)[0].header
    } else return []
})

const pageInformation = computed(() => {
    if (Object.values(dynamicComponentData).filter(nav => nav.name === currentNavigation.value).length) {        
            return Object.values(dynamicComponentData).filter(nav => nav.name === currentNavigation.value)[0].info
    } else return ''
})

</script>

<style scoped>
    .dynamic-bio {
        @apply sticky top-0 left-0 w-[46.18%] flex flex-col gap-[3.3%] text-white max-h-screen bottom-0 pt-[60px] pb-[530px] h-fit
    }

    .nav {
        @apply py-[8.3%] transition-all typography-info duration-75 font-medium uppercase gap-4 flex flex-col justify-start
    }

    .social-contact {
        @apply max-w-[391px] custom-screen-sm:max-w-fit custom-screen-sm:flex typography-info font-normal text-[14px] grid items-center custom-screen-sm:gap-[44px]
    }

    .typography-info, .typography-nav {
        @apply custom-screen-3xl:text-base gap-2 custom-screen-2xl:text-[14px] custom-screen-xl:text-[12px] custom-screen-lg:text-[10px] text-[9px] 
    }

    .typography-social {
        @apply custom-screen-2xl:text-[14px] custom-screen-xl:text-[12px] custom-screen-lg:text-[10px] custom-screen-sm:text-[9px] 
    }
</style>