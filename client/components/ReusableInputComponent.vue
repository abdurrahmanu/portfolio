<template>
    <div class="grid gap-1">
        <label class="text-[rgba(255,255,255,0.4)]" :for="id">{{ label }}</label>
        <input 
        class="base-input"
        @input="$emit('modelValue', value)" 
        v-model="value" 
        type="text" 
        :id="id" 
        :placeholder="placeholder">
    </div>
</template>

<script setup>
const value = ref('')

const props = defineProps({
    id: String,
    label: String,
    placeholder: String,
})

</script>

<style scoped>
    .base-input {
        @apply outline-none py-2 text-[10px] custom-screen-md:py-4 custom-screen-md:text-[14px] custom-screen-2xl:py-6 custom-screen-2xl:text-base bg-transparent text-[rgba(255,255,255,0.4)] rounded-[6px] w-full px-4 border border-[rgba(255,255,255,0.3)] placeholder:text-[rgba(255,255,255,0.3)]
    }
</style>



