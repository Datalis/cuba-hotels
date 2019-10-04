<template>
    <div style="position: relative">
        <banner></banner>
        <v-row justify="center">
            <v-col cols="10" sm="8" md="8" lg="8" xl="8" class="pa-0">
                <p class="author text-uppercase" style="margin-bottom: 70px">Julio Batista</p></v-col>
        </v-row>
        <v-row id="text-row11" justify="center"  :class="{'align-end': !textRowAlignStart, 'align-start': textRowAlignStart}">
            <v-col  cols="10" sm="8" md="5" lg="5" xl="5" class="pa-0">
                <div class="info-container" style="padding-right: 10px;">
                    offset{{this.offset}}scroll{{this.scroll}}
                    <div :key="i" v-for="(t, i) in textos">
                        <p  class="text-justify">
                            {{t}}
                        </p>
                    </div>
                </div>
            </v-col>
            <v-col cols="1" class="pa-0 d-none d-sm-none d-md-flex d-lg-flex d-xl-flex"></v-col>
            <v-col  cols="2" class="pa-0 d-none d-sm-none d-md-flex d-lg-flex d-xl-flex">
                <!--        side bar-->
                <v-row id="sidebarCol" justify="start" align="start" :class="{'side-bar-fixed': sidebarFixed}">
                    <v-col cols="12" style="height: max-content;">
                        <v-card class="card first-card" width="max-content">
                            <v-img :src="require('@/assets/home/business.jpg')" width="250px" height="2in">
                                <v-card-title class="card-title  pb-0 pt-1">
                                    <div class="card-title-text text-uppercase">
                                        El negocio hotelero
                                    </div>
                                    <div class="sep-line"></div>
                                    <div class="card-action-text text-uppercase">Leer mas</div>
                                </v-card-title>
                            </v-img>
                        </v-card>
                    </v-col>
                    <v-col cols="12" style="height: max-content;">
                        <v-card class="card first-card" width="max-content">
                            <v-img :src="require('@/assets/home/gaesa.jpg')" width="250px" height="2in">
                                <v-card-title class="card-title pb-0 pt-1">
                                    <div class="card-title-text text-uppercase">
                                        El esquema gaesa para construir hoteles
                                    </div>
                                    <div class="sep-line"></div>
                                    <div class="card-action-text text-uppercase">Leer mas</div>
                                </v-card-title>
                            </v-img>
                        </v-card>
                    </v-col>
                    <v-col cols="12" style="height: max-content;">
                        <v-card class="card first-card" style="background-color: #292929;" width="max-content">
                            <video-frame width="250px" height="140"></video-frame>
                            <v-card-title class="pr-4 pb-4" style="background-color: #292929; height: 5%">
                                <h1 class="video-title text-uppercase text-right" style="width: 100%">Video Resumen</h1>
                            </v-card-title>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import Banner from '@/components/banners/MontecarloBanner'
    import VideoFrame from '@/components/videoFrame'
    import {mapGetters} from 'vuex'

    export default {
        name: "MontecarloText",
        computed: {
            ...mapGetters({
                textos: 'montecarlo'
            })
        },
        components: {VideoFrame, Banner},
        data(){
          return{
              offset: 0,
              scroll: 0,
              sidebarFixed: false,
              textRowAlignStart: true
          }
        },
        mounted() {
            const textRow =  document.getElementById('text-row11')
            const sideBarCol = document.getElementById('sidebarCol')

            const me = this
            window.addEventListener('scroll', function () {
                const pixel_tope_fila = textRow.offsetTop
                const pedazo_texto_recorrido =  window.scrollY - pixel_tope_fila
                const pedazo_por_recorrer = textRow.offsetHeight - pedazo_texto_recorrido
                const sidebarheight = sideBarCol.offsetHeight

                const scrollPosition = window.scrollY

                if(scrollPosition >= pixel_tope_fila){
                    if (sidebarheight >= pedazo_por_recorrer) {
                        me.sidebarFixed = false
                        me.textRowAlignStart = false
                    } else{
                        me.sidebarFixed = true
                    }
                } else {
                    me.sidebarFixed = false
                    me.textRowAlignStart = true
                }
            })
        }
    }
</script>

<style scoped>
    .side-bar-fixed{
        position: fixed;
        top: 0;
    }


    .card {
        height: max-content;
        border-radius: 0;
    }

    .first-card {
        /*margin-top: 246px;*/
    }

    .card-title {
        height: max-content;
        background-color: #eeeeed;
    }

    .card-title-text {
        font-family: Montserrat-ExtraBold;
        margin-left: auto;
        margin-right: auto;
        font-size: 13pt;
        line-height: 14pt;
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