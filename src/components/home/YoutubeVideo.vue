<template>
    <div>
        <v-row align="center">
            <v-col cols="2">

            </v-col>
            <v-col cols="2" >
                <iframe width="560" height="315" src="https://www.youtube.com/embed/9iPRF7YQTck" frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
            </v-col>
            <v-col cols="8" style="background-color: #4d4d4c; color: #FFFFFF" align="center">


                <v-card flat max-width="496" style="background-color: inherit; margin: 12em; margin-right: 4em">
                    <v-card-title>
                        Video Resumen
                    </v-card-title>
                    <v-card-text class="text-left">
                        ...ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat...
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        name: "YoutubeVideo"
    }
</script>

<style scoped>

</style>