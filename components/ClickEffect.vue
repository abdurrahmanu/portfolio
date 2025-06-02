<template>
    <div ref="effectElement" class="transition-all hidden bg-green-400 z-[1] duration-100 w-[10px] rounded-full fixed left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] h-[10px]"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
const effectElement = ref(null)

onMounted(() => {    
    window.addEventListener('click', event => {
        effectElement.value.style.display = 'block'
        effectElement.value.classList.add('ripple')
        if (effectElement.value instanceof HTMLElement) {
            effectElement.value.style.top = event.clientY + 'px'
            effectElement.value.style.left = event.clientX + 'px'
        }
        setTimeout(() => {
            effectElement.value.style.display = 'none'
        }, 550);
    })
})
</script>

<style scoped>
    @keyframes ripple {
        0% {
            transform: scale(1);
            opacity: 0.8;
        }
        100% {
            transform: scale(5);
            opacity: 0;
        }
    }

    .ripple {
        animation: ripple 0.5s ease-out forwards;
    }
</style>
