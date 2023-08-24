<template>
    <div class="dynamic-bio">
        <FixedHeading
        v-if="detectNavigationChange" 
        :fixedHeading="fixedHeading" />

        <div class="flex flex-col gap-[10.6%]">
            <FixedInformation 
            v-if="detectNavigationChange" 
            :fixedInformation="fixedInformation" />

            <div class="nav">
                <NavigationComponent
                @emitCurrentNavigation="toggleCurrentNavigation($event)"
                :activeNavigation="currentNavigationTracker === Object.values(fixedSectionData)[navigationIndex].name"
                v-for="(navigationName, navigationIndex) in navigation"
                :key="navigationIndex"
                :navigationName="navigationName"
                :navigationIndex="navigationIndex"
                />
            </div>
    
            <div class="social-contact">
                <FixedContactnfo
                v-for="(contact, index) in socialContact" 
                :key="index"
                :svg="[svgs[index]]"
                :contact="contact" />
            </div>
        </div>
    </div>
</template>

<script setup>
const { fixedSectionData, svgs } = allData()

const props = defineProps({ currentSection: String })
const emit = defineEmits(['clickNavigation'])
const navigation =  ['About Me', 'Skillset', 'Projects', 'Contact Me']
const socialContact = ['Github', 'Linkedin', 'Download resume']

const currentSection = ref('')
const currentNavigation = ref('about')
const detectNavigationChange = ref(true)
const currentNavigationTracker = ref('')

const toggleCurrentNavigation = (event) => currentNavigation.value = event 

const changeFixedInformation = () => {
    detectNavigationChange.value = false;
    setInterval(() => {
        detectNavigationChange.value = true;
    }, 0);
}

const scrollElementToView = (el) => {
    emit('clickNavigation', true)

    el.scrollIntoView({
        behavior: 'smooth'
    })

    const scrollTimeout = ref(null)
    window.addEventListener('scroll', e => {
        clearTimeout(scrollTimeout.value);
        scrollTimeout.value = setTimeout( () => {
            emit('clickNavigation', false)
        }, 100);
    });
}

onMounted(() => {
    watchEffect(() => {
        currentSection.value = props.currentSection;
    })
    
    watch(currentNavigation, (newValue, oldValue) => {
        let el = document.getElementById(newValue)
        currentNavigationTracker.value = newValue
        changeFixedInformation()
        scrollElementToView(el)
    })

    watch(currentSection, (newValue, oldValue) => {
        currentNavigationTracker.value = newValue
        changeFixedInformation()
    })
})

const fixedHeading = computed(() => {
    if (Object.values(fixedSectionData).filter(nav => nav.name === currentNavigationTracker.value).length) {
        return Object.values(fixedSectionData).filter(nav => nav.name === currentNavigationTracker.value)[0].header
    } else return []
})

const fixedInformation = computed(() => {
    if (Object.values(fixedSectionData).filter(nav => nav.name === currentNavigationTracker.value).length) {        
            return Object.values(fixedSectionData).filter(nav => nav.name === currentNavigationTracker.value)[0].info
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