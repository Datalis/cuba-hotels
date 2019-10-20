<template>
    <div style="position: relative">
        <banner></banner>
        <v-row justify="center">
            <v-col cols="10" sm="8" md="8" lg="8" xl="8" class="pa-0">
                <p class="author text-uppercase" style="margin-bottom: 70px">Julio Batista</p></v-col>
        </v-row>
        <v-row id="text-row11" justify="center"
               :class="{'align-end': !textRowAlignStart, 'align-start': textRowAlignStart}">
            <v-col cols="10" sm="8" md="5" lg="5" xl="5" class="pa-0">
                <div class="info-container">
                    <div :key="i" v-for="(t, i) in textos">
                        <p class="text-justify">
                            {{t}}
                        </p>

                        <img style="margin-bottom: 30px; margin-top: 20px" width="100%" v-if="i===8" src="@/assets/1/3.jpg">
                        <img style="margin-bottom: 30px; margin-top: 20px" width="100%" v-if="i===18" src="@/assets/1/2.jpg">
                        <img style="margin-bottom: 30px; margin-top: 20px" width="100%" v-if="i===28" src="@/assets/1/1.jpg">

                    </div>
                </div>
                <comment style="margin-top: 40px" category="11"></comment>
            </v-col>
            <v-col cols="1" class="pa-0 d-none d-sm-none d-md-flex d-lg-flex d-xl-flex"></v-col>
            <v-col cols="2" class="pa-0 d-none d-sm-none d-md-flex d-lg-flex d-xl-flex">
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
                                    <router-link class="text-right" to="/negocio/" style="text-decoration: none;">
                                        <div class="card-action-text text-uppercase">Leer mas</div>
                                    </router-link>
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
                                    <router-link to="/gaesa/" style="text-decoration: none">
                                        <div class="card-action-text text-uppercase">Leer mas</div>
                                    </router-link>
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
    import Comment from "@/components/Comment.vue";

    import {mapGetters} from 'vuex'

    export default {
        name: "MontecarloText",
        metaInfo: {
            // Children can override the title.
            title: 'LA APUESTA HOTELERA EN CUBA',
            titleTemplate: '%s ← EL REGRESO DEL LUJO',
            // Define meta tags here.
            meta: [
                {'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {
                    name: 'description',
                    content: 'Hoteles de lujo, campos de golf, marinas… las autoridades cubanas parecen apostar hoy por la idea que tenían las familias mafiosas antes del triunfo revolucionario'
                },
                {name: 'tags', content: 'cuba, hoteles, turismo, eltoque'},
                {name: 'author', content: 'Abraham Calas <dogcalas@gmail.com>'},
                // OpenGraph data (Most widely used)
                {property: 'og:title', content: 'EL REGRESO DEL LUJO'},
                {property: 'og:site_name', content: 'LA APUESTA HOTELERA EN CUBA'},
                // The list of types is available here: http://ogp.me/#types
                {property: 'og:type', content: 'website'},
                // Should the the same as your canonical link, see below.
                {property: 'og:url', content: 'https://hoteles.eltoque.com/montecarlo'},
                {property: 'og:image', content: 'https://res.cloudinary.com/hmhkzirji/image/upload/v1570644605/eltoque/banner.jpg'},
                // Often the same as your meta description, but not always.
                {property: 'og:description', content: 'Hoteles de lujo, campos de golf, marinas… las autoridades cubanas parecen apostar hoy por la idea que tenían las familias mafiosas antes del triunfo revolucionario'},

                // Twitter card
                {name: 'twitter:card', content: 'summary'},
                {name: 'twitter:site', content: 'https://hoteles.eltoque.com/montecarlo'},
                {name: 'twitter:title', content: 'EL REGRESO DEL LUJO'},
                {name: 'twitter:description', content: 'Hoteles de lujo, campos de golf, marinas… las autoridades cubanas parecen apostar hoy por la idea que tenían las familias mafiosas antes del triunfo revolucionario'},
                // Your twitter handle, if you have one.
                {name: 'twitter:creator', content: '@eltoquecom'},
                {name: 'twitter:image:src', content: 'https://res.cloudinary.com/hmhkzirji/image/upload/v1570644605/eltoque/banner.jpg'},

                // Google / Schema.org markup:
                {itemprop: 'name', content: 'EL REGRESO DEL LUJO'},
                {itemprop: 'description', content: 'Hoteles de lujo, campos de golf, marinas… las autoridades cubanas parecen apostar hoy por la idea que tenían las familias mafiosas antes del triunfo revolucionario'},
                {itemprop: 'image', content: 'https://res.cloudinary.com/hmhkzirji/image/upload/v1570644605/eltoque/banner.jpg'}
            ]
        },
        computed: {
            ...mapGetters({
                textos: 'montecarlo'
            })
        },
        components: {VideoFrame, Banner,Comment},
        data() {
            return {
                sidebarFixed: false,
                textRowAlignStart: true
            }
        },
        mounted() {
            const textRow = document.getElementById('text-row11')
            const sideBarCol = document.getElementById('sidebarCol')

            const me = this
            window.addEventListener('scroll', function () {
                const pixel_tope_fila = textRow.offsetTop
                const pedazo_texto_recorrido = window.scrollY - pixel_tope_fila
                const pedazo_por_recorrer = textRow.offsetHeight - pedazo_texto_recorrido
                const sidebarheight = sideBarCol.offsetHeight

                const scrollPosition = window.scrollY

                if (scrollPosition >= pixel_tope_fila) {
                    if (sidebarheight >= pedazo_por_recorrer) {
                        me.sidebarFixed = false
                        me.textRowAlignStart = false
                    } else {
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
    .side-bar-fixed {
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
