<template>
    <div style="position: relative">
        <v-row justify="end">
            <v-col cols="9" class="container-panel">
            </v-col>
        </v-row>
        <v-row class="content-row" justify="center" align="center">
            <v-col cols="11" sm="6" md="6" lg="6" xl="6" class="video-col">
                <video-frame :width="width" :height="height" class="video-frame"></video-frame>
            </v-col>
            <v-col cols="8" sm="5" md="5" lg="4" xl="4" class="text-col" style="width: max-content">
                <v-card class="card" flat>
                    <v-card-title class="card-title text-left text-uppercase">
                        Hoteles en Cuba
                    </v-card-title>
                    <v-card-title class="card-title pt-0 text-left text-uppercase">
                        ¿Quién paga el paraíso?
                    </v-card-title>
                    <v-card-text class="summary text-left">
                        Más de 19 mil millones proyecta invertir el gobierno para asegurar el desarrollo turístico en
                        Cuba. Una apuesta arriesgada, para un sector que hoy ya posee 72 mil habitaciones.
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
                        return '450px'
                    case 'sm':
                        return '270px'
                    case 'xs':
                        return '350px'
                    default:
                        return '350'
                }
            },
            width() {
                switch (this.$vuetify.breakpoint.name) {
                    case 'xl':
                        return '100%'
                    case 'lg':
                        return '100%'
                    case 'md':
                        return '100%'
                    case 'sm':
                        return '100%'
                    case 'xs':
                        return '100%'
                    default:
                        return '100%'
                }
            }
        }
    }
</script>

<style scoped>
    .content-row {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
    }

    .card-title {
        letter-spacing: 3px;
        font-size: 22pt;
        line-height: 28pt;
        color: #de9931;
        font-family: Montserrat-ExtraBold;
    }

    .summary {
        margin-top: 25px;
        line-height: 18pt;
        font-size: 14pt;
        letter-spacing: 1px;
        color: #9a9997 !important;;
        font-family: Montserrat-Regular;
    }

    .container-panel {
        background-color: #1f1f1f;
        height: 650px;
    }

    .card {
        background-color: inherit !important;
    }

    .video-col {

    }

    .video-frame {

    }

    @media screen and (max-width: 960px) {
        .card-title {
            font-size: 22pt;
            line-height: 25pt;
        }

        .card {
            min-width: 110% !important;
        }

        .summary {
            line-height: 16pt;
            font-size: 13pt;
        }
    }


    @media screen and (max-width: 900px) {
        .card-title {
            font-size: 18pt;
            line-height: 20pt;
        }

        .summary {
            line-height: 14pt;
            font-size: 12pt;
        }
    }

    @media screen and (max-width: 720px) {
        .card-title {
            font-size: 14pt;
            line-height: 16pt;
            padding-bottom: 5px !important;
        }

        .summary {
            line-height: 12pt;
            font-size: 11pt;
        }
    }

    @media screen and (max-width: 599px) {
        .text-col {
            margin-left: auto;
            margin-right: 20px;
        }

        .video-col {
            padding-top: 60px;
            margin-left: auto;
        }

        .content-row {
            /*height: 110%;*/
        }

        .container-panel {
            height: 700px;
        }
    }

    @media screen and (max-width: 399px) {

        .container-panel {
            height: 800px;
        }
    }

</style>