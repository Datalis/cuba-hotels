<template>
    <div style="position: relative">
        <v-row justify="end">
            <v-col cols="9" class="container-panel" align="center">
            </v-col>
        </v-row>
        <v-row no-gutters align="center" style="position: absolute; top: 0;">
            <v-col class="video-col" align="end" justify="end">
                <video-frame :width="width" :height="height" class="video-frame"></video-frame>
            </v-col>
            <v-col style="padding-top: 40px">
                <v-card class="card" flat>
                    <v-card-title class="card-title text-left text-uppercase">
                        Video
                    </v-card-title>
                    <v-card-title class="card-title pt-0 text-left text-uppercase">
                        Resumen
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
        components: {VideoFrame},
        data() {
            return {
                videoWidth: '600px',
                videoHeight: '450px'
            }
        },
        computed: {
            height() {
                switch (this.$vuetify.breakpoint.name) {
                    case 'xl':
                        return '450px'
                    case 'lg':
                        return '450px'
                    case 'md':
                        return '350px'
                    case 'sm':
                        return '270px'
                    case 'xs':
                        return '200px'
                    default:
                        return '450px'
                }
            },
            width() {
                switch (this.$vuetify.breakpoint.name) {
                    case 'xl':
                        return '600px'
                    case 'lg':
                        return '600px'
                    case 'md':
                        return '500px'
                    case 'sm':
                        return '420px'
                    case 'xs':
                        return '70%'
                    default:
                        return '500px'
                }
            }
        }
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
        height: 650px;
    }

    .card {
        background-color: inherit !important;
        /*margin: 12em 4em 12em 18em;*/
        max-width: 496px;
        padding-left: 50px;
    }

    .video-col {
        padding-top: 100px
    }

    .video-frame {
        margin-left: 80px;
    }

    @media screen and (max-width: 1140px) {
        .card {
            padding-left: 20px;
        }
    }

    @media screen and (max-width: 1100px) {
        .card {
            padding-left: 10px;
            max-width: 400px;
            padding-top: 40px;
        }

        .card-title {
            font-size: 30.28pt;
            line-height: 30.28pt;
        }

        .summary {
            font-size: 14pt;
            line-height: 14pt;
        }
    }

    @media screen and (max-width: 1000px) {
        .summary {
            font-size: 14pt;
            line-height: 14pt;
            margin-top: 20px;
        }
    }

    @media screen and (max-width: 980px) {
        .card-title {
            font-size: 25.28pt;
            line-height: 25.28pt;
        }

        .summary {
            font-size: 12pt;
            line-height: 12pt;
        }
    }

    @media screen and (max-width: 860px) {
        .card-title {
            font-size: 20.28pt;
            line-height: 20.28pt;
        }

        .summary {
            font-size: 12pt;
            line-height: 12pt;
        }
    }

    @media screen and (max-width: 800px) {
        .video-frame {
            margin-left: 30px;
        }

    }

    @media screen and (max-width: 760px) {
        .card-title {
            font-size: 20.28pt;
            line-height: 20.28pt;

        }

        .summary {
            font-size: 10pt;
            line-height: 10pt;
        }
    }

    @media screen and (max-width: 738px) {
        .card {
            display: none;
        }

        .video-col {
            padding-top: 130px;
        }

        .container-panel {
            height: 600px;
        }
    }

    @media screen and (max-width: 680px) {
        .card-title {
            font-size: 15.28pt;
            line-height: 15.28pt;
        }

        .summary {

            margin-top: 5px;
        }

        .container-panel {
            height: 550px;
        }
    }

    @media screen and (max-width: 680px) {
        .card-title {
            font-size: 15.28pt;
            line-height: 15.28pt;
        }

        .summary {

            margin-top: 5px;
        }

        .container-panel {
            height: 550px;
        }
    }


</style>