<template>
  <div class="animate-pulse border-transparent fixed top-0 bottom-0 h-[100vh] border-r-[1px] z-[9999999] right-0 w-[1px]" :style="{'boxShadow' : currentSectionStyle['box']}"></div>
  <div class="animate-pulse border-transparent fixed w-[1px] top-0 bottom-0 left-0 h-[100vh] border-l-[1px] z-[9999999]" :style="{'boxShadow' : currentSectionStyle['box']}"></div>
  <div class="animate-pulse border-transparent fixed h-[1px] bottom-0 left-0 right-0 w-[100vw] border-b-[1px] z-[9999999]" :style="{'boxShadow' : currentSectionStyle['box']}"></div>
  <div class="animate-pulse border-transparent fixed h-[1px] top-0 left-0 right-0 w-[100vw] border-t-[1px] z-[9999999]" :style="{'boxShadow' : currentSectionStyle['box']}"></div>
  <div :style="{'width' : scrollPercent + '%', 'background' : currentSectionStyle['scrollRange']}" class="h-[4px] fixed top-0 z-[9999999] max-w-[1230px] left-[50%] translate-x-[-50%]"></div>
  <div class="selection:bg-transparent exo bg-[#121212] app overflow-x-clip">
    <Home />
  </div>
</template>

<script setup>
const main = mainStore()
const {currentSection, currentSectionStyle} = storeToRefs(main)

const scrollbar = scrollStore()
const {scrollPercent} = storeToRefs(scrollbar)

window.addEventListener('resize', event => document.getElementById(currentSection.value).scrollIntoView())

const track = computed(() => {
    return currentSection.value === 'about' ?
        'green' : currentSection.value === 'skills' ?
            'yellow' : currentSection.value === 'projects' ?
                'red' : 
                    'blue'
})

const thumb = computed(() => {
    return currentSection.value === 'about' ?
        'green' : currentSection.value === 'skills' ?
            'yellow' : currentSection.value === 'projects' ?
                'red' : 
                    'blue'
})

const thumbHover = computed(() => {
    return currentSection.value === 'about' ?
        'green' : currentSection.value === 'skills' ?
            'yellow' : currentSection.value === 'projects' ?
                'red' : 
                    'blue'
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400;1,700&family=Caveat:wght@400..700&family=Exo:ital,wght@0,100..900;1,100..900&family=Itim&family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Pacifico&family=Reddit+Mono:wght@200..900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Shadows+Into+Light&display=swap');

@supports (scrollbar-color: auto) {
  .scrollbar-color {
    scrollbar-color:  #2a2731;
    scrollbar-width: 5px;
  }
}

::-webkit-scrollbar {
    width: 5px;
}

::-webkit-scrollbar-track {
    background: #2a2731;
}

::-webkit-scrollbar-thumb {
    background: #9b9a9a;
}

::-webkit-scrollbar-thumb:hover {
    background: #faf8f8;
}

.caveat {
  font-family: "Caveat", cursive;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
}

.exo {
  font-family: 'Exo', monospace;
}

.redit-font {
  font-family: 'Reddit Mono', sans-serif
}

.pacifico {
  font-family: 'Pacifico', cursive;
  font-weight: 400;
  font-style: normal;
}
</style>
