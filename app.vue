<template>
  <div class="fixed top-0 bottom-0 h-[100vh] border-r-[1px] z-[9999999] right-0 w-[1px]" :class="[box]"></div>
  <div class="fixed w-[1px] top-0 bottom-0 left-0 h-[100vh] border-l-[1px] z-[9999999]" :class="[box]"></div>
  <div class="fixed h-[1px] bottom-0 left-0 right-0 w-[100vw] border-b-[1px] z-[9999999]" :class="[box]"></div>
  <div class="fixed h-[1px] top-0 left-0 right-0 w-[100vw] border-t-[1px] z-[9999999]" :class="[box]"></div>
  <div ref="scroll" :class="[currentSection === 'about' ? 'bg-green-700 after:shadow-green-500' : currentSection === 'skills' ? 'bg-yellow-700 after:shadow-yellow-500' : currentSection === 'projects' ? 'bg-red-700 after:shadow-red-500' : 'bg-sky-900 after:shadow-sky-900']" class="h-[4px] fixed top-0 z-[9999999] max-w-[1230px] left-[50%] translate-x-[-50%]"></div>
  <div class="selection:bg-transparent exo bg-[#121212] app">
    <Home />
  </div>
</template>

<script setup>
const scroll = ref(null)
const main = mainStore()
const {currentSection} = storeToRefs(main)

const scrollbar = useScrollBar()
const {scrollPercent} = storeToRefs(scrollbar)

onMounted(() => {
    watchEffect(() => {
        scroll.value.style.width = `${scrollPercent.value}%`
    })
})

const box = computed(() => {
  return currentSection.value === 'about' ? 'border-transparent shadow-[0_2px_40px_2px_#14532d]' :
                currentSection.value === 'skills' ? 'border-transparent shadow-[0_2px_40px_2px_#713f12]' :
                  currentSection.value === 'projects' ? 'border-transparent shadow-[0_2px_40px_2px_#7f1d1d]' :
                    currentSection.value === 'contact' ? 'border-transparent shadow-[0_2px_40px_2px_#0c4a6e]' : 
                      ''
})

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
