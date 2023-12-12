<template>
    <div class="fixed-section">
        <FixedSectionHeading
        v-if="detectNavigationChange" 
        :fixedHeading="fixedHeading" />

        <div class="flex flex-col gap-[10.6%]">
            <FixedSectionInformation 
            v-if="detectNavigationChange" 
            :fixedInformation="fixedInformation" />

            <div class="py-[8.3%]">
                <div ref="fixedNav" class="nav">
                    <FixedSectionNavigation
                    v-for="(navigationName, navigationIndex) in navigation"
                    :key="navigationIndex"
                    :navigationName="navigationName"
                    :navigationIndex="navigationIndex"
                    :activeNavigation="currentNavigation === Object.values(fixedSectionData)[navigationIndex].name"
                    @emitClickedNavigation="clickedSection = $event" />
                </div>
            </div>

            <div class="social-contact">
                <FixedSectionContactInfo
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

const fixedNav = ref(null)
const props = defineProps({ scrolledInSection: String })
const emit = defineEmits(['clickNavigation', 'fixedNavInViewPort'])
const navigation =  ['About Me', 'Skillset', 'Projects', 'Contact Me']
const scrolledInSection = ref('')
const clickedSection = ref('about')
const currentNavigation = ref('about')
const detectNavigationChange = ref(true)

const changeFixedHeadingAndInformation = () => {
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
        scrolledInSection.value = props.scrolledInSection;
    })

    //SCROLL IN ANOTHER SECTION
    watch(scrolledInSection, (newValue, oldValue) => {
        currentNavigation.value = newValue
        changeFixedHeadingAndInformation()
    })
    
    //NAVIGATION CLICK FOR ANOTHER SECTION
    watch(clickedSection, (newValue, oldValue) => {
        let el = document.getElementById(newValue)
        currentNavigation.value = newValue
        changeFixedHeadingAndInformation()
        scrollElementToView(el)
    })

    window.addEventListener('resize', event => {
        if (!isInViewport(fixedNav.value)) {
            emit('fixedNavInViewPort', false)
        } else emit('fixedNavInViewPort', true)
    })
})

const fixedHeading = computed(() => {
    if (Object.values(fixedSectionData).filter(nav => nav.name === currentNavigation.value).length) {
        return Object.values(fixedSectionData).filter(nav => nav.name === currentNavigation.value)[0].header
    } else []
})

const fixedInformation = computed(() => {
    if (Object.values(fixedSectionData).filter(nav => nav.name === currentNavigation.value).length) {        
            return Object.values(fixedSectionData).filter(nav => nav.name === currentNavigation.value)[0].info
    } else ''
})

function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    var html = document.documentElement;

    return rect.top >= html.clientHeight || rect.top >= window.innerHeight
    // return (
    //     rect.top >= 0 &&
    //     rect.left >= 0 &&
    //     rect.bottom <= (window.innerHeight || html.clientHeight) &&
    //     rect.right <= (window.innerWidth || html.clientWidth)
    // );
}

</script>

<style scoped>
    .fixed-section {
        @apply sticky top-0 left-0 sm:w-[46.18%] hidden sm:flex flex-col gap-[3.3%] text-white h-fit pb-[40px]
    }

    .nav {
        @apply transition-all duration-75 font-medium uppercase gap-4 flex flex-col justify-start
    }

    .social-contact {
        @apply max-w-[391px]  font-normal text-[11px] grid items-center 
        custom-screen-sm:gap-[44px] custom-screen-md:text-[14px] gap-2 custom-screen-sm:flex
    }
    /* custom-screen-sm:max-w-fit */

    .typography-info, .typography-nav {
        @apply custom-screen-3xl:text-base gap-2 custom-screen-2xl:text-[14px] custom-screen-xl:text-[12px] custom-screen-lg:text-[10px] text-[9px] 
    }custom-screen-sm

    .typography-social {
        @apply custom-screen-2xl:text-[14px] custom-screen-xl:text-[12px] custom-screen-lg:text-[10px] custom-screen-sm:text-[9px] 
    }
</style>










