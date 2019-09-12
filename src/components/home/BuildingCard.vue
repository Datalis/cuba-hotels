<template>
    <v-row>
        <v-col cols="2">

        </v-col>
        <v-col cols="10">
            <v-card color="gray" flat>
                <v-row no-gutters>
                    <v-col cols="12" sm="4" md="6" lg="5">
                        <v-img height="100%" width="6.76in" :src="require('@/assets/home/building.png')">
                        </v-img>
                    </v-col>
                    <v-col cols="12" sm="8" md="6" lg="5" style="position: relative;">
                        <v-card-title class="card-title-container text-left">
                            <h1 class="card-title text-uppercase">
                                La apuesta es construir
                            </h1>
                        </v-card-title>
                        <v-divider
                                style="margin-left: auto; width: 45%; border-bottom: 4px solid var(--primary-color); border-radius: 4px"></v-divider>
                        <v-card-text class="card-text-container text-left">
                            <v-row>
                                <v-col class="card-text">
                                    ...ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat...
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
        margin-top: 0.40in;
        margin-bottom: 0.40in;
        /*height: 2.63in;*/
        /*0.7in*/
        margin-left: 0.4in;
    }

    .card-title {
        margin-bottom: 10px;

        line-height: 55.28pt;
        font-size: 44.28pt;
        letter-spacing: 3px;
        color: #040404;
        font-family: Montserrat-ExtraBold;
    }

    .card-text-container {
        margin-top: 0.44in;
    }


    .card-text {
        font-size: 17pt;
        letter-spacing: 1px;
        color: #4d4d4c;
        margin-left: 0.4in;
    }

    .more-btn {
        margin-left: auto;
        margin-bottom: 50px;
        text-transform: uppercase;
        color: var(--primary-color);
        font-size: 22.3pt;
        font-family: Montserrat-Light;
    }

    .gray-panel {
        background-color: rgba(58, 58, 58, 0.2);
        width: 50%;
        height: 100%;
        position: absolute;
        top: 0;
    }


    @media screen and (max-width: 360px) {
        .card-title {
            font-size: 19.28pt;
            line-height: 19.28pt;
        }
    }
</style>