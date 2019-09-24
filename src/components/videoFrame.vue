<template>
    <iframe :width="width" :height="height" src="https://www.youtube.com/embed/9iPRF7YQTck" frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
</template>

<script>
    export default {
        name: "videoFrame",
        props:{
            width: {
                default: '600px'
            },
            height: {
                default: '450px'
            }
        }
    }
</script>

<style scoped>

</style>