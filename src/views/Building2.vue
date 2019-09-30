<template>
    <div style="position: relative">
        <banner></banner>
        <v-row justify="center">
            <v-col cols="10" sm="8" md="8" lg="8" xl="8" class="pa-0">
                <p class="author text-uppercase" style="margin-bottom: 70px">Jessica Dominguez Delgado</p></v-col>
        </v-row>
        <v-row justify="center" align="start">
            <v-col cols="10" sm="8" md="5" lg="5" xl="5" class="pa-0">
                <div class="info-container" style="padding-right: 10px;">
                    <p :key="i" v-for="(t, i) in textos" class="text-justify">
                        {{t}}
                    </p>
                </div>
            </v-col>
            <v-col cols="1" class="pa-0 d-none d-sm-none d-md-flex d-lg-flex d-xl-flex"></v-col>
            <v-col cols="2" class="pa-0 d-none d-sm-none d-md-flex d-lg-flex d-xl-flex">
                <v-row justify="start" align="start">
                    <v-col cols="12" style="height: max-content;">
                        <v-card class="card first-card" width="50%">
                            <v-img :src="require('@/assets/home/building.png')" height="3in">
                                <v-card-title class="card-title">
                                    <div class="card-title-text text-uppercase">
                                        Los dueños
                                    </div>
                                    <div class="sep-line"></div>
                                    <div class="card-action-text text-uppercase">Leer mas</div>
                                </v-card-title>
                            </v-img>
                        </v-card>
                    </v-col>
                    <v-col cols="12" style="height: max-content;">
                        <v-card class="mt-12 card" style="background-color: #292929;" width="50%">
                            <video-frame width="100%" height="100%"></video-frame>
                            <v-card-title class="pr-4 pb-5" style="background-color: #292929; height: 5%">
                                <h1 class="video-title text-uppercase text-right" style="width: 100%">Video</h1>
                                <h1 class="video-title text-uppercase text-right mt-2" style="width: 100%">Resumen</h1>
                            </v-card-title>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import Banner from '@/components/building/Banner'
    import VideoFrame from '@/components/videoFrame'
    import {mapGetters} from 'vuex'

    export default {
        name: "Building",
        computed: {
            ...mapGetters({
                textos: 'business'
            })
        },
        components: {VideoFrame, Banner}
    }
</script>

<style scoped>
    .card {
        height: max-content;
        border-radius: 0;
    }

    .first-card {
        /*margin-top: 246px;*/
    }

    .card-title {
        height: 33%;
        background-color: #eeeeed;
    }

    .card-title-text {
        font-family: Montserrat-ExtraBold;
        margin-left: auto;
        margin-right: auto;
        font-size: 19pt;
        margin-top: 8%;
    }

    .card-action-text {
        font-family: Montserrat-Light;
        color: var(--primary-color);
        margin-right: 20px;
        font-size: 10pt;
    }

    .author {
        padding-left: 20px;
        padding-top: 150px;
        border-left: 4px solid var(--primary-color);
        font-family: Montserrat-Light;
        color: var(--primary-color);
    }

    .sep-line {
        width: 40%;
        margin-left: auto;
        margin-right: 20px;
        border: 2px solid var(--primary-color);
    }

    .video-title {
        font-family: Montserrat-ExtraBold;
        color: var(--primary-color);
        font-size: 15pt;
        line-height: 15pt;
    }

    .info-container {
        animation-name: example;
        animation-duration: 1s;
    }

    @media screen and (max-width: 600px) {
        .author {

            padding-top: 90px;

        }
    }


</style>