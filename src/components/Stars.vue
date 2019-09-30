<template>
    <div>
        <v-icon small :color="color" :key="i" v-for="i in Array.from(Array(stars).keys())">star</v-icon>
        <span v-if="plus">Plus</span>
    </div>

</template>

<script>
    export default {
        name: "Stars",
        props: {
            stars: {
                default: 5
            },
            plus: {
                default: false
            },
            color: {
                default: '#cc983c'
            }
        }
    }
</script>