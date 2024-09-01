<template>
  <div class="fixed top-0 bottom-0 h-[100vh] border-r-[1px] z-[9999999] right-0 w-[1px]" :class="[box]"></div>
  <div class="fixed w-[1px] top-0 bottom-0 left-0 h-[100vh] border-l-[1px] z-[9999999]" :class="[box]"></div>
  <div class="fixed h-[1px] bottom-0 left-0 right-0 w-[100vw] border-b-[1px] z-[9999999]" :class="[box]"></div>
  <div class="fixed h-[1px] top-0 left-0 right-0 w-[100vw] border-t-[1px] z-[9999999]" :class="[box]"></div>
  <!-- <div ref="mouseEl"  class="fixed w-2 h-2 bg-red-400 rounded-full z-[999999] translate-x-[-50%] translate-y-[-50%]"></div> -->
  <!-- <div ref="draggableEl" class="fixed z-[999999999999999] hover:bg-green-300 cursor-move" draggable="true">asdfasdfasdf</div> -->
  <div class="selection:bg-transparent exo">
    <Home />
  </div>
</template>

<script setup>
const main = mainStore()
const {scrolledInSection} = storeToRefs(main)
const mouseEl = ref(null)

const box = computed(() => {
  return scrolledInSection.value === 'about' ? 'border-transparent shadow-[0_2px_40px_2px_#14532d]' :
                scrolledInSection.value === 'skills' ? 'border-transparent shadow-[0_2px_40px_2px_#713f12]' :
                  scrolledInSection.value === 'projects' ? 'border-transparent shadow-[0_2px_40px_2px_#7f1d1d]' :
                    scrolledInSection.value === 'contact' ? 'border-transparent shadow-[0_2px_40px_2px_#0c4a6e]' : 
                      ''
})

// onMounted(() => {
//   window.addEventListener('mousemove', event => {
//     if (mouseEl.value instanceof HTMLElement) {
//       mouseEl.value.style.top = event.clientY + 'px'
//       mouseEl.value.style.left = event.clientX + 'px'
//     }
//   })
// })
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
