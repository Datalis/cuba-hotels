<template>
    <v-row>
        <v-col cols="1" sm="1" md=2 lg="2" xl="2" class="space-col d-none d-sm-flex d-md-flex d-lg-flex d-xl-flex"/>
        <v-col cols="12" sm="11" md="10" lg="10" xl="10" class="pl-0 pr-8 pt-8 pb-8pa-sm-3 pa-md-3 pa-lg-3 pa-xl-3">
            <v-card color="gray" flat>
                <v-row no-gutters>
                    <v-col cols="5" sm="5" md="5" lg="5" xl="5" class="img-col">
                        <div class="gray-panel">
                        </div>
                        <v-img height="100%" :src="require('@/assets/home/business.jpg')">
                        </v-img>
                    </v-col>
                    <v-col cols="6" sm="5" md="5" lg="5" xl="5" class="card-col" style="position: relative;">
                        <div class="card-title-container text-left">
                            <v-card-title class="text-left pt-6  pb-0">
                                <v-row align="center">
                                    <v-col cols="12">
                                        <p class="pt-0 mb-0 card-title text-uppercase">El negocio hotelero</p>
                                    </v-col>
                                </v-row>
                            </v-card-title>
                        </div>
                        <v-divider class="title-divider"></v-divider>
                        <v-card-text class="card-text-container text-left">
                            <v-row>
                                <v-col class="card-text">
                                    En manos del grupo Gaviota, de la Fuerzas Armadas, y de un conjunto cada vez más
                                    amplio de actores extranjeros se encuentra el próspero negocio hotelero de Cuba
                                </v-col>
                            </v-row>
                        </v-card-text>
                        <v-card-actions>
                            <router-link class="text-right" to="/negocio/" style="text-decoration: none; width: 100%">
                                <v-btn text class="more-btn ">
                                    Leer más
                                </v-btn>
                            </router-link>
                        </v-card-actions>
                    </v-col>
                </v-row>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        name: "BusinessCard"
    }
</script>

<style scoped>
    .card-col {
        padding-right: 20px;
    }

    .card-title-container {
        margin-top: 0.2in;
        margin-bottom: 0.2in;
        margin-left: 0.2in;
    }

    .card-title {
        font-size: 30pt;
        line-height: 38pt;
        letter-spacing: 2px;
        color: #040404;
        font-family: Montserrat-ExtraBold;
    }

    .card-text {
        line-height: 20pt;
        font-size: 16pt;
        letter-spacing: 1px;
        color: #4d4d4c;
        margin-left: 0.2in;
        font-family: Montserrat-Regular;
    }

    .title-divider {
        margin-left: auto;
        margin-right: 20px !important;
        width: 45%;
        border-bottom: 4px solid var(--primary-color);
        border-radius: 4px
    }

    .more-btn {
        margin-left: auto;
        margin-bottom: 50px;
        padding-right: 20px;
        text-transform: uppercase;
        color: var(--primary-color);
        font-size: 20.3pt;
        font-family: Montserrat-Light;
    }

    .gray-panel {
        background-color: rgba(58, 58, 58, 0.2);
        width: 50%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 10%;
    }

    @media screen and (max-width: 1264px) {
        .card-title-container {
            margin-bottom: 10px;
        }

        .more-btn {
            margin-top: 0;
            font-size: 16.3pt;
        }
    }

    @media screen and (max-width: 1024px) {
        .card-title {
            font-size: 26pt;
            line-height: 34pt;
        }

        .card-text {
            line-height: 18pt;
            font-size: 14pt;
            padding-bottom: 0 !important;
        }
    }

    @media screen and (max-width: 960px) {
        .card-title {
            font-size: 22.28pt;
            line-height: 30.28pt;
        }

        .card-title-container {
            margin-top: 0.01in;
            margin-bottom: 0;
            margin-left: 20px;
        }

        .card-text-container {
            margin-top: 0;
            padding-bottom: 0;
        }

        .card-text {
            line-height: 16pt;
            font-size: 13pt;
        }

        .more-btn {
            margin-top: 0;
            margin-bottom: 30px;
            font-size: 13.3pt;
        }
    }

    @media screen and (max-width: 800px) {
        .card-col{
            padding-right: 0;
        }
        .card-title-container {
            padding-left: 0 !important;
        }

        .title-divider {
            margin-right: 10px !important;
        }
    }

    @media screen and (max-width: 699px) {
        .space-col{
            flex: 0 0 0;
            max-width: 0;
            padding-left: 5px !important;
        }

        .card-col {
            flex: 0 0 48%;
            max-width: 48%;
        }

        .img-col {
            flex: 0 0 50%;
            max-width: 50%;
        }

        .gray-panel {
            width: 55%;
        }
    }


    @media screen and (max-width: 550px){
        .space-col{
            flex: 0 0 0;
            max-width: 0;
            padding: 0!important;
        }
        .card-col {
            flex: 0 0 55%;
            max-width: 55%;
        }

        .img-col {
            flex: 0 0 45%;
            max-width: 45%;
        }
    }
    @media screen and (max-width: 500px) {
        .card-title {
            font-size: 20.28pt;
            line-height: 22.28pt;
        }

        .card-text {
            line-height: 13pt;
            font-size: 10pt;
            padding-top: 0 !important;
        }

        .more-btn {
            margin-top: 0;
            margin-bottom: 10px;
            font-size: 10.3pt;
        }
    }

    @media screen and (max-width: 450px) {
        .card-col {
            flex: 0 0 60%;
            max-width: 60%;
        }

        .img-col {
            flex: 0 0 40%;
            max-width: 40%;
        }
    }

    @media screen and (max-width: 370px) {
        .card-col {
            flex: 0 0 66%;
            max-width: 66%;
        }

        .img-col {
            flex: 0 0 34%;
            max-width: 34%;
        }

        .card-title {
            font-size: 18.28pt;
            line-height: 20.28pt;
        }

        .card-title-container {
            padding-bottom: 0;
        }

    }

    @media screen and (max-width: 320px) {
        .card-col {
            flex: 0 0 76%;
            max-width: 76%;
        }

        .img-col {
            flex: 0 0 22%;
            max-width: 22%;
        }

        .gray-panel {
            width: 45%;
        }
    }
</style>