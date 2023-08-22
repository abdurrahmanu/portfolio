<template>
    <div id="contact" class="pt-[73px] intersect">
        <form @submit.prevent="" action="" class="grid gap-6">
            <ReusableInput 
            v-for="(input, key, index) in inputs"
            :key="index"
            :id="input.id"
            :height="input.height"
            :placeholder="input.placeholder"
            :label="key"
            />
            <div class="grid gap-1">
                <label for="message" class="text-[rgba(255,255,255,0.3)]">Enter message</label>
                <textarea class="text-input" name="" placeholder="Type your message" id="message" cols="30" rows="10"></textarea>
            </div>
            <div class="text-center pt-6">
                <button class="form-button">SUBMIT</button>
            </div>
        </form>
    </div>
</template>

<script setup>
const inputs = ref({
    'Full name': {
        id: 'name',
        placeholder: 'Enter full name',
    },
    'Email address': {
        id: 'email',
        placeholder: 'eg johndoe@mail.com',
    },
    'Phone number': {
        id: 'id',
        placeholder: '+234 70223967632',
    }
})

</script>

<style scoped>
    .form-button {
        @apply w-full border-t border-white border-opacity-[0.1] shadow-md active:bg-slate-200 active:text-black text-center py-6 bg-neutral-800 rounded-md
    }
    
    .text-input {
        @apply h-[170px] py-6 text-[rgba(255,255,255,0.4)] placeholder:text-[rgba(255,255,255,0.3)] bg-transparent rounded-md border border-[rgba(255,255,255,0.3)] px-4 w-full
    }

</style>
