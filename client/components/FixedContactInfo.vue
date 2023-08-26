<template>
    <div @click="goToLink" class="flex font-medium gap-[10px]">
        <component :is="svg[0]" />
        <div class="inline-block">{{ name }}</div>
    </div>
</template>

<script setup>
const {socialLinks } = allData()

const props = defineProps({
    name: String,
    link: String,
    svg: Array
})

const goToLink = () => {
    console.log(props.link)
    // window.go(`${socialLinks[props.contact]}`, '_blank')
}

</script>
