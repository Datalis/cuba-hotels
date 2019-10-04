<template>
    <v-row align="end" justify="start">
        <v-col cols="1" sm="1" md=2 lg="2" xl="2"
               class="d-none d-sm-flex d-md-flex d-lg-flex d-xl-flex">
            <div class="horizontal-line"></div>
        </v-col>
        <v-col cols="12" sm="11" md="10" lg="10" xl="10"
               class="pl-8  pr-0 pa-sm-3 pa-md-3 pa-lg-3 pa-xl-3">
            <v-card color="gray" flat>
                <v-row no-gutters style="height: min-content !important;">
                    <v-col class="card-col" cols="6" sm="5" md="5" lg="5" xl="5" style="height: max-content !important;">
                        <div class="card-title-container">
                            <v-card-title class="text-left pt-6  pl-0 pb-0">
                                <h1 class="card-title text-uppercase">
                                    el esquema
                                </h1>
                            </v-card-title>
                            <v-card-title class="text-left pl-0 pt-0">
                                <h1 class="card-title text-uppercase">
                                    GAESA
                                </h1>
                                <h1 class="card-title pl-0 text-uppercase">
                                    para construir
                                </h1>
                                <h1 class="card-title pl-0 text-uppercase">
                                    hoteles
                                </h1>
                            </v-card-title>
                        </div>
                        <v-divider class="title-divider"></v-divider>
                        <v-card-text class="text-left card-text-container">
                            <v-row>
                                <v-col class="card-text">
                                    En la próxima década Cuba proyecta duplicar la cifra actual de habitaciones y abrir
                                    244 nuevos hoteles. A la cabeza de estas construcciones está el consorcio militar
                                    GAE S.A.
                                </v-col>
                            </v-row>
                        </v-card-text>
                        <v-card-actions class="text-left">
                            <router-link to="/gaesa/" style="text-decoration: none">
                                <v-btn text class="more-btn">
                                    Leer más
                                </v-btn>
                            </router-link>
                        </v-card-actions>
                    </v-col>
                    <v-col cols="5" sm="5" md="5" lg="5" xl="5" class="img-col" style="position: relative;">
                        <div class="gray-panel">
                        </div>
                        <v-img class="d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex" height="100%"
                               :src="require('@/assets/home/gaesa.jpg')">
                        </v-img>
                    </v-col>
                </v-row>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        name: "Owners"
    }
</script>

<style scoped>
    .card-title-container {
        margin-top: 0.3in;
        margin-bottom: 0.3in;
        padding-left: 12px;
    }

    .card-title {
        font-size: 25pt;
        line-height: 30pt;
        letter-spacing: 3px;
        color: #040404;
        height: max-content;
        font-family: Montserrat-ExtraBold;
    }

    .card-text {
        line-height: 20pt;
        font-size: 16pt;
        letter-spacing: 1px;
        color: #4d4d4c;
        font-family: Montserrat-Regular;
        padding-right: 40px !important
    }

    .horizontal-line {
        width: 80%;
        border-bottom: 4px solid black;
        border-radius: 4px;
        display: inline-block;
    }

    .title-divider {
        margin-left: 16px;
        width: 40%;
        border-bottom: 4px solid var(--primary-color) !important;
        border-radius: 4px
    }

    .more-btn {
        margin-bottom: 50px;
        text-transform: uppercase;
        color: var(--primary-color);
        font-size: 20.3pt;
        font-family: Montserrat-Light;
    }

    .gray-panel {
        background-color: rgba(58, 58, 58, 0.2);
        width: 43.5%;
        height: 100%;
        position: absolute;
        top: 0;
        right: 100%;
    }

    @media screen and (max-width: 1264px) {
        .card-title-container {
            margin-bottom: 0;
        }

        .more-btn {
            margin-top: 0;
            font-size: 16.3pt;
        }
    }

    @media screen and (max-width: 1024px) {
        .card-title-container {
            margin-bottom: 10px;
        }

        .card-title {
            font-size: 23pt;
            line-height: 25pt;
        }

        .card-text {
            line-height: 18pt;
            font-size: 14pt;
            padding-bottom: 0 !important;
        }
    }

    @media screen and (max-width: 960px) {
        .card-title {
            font-size: 23pt;
            line-height: 25pt;
        }

        .card-title-container {
            margin-top: 0.236in;
            margin-bottom: 0;
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
        .card-title-container {
            padding-left: 0 !important;
        }

        .card-text {
            padding-left: 0 !important;
        }

        .btn-container {
            padding-left: 0 !important;
        }

        .title-divider {
            margin-left: 5px;
        }
    }

    @media screen and (max-width: 699px) {
        .card-col {
            flex: 0 0 48%;
            max-width: 48%;
        }

        .img-col {
            flex: 0 0 50%;
            max-width: 50%;
        }
    }

    @media screen and (max-width: 550px) {
        .card-col {
            flex: 0 0 55%;
            max-width: 55%;
        }

        .img-col {
            flex: 0 0 45%;
            max-width: 45%;
        }

        .card-title-container {
            padding-left: 10px !important;
        }

        .card-text {
            padding-left: 10px !important;
        }

        .btn-container {
            padding-left: 8px !important;
        }

        .title-divider {
            margin-left: 10px;
        }

        .gray-panel {
            width: 55%;
        }
    }

    @media screen and (max-width: 500px) {
        .card-title {
            font-size: 19.28pt;
            line-height: 21.28pt;
        }

        .card-title-container {
            margin-top: 0.236in;
            margin-bottom: 10px;
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

        .gray-panel {
            width: 60%;
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
            font-size: 15.28pt;
            line-height: 18.28pt;
        }

        .card-title-container {
            padding-bottom: 0;
        }

        .gray-panel {
            width: 80%;
        }
    }

    @media screen and (max-width: 360px) {
        .card-col {
            flex: 0 0 76%;
            max-width: 76%;
        }

        .img-col {
            flex: 0 0 22%;
            max-width: 22%;
        }

        .gray-panel {
            width: 150%;
        }
    }
</style>