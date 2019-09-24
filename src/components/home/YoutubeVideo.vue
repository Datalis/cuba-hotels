<template>
    <div>
        <v-row align="center">
            <v-col cols="3" align="end" justify="end">
                <video-frame style="margin-left: 100px"></video-frame>
            </v-col>
            <v-col cols="9" class="container-panel" align="center">
                <v-card class="card" flat max-width="496" style="">
                    <v-card-title class="card-title text-left text-uppercase">
                        Video Resumen
                    </v-card-title>

                    <v-card-text class="summary text-left">
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
    import VideoFrame from "../videoFrame";

    export default {
        name: "YoutubeVideo",
        components: {VideoFrame}
    }
</script>

<style scoped>
    .card-title {
        font-family: Montserrat-ExtraBold;
        font-size: 43.28pt;
        line-height: 44.28pt;
        letter-spacing: 3px;
        color: #de9931;
    }

    .summary {
        font-family: Montserrat-Regular;
        font-size: 15pt;
        color: #9a9997 !important;
        margin-top: 50px;
        line-height: 19pt;
    }

    .container-panel {
        background-color: #1f1f1f;
    }

    .card {
        background-color: inherit !important;
        margin: 12em 4em 12em 18em;
    }
</style>