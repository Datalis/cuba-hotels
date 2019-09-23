<template>
    <v-row align="end">
        <v-col cols="2" class="d-none d-sm-flex d-md-flex d-lg-flex d-xl-flex">
            <div class="horizontal-line"></div>
        </v-col>
        <v-col class="pa-8 pa-sm-3 pa-md-3 pa-lg-3 pa-xl-3" cols="12" sm="10" md="10" lg="10" xl="10">
            <v-card color="gray" flat>
                <v-row no-gutters style="width: 100%">
                    <v-col cols="12" sm="8" md="6" lg="5">
                        <v-card-title class="card-title-container">
                            <v-row align="center">
                                <v-col cols="12">
                                    <p class="card-title text-uppercase">Los dueños</p>
                                </v-col>
                            </v-row>
                        </v-card-title>
                        <v-divider
                                style="margin-left: 16px; width: 40%; border-bottom: 4px solid var(--primary-color); border-radius: 4px"></v-divider>
                        <v-card-text class="text-left card-text-container">
                            <v-row>
                                <v-col class="card-text">
                                    ...ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat...
                                </v-col>
                            </v-row>
                        </v-card-text>
                        <v-card-actions class="text-left">
                            <v-btn text class="more-btn">
                                Leer más
                            </v-btn>
                        </v-card-actions>

                    </v-col>
                    <v-col cols="12" sm="4" md="6" lg="6"  style="position: relative;">
                        <div class="gray-panel">
                        </div>
                        <v-img class="d-none d-sm-flex d-md-flex d-lg-flex d-xl-flex" height="100%" width="6.3in"
                               :src="require('@/assets/home/owners.png')">
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
        margin-top: 0.736in;
        margin-bottom: 0.736in;
    }

    .card-title {
        /*margin-bottom: 50px;*/
        font-size: 40pt;
        letter-spacing: 2px;
        color: #040404;
        /*font-weight: 800;*/
        line-height: 44.28pt;
        height: max-content;
        font-family: Montserrat-ExtraBold;
    }

    .card-text {
        line-height: 20pt;
        font-size: 16pt;
        letter-spacing: 1px;
        color: #4d4d4c;
        font-family: Montserrat-Regular;
    }

    .card-text-container {
        margin-top: 20px;
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

    @media screen and (max-width: 360px) {
        .card-title {
            font-size: 28.28pt;
        }
    }

    @media screen and (max-width: 768px) {
        .gray-panel {
            width: 100%;
        }
    }


</style>