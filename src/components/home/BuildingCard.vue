<template>
    <v-row>
        <v-col cols="1" sm="2" md=2 lg="2" xl="2" class="d-none d-sm-flex d-md-flex d-lg-flex d-xl-flex"/>
        <v-col cols="12" sm="10" md="10" lg="10" xl="10" class="pa-8 pa-sm-3 pa-md-3 pa-lg-3 pa-xl-3">
            <v-card color="gray" flat>
                <v-row no-gutters>
                    <v-col cols="5" sm="5" md="5" lg="5" xl="5">
                        <v-img height="100%" width="6.76in" :src="require('@/assets/home/building.png')">
                        </v-img>
                    </v-col>
                    <v-col cols="6" sm="5" md="5" lg="5" xl="5" style="position: relative;">
                        <div class="card-title-container text-left">
                            <v-card-title class="text-left pt-6">
                                <h1 class="card-title text-uppercase">
                                    El esquema GAESA, o cómo construir hoteles en Cuba
                                </h1>
                            </v-card-title>
                            <!--                            <v-card-title  class="text-left pt-0">-->
                            <!--                                <h1 class="card-title text-uppercase">-->
                            <!--                                    es-->
                            <!--                                </h1>-->
                            <!--                            </v-card-title>-->
                            <!--                            <v-card-title class="text-left pt-0">-->
                            <!--                                <h1 class="card-title text-uppercase">-->
                            <!--                                    construir-->
                            <!--                                </h1>-->
                            <!--                            </v-card-title>-->
                        </div>
                        <v-divider
                                style="margin-left: auto; width: 45%; border-bottom: 4px solid var(--primary-color); border-radius: 4px"></v-divider>
                        <v-card-text class="card-text-container text-left">
                            <v-row>
                                <v-col class="card-text">
                                    En la próxima década Cuba proyecta duplicar la cifra actual de habitaciones y abrir
                                    244 nuevos hoteles. A la cabeza de estas construcciones está el consorcio militar
                                    GAE S.A.
<!--                                    ...ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod-->

<!--                                    <span class="d-none d-sm-flex d-md-flex d-lg-flex d-xl-flex">tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</span>-->
<!--                                    <span class="d-none d-sm-none d-md-none d-lg-flex d-xl-flex"> quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo-->
<!--                                    consequat</span>...-->
                                </v-col>
                            </v-row>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn text class="more-btn">
                                Leer más
                            </v-btn>
                        </v-card-actions>
                        <div class="gray-panel">
                        </div>
                    </v-col>
                </v-row>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        name: "BuildingCard"
    }
</script>

<style scoped>
    .card-title-container {
        margin-top: 0.2in;
        margin-bottom: 0.2in;
        /*height: 2.63in;*/
        /*0.7in*/
        margin-left: 0.4in;
        height: 36%;
    }

    .card-title {
        /*margin-bottom: 10px;*/
        font-size: 30pt;
        line-height: 38pt;
        letter-spacing: 3px;
        color: #040404;
        font-family: Montserrat-ExtraBold;
    }

    .card-text-container {
        margin-top: 20px;
    }

    .card-text {
        line-height: 20pt;
        font-size: 16pt;
        letter-spacing: 1px;
        color: #4d4d4c;
        margin-left: 0.4in;
        font-family: Montserrat-Regular;
    }

    .more-btn {
        margin-left: auto;
        margin-bottom: 50px;
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
        top: 45%;
        left: 70%;
    }

    @media screen and (max-width: 1264px) {
        .card-title {
            font-size: 28.28pt;
            line-height: 28.28pt;
        }

        .card-title-container {
            margin-top: 0.3in;
            margin-bottom: 0in;
        }

        .more-btn {
            margin-top: 0;
            font-size: 16.3pt;
        }

    }

    @media screen and (max-width: 1024px) {

        .gray-panel {

            top: 43%;

        }
    }

    @media screen and (max-width: 960px) {
        .card-title {
            font-size: 16.28pt;
            line-height: 16.28pt;
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
            margin-left: 20px;
        }

        .more-btn {
            margin-top: 0;
            margin-bottom: 30px;
            font-size: 13.3pt;
        }

        .gray-panel {

            top: 40%;

        }
    }

    @media screen and (max-width: 768px) {
        /*.gray-panel {*/
        /*    top: 25%;*/
        /*}*/
    }

    @media screen and (max-width: 500px) {
        .card-title {
            font-size: 13.28pt;
            line-height: 14.28pt;
        }

        .card-title-container {

            margin-left: 0px;
        }


        .card-text {
            line-height: 13pt;
            font-size: 10pt;
            margin-left: 5px;
        }

        .more-btn {
            margin-top: 0px;
            margin-bottom: 10px;
            font-size: 10.3pt;
        }
    }

    @media screen and (max-width: 360px) {
        .card-title {
            font-size: 10pt;
            line-height: 13pt;
            letter-spacing: 2px;
        }

        .more-btn {
            margin-top: 0px;
            margin-bottom: 5px;
            font-size: 8.3pt;
        }

        /*.gray-panel {*/
        /*    top: 42%;*/
        /*}*/
    }
</style>