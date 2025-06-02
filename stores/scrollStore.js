import { defineStore } from 'pinia';
import { ref } from 'vue';

export const scrollStore = defineStore('scrollStore', () => {
    const scrollPercent = ref(0)
    const scrollEvent = () =>  scrollPercent.value = (scrollY / (document.body.scrollHeight - window.innerHeight) ) * 100
    window.addEventListener('scroll', scrollEvent);
    
    return {
        scrollPercent,
        scrollEvent
    }
})



// window.addEventListener('mousemove', event => {
//   let clientX = event.clientX
//   let clientY = event.clientY

//   if (previousX.value > 0) {
//       if (clientX > previousX.value) {
//           if (Math.abs(clientX - previousX.value) > 20) {
//               right.value = true
//               left.value = false
//               animateClass.value = 'right'
//           } else {
//               right.value = false
//               left.value = false
//           }
//       } else {
//           if (Math.abs(clientX - previousX.value) > 20) {
//               right.value = false
//               left.value = true
//               animateClass.value = 'left'
//           } else {
//               right.value = false
//               left.value = false
//           }
//       }
//   }

//   if (previousY.value > 0) {
//       if (clientY > previousY.value) {
//           if (Math.abs(clientY - previousY.value) > 20) {
//               bottom.value = true
//               top.value = false
//               animateClass.value = 'bottom'
//           } else {
//               bottom.value = false
//               top.value = false
//           }
//       } else {
//           if (Math.abs(clientY - previousY.value) > 20) {
//               bottom.value = false
//               top.value = true
//               animateClass.value = 'top'
//           } else {
//               bottom.value = false
//               top.value = false
//           }
//       }
//   }

//   if (top.value && right.value) {
//       animateClass.value = 's-e-diagonal'        
//   }

//   if (top.value && left.value) {
//       animateClass.value = 'n-w-diagonal'
//   }

//   if (bottom.value && left.value) {
//       animateClass.value = 'n-w-diagonal'
//   }

//   if (bottom.value && right.value) {
//       animateClass.value = 's-e-diagonal'
//   }

//   setTimeout(() => {        
//       previousX.value = event.clientX
//       previousY.value = event.clientY
//   }, 500);

//   setTimeout(() => {
//       animateClass.value = ''
//   }, 1000);
// })

// const animateClass = ref('')
// const previousX = ref(0)
// const previousY = ref(0)
// const left = ref(false)
// const right = ref(false)
// const top = ref(false)
// const bottom = ref(false)

{/* <style scoped>
.container {
    perspective: 100px;
}

.bottom {
    transition: all 1s;
    transform: rotateX(20deg);
    scale: .9;
}

.top {
    transition: all 1s;
    transform: rotateX(-20deg);
    scale: .9;
}

.right {
    transition: all 1s;
    transform: rotateY(-20deg);
    scale: .9;
}

.left {
    transition: all 1s;
    transform: rotateY(20deg);
    scale: .9;
}

.s-e-diagonal {
    transition: all 1s;
    transform: rotateX(40deg);
    transform: skew(20deg);
    scale: .9;
    rotate: 10deg;
}

.n-w-diagonal {
    transition: all 1s;
    transform: skew(-20deg);
    scale: .9;
    rotate: -10deg;
}
</style> */}