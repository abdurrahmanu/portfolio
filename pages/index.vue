<template>
  <div class="min-h-[100dvh]">
    <Navbar />
    <div class="flex text-center justify-center items-center exo text-4xl font-bold">
        <p class="uppercase hover:text-green-500" v-for="(char, index) in name.split('')" :key="index">{{ char === ' ' ? '\u00A0' : char }}</p>
    </div>

    <div class="py-20 m-auto text-center text-xl font-medium">
        <p>Hello, I'm Abdulrahman</p>
        <p>Frontend Developer based on Earth</p>
    </div>

    <div class="flex justify-center items-center mt-4">
        <NuxtLink to="https://facebook.com" target="_blank" class="mx-2">
            <i class="fab fa-facebook"></i>
        </NuxtLink>
        <NuxtLink to="https://github.com" target="_blank" class="mx-2">
            <i class="fab fa-github"></i>
        </NuxtLink>
        <NuxtLink to="https://linkedin.com" target="_blank" class="mx-2">
            <i class="fab fa-linkedin"></i>
        </NuxtLink>
        <NuxtLink to="mailto:example@mail.com" class="mx-2">
            <i class="fas fa-envelope"></i>
        </NuxtLink>
    </div>

    <Projects />
    <Skills />
  </div>
</template>

<script setup lang="ts">
let name = 'Ahmed Abdulrahman'
</script>
