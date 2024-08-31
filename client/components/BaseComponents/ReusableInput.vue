<template>
    <div class="grid gap-1 text-sm z-[9999]">
        <label class="text-blue-300 opacity-50" :for="id">{{ label }}</label>
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
        @apply outline-none py-1 rounded-[3px] w-full px-2 bg-transparent ring-[1px] ring-blue-900 placeholder:text-neutral-600
    }
</style>















