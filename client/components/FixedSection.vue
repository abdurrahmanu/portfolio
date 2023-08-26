<template>
    <div class="fixed-section">
        <FixedHeading
        v-if="detectNavigationChange" 
        :fixedHeading="fixedHeading" />

        <div class="flex flex-col gap-[10.6%]">
            <FixedInformation 
            v-if="detectNavigationChange" 
            :fixedInformation="fixedInformation" />

            <div class="nav">
                <NavigationComponent
                v-for="(navigationName, navigationIndex) in navigation"
                :key="navigationIndex"
                :navigationName="navigationName"
                :navigationIndex="navigationIndex"
                :activeNavigation="currentNavigationTracker === Object.values(fixedSectionData)[navigationIndex].name"
                @emitCurrentNavigation="toggleCurrentNavigation($event)"
                />
            </div>
    
            <div class="social-contact">
                <FixedContactInfo
                v-for="(social, index) in socialContact" 
                :key="index"
                :svg="[svgs[index]]"
                :link="social.link"
                :name="social.name" />
            </div>
        </div>
    </div>
</template>

<script setup>
const { fixedSectionData, svgs, socialContact } = allData()

const props = defineProps({ currentSection: String })
const emit = defineEmits(['clickNavigation'])
const navigation =  ['About Me', 'Skillset', 'Projects', 'Contact Me']

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
    el.scrollIntoView()
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
    .fixed-section {
        @apply sticky top-0 left-0 w-[46.18%] flex flex-col gap-[3.3%] text-white pt-[60px] h-fit pb-[40px]
    }

    .nav {
        @apply py-[8.3%] transition-all duration-75 font-medium uppercase gap-4 flex flex-col justify-start
    }

    .social-contact {
        @apply max-w-[391px] custom-screen-sm:max-w-fit custom-screen-sm:flex font-normal text-[11px] grid items-center custom-screen-sm:gap-[44px] custom-screen-md:text-[14px]
    }

    .typography-info, .typography-nav {
        @apply custom-screen-3xl:text-base gap-2 custom-screen-2xl:text-[14px] custom-screen-xl:text-[12px] custom-screen-lg:text-[10px] text-[9px] 
    }

    .typography-social {
        @apply custom-screen-2xl:text-[14px] custom-screen-xl:text-[12px] custom-screen-lg:text-[10px] custom-screen-sm:text-[9px] 
    }
</style>










