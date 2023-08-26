<template>
    <div id="contact" class="pt-[73px] intersect">
        <form @submit.prevent class="grid gap-6">
            <ReusableInputComponent
            v-for="(input, key, index) in inputs"
            @modelValue="input.value = $event"
            :key="index"
            :id="input.id"
            :label="input.label"
            :placeholder="input.placeholder" />
            <div class="grid gap-1">
                <label for="message" class="text-[rgba(255,255,255,0.3)]">Enter message</label>
                <textarea v-model="message" class="text-input" name="" placeholder="Type your message" id="message" cols="30" rows="10"></textarea>
            </div>
            <div class="text-center pt-6">
                <button @click.prevent="handleSubmit" class="form-button">SUBMIT</button>
            </div>
        </form>
    </div>
</template>

<script setup>
const inputs = ref([
    {
        label: 'Full name',
        id: 'name',
        placeholder: 'Enter full name',
        value: ""
        
    },
    {
        label: 'Email address',
        id: 'email',
        placeholder: 'eg johndoe@mail.com',
        value: ""
    },
    {
        label: 'Phone',
        id: 'id',
        placeholder: '+234 70223967632',
        value: ""
    }
])

const message = ref('')

const handleSubmit = () => {
    const noEmptyFields = ref(false)

    inputs.value.map(input => {
        if (!input.value.length) {
            input.placeholder = 'Field cannot be empty' 
        }
    })
}

</script>

<style scoped>
    .form-button {
        @apply w-full border-t border-white border-opacity-[0.1] shadow-md active:bg-slate-200 active:text-black text-center bg-neutral-800 rounded-md py-2 text-[10px] custom-screen-md:py-4 custom-screen-md:text-[14px] custom-screen-2xl:py-6 custom-screen-2xl:text-base
    }
    
    .text-input {
        @apply h-[170px] py-2 text-[10px] custom-screen-md:py-4 custom-screen-md:text-[14px] custom-screen-2xl:py-6 custom-screen-2xl:text-base text-[rgba(255,255,255,0.4)] placeholder:text-[rgba(255,255,255,0.3)] bg-transparent rounded-md border border-[rgba(255,255,255,0.3)] px-4 w-full outline-none
    }

</style>
