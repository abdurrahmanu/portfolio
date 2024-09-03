<template>
        <div class="text-sm pb-[50px] z-[3] space-y-3 pt-12" :class="[currentSection !== 'contact' && scrollPercent !== 100 ? 'opacity-5 blur-[2px]' : '', currentSection === 'projects' && scrollPercent === 10 ? 'opacity-100 blur-0' : '']">
            <div id="contact" class="intersect bg-[#121212] z-[999]">
                <form @submit.prevent class="grid gap-6 z-[3]">
                    <div class="grid gap-1 text-sm z-[9999]">
                        <label class="text-blue-300 opacity-50" for="name">{{ input.label }}</label>
                        <input 
                        class="base-input"
                        v-model="input.value" 
                        type="text" 
                        id="name"
                        :placeholder="input.placeholder">
                    </div>
                    <div class="grid gap-1 z-[3]">
                        <label for="message" class="text-blue-300 opacity-50">Enter message</label>
                        <textarea v-model="message" class="text-input ring-[1px]  placeholder:text-neutral-600 ring-blue-900" name="" placeholder="Type your message" id="message" cols="30" rows="10"></textarea>
                    </div>
                    <div class="pt-3 text-center z-[3]">
                        <button @click.prevent="handleSubmit" class="form-button">SEND</button>
                    </div>
                </form>
            </div>
            <div class="p-2 rounded-md ring-[1px] ring-blue-900 py-5 text-center space-y-2 text-[11px] sm:text-sm">
                <p class="hover:text-blue-400 hover:underline hover:underline-offset-[1px] break-words">ahmadabdulrahman103@gmail.com</p>
                <p>Designed by Ahmed Abdulrahman</p>
                <p>Copyright 2024</p>
            </div>
        </div>
</template>

<script setup>
const main = mainStore()
const {currentSection} = storeToRefs(main)

const scrollbar = useScrollBar()
const {scrollPercent} = storeToRefs(scrollbar)

const input = ref({
        label: 'Full name',
        id: 'name',
        placeholder: 'Enter full name',
        value: ""
})

const message = ref('')

const handleSubmit = () => {
    if (!input.value.value.length) {
        input.value.placeholder = 'Field cannot be empty' 
    }
}
</script>

<style scoped>
    .form-button {
        @apply w-full border-t border-white border-opacity-[0.1] shadow-md active:bg-blue-700 active:text-black text-center bg-neutral-900 rounded-md py-2 ring-[1px] ring-blue-900 hover:bg-blue-500 hover:text-black
    }
    
    .text-input {
        @apply h-[170px] py-2 text-[hsla(0,0%,100%,0)] rounded-md px-4 w-full outline-none text-neutral-700 bg-transparent
    }

    .base-input {
        @apply outline-none py-1 rounded-[3px] w-full px-2 bg-transparent ring-[1px] ring-blue-900 placeholder:text-neutral-600
    }
</style>
