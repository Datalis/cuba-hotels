<template>
    <v-row align="end" justify="start">
        <v-col cols="1" sm="2" md=2 lg="2" xl="2"
               class="d-none d-sm-flex d-md-flex d-lg-flex d-xl-flex">
            <div class="horizontal-line"></div>
        </v-col>
        <v-col cols="12" sm="10" md="10" lg="10" xl="10"
               class="pl-8  pr-0 pa-sm-3 pa-md-3 pa-lg-3 pa-xl-3">
            <v-card color="gray" flat>
                <v-row no-gutters style="height: min-content !important;">
                    <v-col cols="8" sm="5" md="5" lg="5" xl="5" style="height: max-content !important;">
                        <div class="card-title-container">
                            <v-card-title class="text-left pt-6  pb-0">
                                <h1 class="card-title text-uppercase">
                                    el esquema
                                </h1>
                            </v-card-title>
                            <v-card-title class="text-left pt-0">
                                <h1 class="card-title text-uppercase">
                                    GAESA
                                </h1>
                                <h1 class="card-title text-uppercase">
                                    para construir
                                </h1>
                                <h1 class="card-title text-uppercase">
                                    hoteles en Cuba
                                </h1>
                            </v-card-title>
                        </div>

                        <v-divider class="title-divider"></v-divider>
                        <v-card-text class="text-left card-text-container">
                            <v-row>
                                <v-col class="card-text">

                                    En la próxima década Cuba proyecta duplicar la cifra actual de habitaciones y abrir
                                    244 nuevos hoteles. A la cabeza de estas construcciones está el consorcio militar GAE S.A.
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
                    <v-col cols="4" sm="6" md="6" lg="6" xl="6" style="position: relative;">
                        <div class="gray-panel">
                        </div>
                        <v-img class="d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex" height="100%" width="5.4in"
                               aspect-ratio="1"
                               :src="require('@/assets/home/building.jpg')">
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
    .horizontal-line {
        width: 80%;
        /*height: 100%;*/
        border-bottom: 4px solid black;
        border-radius: 4px;
        display: inline-block;
    }

    .card-title-container {
        margin-top: 0.3in;
        margin-bottom: 0.3in;
    }

    .card-title {
        /*margin-bottom: 50px;*/
        font-size: 25pt;
        line-height: 30pt;
        letter-spacing: 3px;
        color: #040404;
        /*font-weight: 800;*/
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

    .title-divider {
        margin-left: 16px;
        width: 40%;
        border-bottom: 4px solid var(--primary-color) !important;
        border-radius: 4px
    }

    .card-text-container {
        /*margin-top: 20px;*/
    }

    .more-btn {
        margin-top: 25px;
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
        .card-title {
            font-size: 30pt;
            line-height: 38pt;
        }

        .card-title-container {
            margin-top: 0.3in;
            margin-bottom: 0;
        }

        .more-btn {
            margin-top: 0;
            font-size: 16.3pt;
        }
    }

    @media screen and (max-width: 960px) {
        .card-title {
            font-size: 22.28pt;
            line-height: 30.28pt;
        }

        .card-title-container {
            margin-top: 0.236in;
            margin-bottom: 0;
        }

        .card-text-container {
            margin-top: 0px;
            padding-bottom: 0;
        }

        .card-text {
            line-height: 16pt;
            font-size: 13pt;
        }

        .more-btn {
            margin-top: 0px;
            margin-bottom: 30px;
            font-size: 13.3pt;
        }
    }

    @media screen and (max-width: 599px) {
        .gray-panel {
            width: 80%;
        }
    }

    @media screen and (max-width: 500px) {
        .card-title {
            font-size: 20.28pt;
            line-height: 22.28pt;
        }

        .card-title-container {
            margin-top: 0.236in;
            margin-bottom: 0.3in;
        }

        .card-text {
            line-height: 16pt;
            font-size: 12pt;
        }

        .more-btn {
            margin-top: 0px;
            margin-bottom: 10px;
            font-size: 10.3pt;
        }
    }


    @media screen and (max-width: 360px) {
        .card-title {
            font-size: 20.28pt;
            line-height: 22.28pt;
        }

        .card-title-container {
            margin-top: 0.236in;
            margin-bottom: 0.3in;
        }

        .card-text {
            line-height: 16pt;
            font-size: 12pt;
        }

        .card-title {
            font-size: 20.28pt;
            line-height: 20.28pt;
        }

        .gray-panel {
            width: 80%;
        }
    }

</style>