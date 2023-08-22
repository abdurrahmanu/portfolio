<template>
    <div class="flex gap-[10px]">
        <component :is="svg[0]" />
        <div class="inline-block">{{ contact }}</div>
    </div>
</template>

<script setup>
const props = defineProps({
    contact: String,
    svg: Array
})

</script>