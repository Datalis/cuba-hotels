<template>
    <div style="position: relative">
        <gaesa-banner></gaesa-banner>
        <v-row justify="center">
            <v-col cols="10" sm="8" md="8" lg="8" xl="8" class="pa-0">
                <p class="author text-uppercase" style="margin-bottom: 70px">Julio Batista</p></v-col>
        </v-row>
        <v-row id="text-row11" justify="center"
               :class="{'align-end': !textRowAlignStart, 'align-start': textRowAlignStart}">
            <v-col cols="10" sm="8" md="5" lg="5" xl="5" class="pa-0">

                <div class="info-container">
                    <div :key="i" v-for="(t, i) in textos">
                        <p :class="{'text-justify': true, 'text-subtitle': i===7 || i===31 || i===52}" v-html="t">
                        </p>
                        <div v-if="i===3" style="margin-bottom: 30px; margin-top: 20px">
                            <img width="100%" src="@/assets/3/7.jpg"/>
                            <div class="img-footer">Frente al Malecón habanero crecen hoy las dos torres del nuevo hotel que debe concluirse en 2021 y tendrá 600 habitaciones y un costo de 81 millones. FOTO: Jans Sosa</div>
                        </div>
                        <div v-if="i===7" style="margin-bottom: 30px; margin-top: 20px">
                            <img width="100%" src="@/assets/3/3.jpg">
                            <div class="img-footer">Construir hoteles en Cuba es una madeja burocrática que debe sortear los inversionistas cubanos y extranjeros. FOTO: Jans Sosa</div>
                        </div>
                        <div v-if="i===23" style="margin-bottom: 30px; margin-top: 20px">
                            <img width="100%" src="@/assets/3/8.jpg">
                            <div class="img-footer">Con la aplicación de la Resolución 310/2014 del MEP, los primeros trabajos podrían comenzar como máximo en 90 días. FOTO: Jans Sosa</div>
                        </div>
                        <div v-if="i===32" style="margin-bottom: 30px; margin-top: 20px">
                            <img width="100%" src="@/assets/3/5.jpg"/>
                            <div class="img-footer">Las empresas de las FAR aportarán más del 66% de la inversión del país para construir hoteles en la próxima década. FOTO: Jans Sosa</div>
                        </div>
                        <v-img style="margin-bottom: 30px;" width="100%" v-if="i===43" src="@/assets/3/INFOG-02.jpg"></v-img>
                        <div v-if="i===52" style="margin-bottom: 30px; margin-top: 20px">
                            <img width="100%" src="@/assets/3/1.jpg"/>
                            <div class="img-footer">Solo en La Habana el Plan de Desarrollo del Mintur prevé la construcción de 42 nuevos hoteles para 2025. FOTO: Alejandro Basulto</div>
                        </div>
                        <div v-if="i===69" style="margin-bottom: 30px; margin-top: 20px">
                            <img width="100%" src="@/assets/3/4.jpg"/>
                            <div class="img-footer">De cumplirse los planes, para 2030 Gaviota S.A. podría controlar el 60 % de la capacidad hotelera de Cuba. FOTO: Jans Sosa</div>
                        </div>
                        <ocupacion-habitaciones v-if="i===63"></ocupacion-habitaciones>
                    </div>

                    <comment style="margin-top: 40px" category="13"></comment>

                </div>
            </v-col>
            <v-col cols="1" class="pa-0 d-none d-sm-none d-md-flex d-lg-flex d-xl-flex"></v-col>
            <v-col cols="2" class="pa-0 d-none d-sm-none d-md-flex d-lg-flex d-xl-flex">
                <!--        side bar-->
                <v-row id="sidebarCol" justify="start" align="start" :class="{'side-bar-fixed': sidebarFixed}">
                    <v-col cols="12" style="height: max-content;">
                        <v-card class="card first-card" width="max-content">
                            <v-img :src="require('@/assets/home/montecarlo.jpg')" width="250px" height="2in">
                                <v-card-title class="card-title  pb-0 pt-1">
                                    <div class="card-title-text text-uppercase">
                                        El regreso del lujo
                                    </div>
                                    <div class="sep-line"></div>
                                    <router-link to="/montecarlo/" style="text-decoration: none">
                                        <div class="card-action-text text-uppercase">Leer mas</div>
                                    </router-link>
                                </v-card-title>
                            </v-img>
                        </v-card>
                    </v-col>
                    <v-col cols="12" style="height: max-content;">
                        <v-card class="card first-card" width="max-content">
                            <v-img :src="require('@/assets/home/business.jpg')" width="250px" height="2in">
                                <v-card-title class="card-title pb-0 pt-1">
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
    import GaesaBanner from '@/components/banners/GaesaBanner'
    import VideoFrame from '@/components/videoFrame'
    import {mapGetters} from 'vuex'
    import OcupacionHabitaciones from "@/components/graphics/OcupacionHabitaciones";
    import Comment from "@/components/Comment.vue";


    export default {
        name: "GaesaText",
        metaInfo: {
            // Children can override the title.
            title: 'LA APUESTA HOTELERA EN CUBA',
            titleTemplate: '%s ← EL ESQUEMA GAESA PARA CONSTRUIR HOTELES',
            // Define meta tags here.
            meta: [
                {'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {
                    name: 'description',
                    content: 'En la próxima década Cuba proyecta duplicar la cifra actual de habitaciones y abrir 244 nuevos hoteles. A la cabeza de estas construcciones está el consorcio militar GAE S.A.'
                },
                {name: 'tags', content: 'cuba, hoteles, turismo, eltoque'},
                {name: 'author', content: 'Abraham Calas <dogcalas@gmail.com>'},
                // OpenGraph data (Most widely used)
                {property: 'og:title', content: 'EL ESQUEMA GAESA PARA CONSTRUIR HOTELES'},
                {property: 'og:site_name', content: 'LA APUESTA HOTELERA EN CUBA'},
                // The list of types is available here: http://ogp.me/#types
                {property: 'og:type', content: 'website'},
                // Should the the same as your canonical link, see below.
                {property: 'og:url', content: 'https://hoteles.eltoque.com/gaesa'},
                {property: 'og:image', content: 'https://res.cloudinary.com/hmhkzirji/image/upload/v1570644605/eltoque/banner.jpg'},
                // Often the same as your meta description, but not always.
                {property: 'og:description', content: 'En la próxima década Cuba proyecta duplicar la cifra actual de habitaciones y abrir 244 nuevos hoteles. A la cabeza de estas construcciones está el consorcio militar GAE S.A.'},

                // Twitter card
                {name: 'twitter:card', content: 'summary'},
                {name: 'twitter:site', content: 'https://hoteles.eltoque.com/gaesa'},
                {name: 'twitter:title', content: 'EL ESQUEMA GAESA PARA CONSTRUIR HOTELES'},
                {name: 'twitter:description', content: 'En la próxima década Cuba proyecta duplicar la cifra actual de habitaciones y abrir 244 nuevos hoteles. A la cabeza de estas construcciones está el consorcio militar GAE S.A.'},
                // Your twitter handle, if you have one.
                {name: 'twitter:creator', content: '@eltoquecom'},
                {name: 'twitter:image:src', content: 'https://res.cloudinary.com/hmhkzirji/image/upload/v1570644605/eltoque/banner.jpg'},

                // Google / Schema.org markup:
                {itemprop: 'name', content: 'EL ESQUEMA GAESA PARA CONSTRUIR HOTELES'},
                {itemprop: 'description', content: 'En la próxima década Cuba proyecta duplicar la cifra actual de habitaciones y abrir 244 nuevos hoteles. A la cabeza de estas construcciones está el consorcio militar GAE S.A.'},
                {itemprop: 'image', content: 'https://res.cloudinary.com/hmhkzirji/image/upload/v1570644605/eltoque/banner.jpg'}
            ]
        },
        computed: {
            ...mapGetters({
                textos: 'gaesa'
            })
        },
        components: {VideoFrame, GaesaBanner, OcupacionHabitaciones, Comment},
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
    .text-subtitle{
        text-transform: uppercase !important;
        font-family: Montserrat-ExtraBold !important;
    }
    .img-footer{
        margin-top: 2px;
        /*font-family: Montserrat-Thin;*/
        font-size: 8pt;
        /*letter-spacing: 2px;*/
        line-height: 9pt;
    }
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
