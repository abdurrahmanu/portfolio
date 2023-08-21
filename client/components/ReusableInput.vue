<template>
    <div class="grid gap-1">
        <label class="text-[rgba(255,255,255,0.4)]" :for="id">{{ label }}</label>
        <input 
        class="base-input"
        @input="$emit(value)" 
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
        @apply outline-none bg-transparent text-[rgba(255,255,255,0.4)] py-6 rounded-[6px] w-full px-4 border border-[rgba(255,255,255,0.3)] placeholder:text-[rgba(255,255,255,0.3)]
    }
</style>



