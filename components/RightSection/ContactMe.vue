<template>
        <div class="text-sm pb-7 z-[3]" :class="[scrolledInSection !== 'contact' ? 'opacity-5 blur-[2px]' : '']">
            <div id="contact" class="pt-[73px] intersect bg-[#121212] z-[999]">
                <form @submit.prevent class="grid gap-6">
                    <BaseComponentsReusableInput
                    v-for="(input, key, index) in inputs"
                    @modelValue="input.value = $event"
                    :key="index"
                    :id="input.id"
                    :label="input.label"
                    :placeholder="input.placeholder" />
                    <div class="grid gap-1">
                        <label for="message" class="text-blue-300 opacity-50">Enter message</label>
                        <textarea v-model="message" class="text-input ring-[1px]  placeholder:text-neutral-600 ring-blue-900" name="" placeholder="Type your message" id="message" cols="30" rows="10"></textarea>
                    </div>
                    <div class="pt-3 text-center">
                        <button @click.prevent="handleSubmit" class="form-button">SUBMIT</button>
                    </div>
                </form>
            </div>
        </div>
</template>

<script setup>
const main = mainStore()
const {scrolledInSection} = storeToRefs(main)

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
        @apply w-full border-t border-white border-opacity-[0.1] shadow-md active:bg-blue-700 active:text-black text-center bg-neutral-900 rounded-md py-2 ring-[1px] ring-blue-900 hover:bg-blue-500 hover:text-black
    }
    
    .text-input {
        @apply h-[170px] py-2 text-[hsla(0,0%,100%,0)] rounded-md px-4 w-full outline-none text-neutral-700 bg-transparent
    }

</style>
