<template>
  <div class="fixed top-0 bottom-0 h-[100vh] border-r-2 z-[9999999] right-0 w-[1px]" :class="[box]"></div>
  <div class="fixed w-[1px] top-0 bottom-0 left-0 h-[100vh] border-l-2 z-[9999999]" :class="[box]"></div>
  <div class="fixed h-[1px] bottom-0 left-0 right-0 w-[100vw] border-b-2 z-[9999999]" :class="[box]"></div>
  <div class="fixed h-[1px] top-0 left-0 right-0 w-[100vw] border-t-2 z-[9999999]" :class="[box]"></div>
  <div class="selection:bg-transparent exo">
    <Home />
  </div>
</template>

<script setup>
const main = mainStore()
const {scrolledInSection} = storeToRefs(main)

const box = computed(() => {
  return scrolledInSection.value === 'about' ? 'border-green-900 shadow-[0_2px_30px_2px_#14532d]' :
                scrolledInSection.value === 'skills' ? 'border-yellow-900 shadow-[0_2px_30px_2px_#713f12]' :
                  scrolledInSection.value === 'projects' ? 'border-red-900 shadow-[0_2px_30px_2px_#7f1d1d]' :
                    scrolledInSection.value === 'contact' ? 'border-sky-900 shadow-[0_2px_30px_2px_#0c4a6e]' : 
                      ''
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400;1,700&family=Caveat:wght@400..700&family=Exo:ital,wght@0,100..900;1,100..900&family=Itim&family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Pacifico&family=Reddit+Mono:wght@200..900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Shadows+Into+Light&display=swap');

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
