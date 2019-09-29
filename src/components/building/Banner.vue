<template>
    <div style="width: 100%">
        <v-row no-gutters>
            <v-col cols="7">
                <v-img :src="require('@/assets/building/banner.png')" min-height="450px"></v-img>
            </v-col>
            <v-col cols="5" style="position: relative">
                <v-img :src="require('@/assets/building/banner2.png')" min-height="270"></v-img>
                <v-row no-gutters style="position: absolute; top: 0; width: 100%; height: 100%" justify="end" align="end">
                    <v-col cols="6" style="height: 80%" >
                        <div style="background-color: #eeeeed; width: 100%; height: 100%">

                        </div>
                    </v-col>
                    <v-col cols="6" align="end">
                        <div>
                            <div style="margin-left: -90%;">
                                <h1 class="text-left banner-title">
                                    La apuesta</h1>
                                <h1 class="text-left banner-title">
                                    es</h1>
                                <h1 class="text-left banner-title">
                                    Construir</h1>
                            </div>
                        </div>
                        <div style="border-bottom: 2px solid black; width: 80%; margin-left: auto">

                        </div>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        name: "Banner"
    }
</script>

<style scoped>
    .banner-title {
        white-space: nowrap;
        font-size: 44.28pt;
        text-transform: uppercase;
        letter-spacing: 3px;
        font-family: Montserrat-ExtraBold;
    }

    @media screen and (max-width: 1200px) {
        .banner-title {
            font-size: 40.28pt;
        }
    }
    @media screen and (max-width: 1100px) {
        .banner-title {
            font-size: 30.28pt;
        }
    }
    @media screen and (max-width: 900px) {
        .banner-title {
            font-size: 25.28pt;
        }
    }

    @media screen and (max-width: 750px) {
        .banner-title {
            font-size: 20.28pt;
            letter-spacing: 2px;
        }
    }
    @media screen and (max-width: 600px) {
        .banner-title {
            font-size: 18.28pt;
            letter-spacing: 2px;
        }
    }
    @media screen and (max-width: 500px) {
        .banner-title {
            font-size: 13.28pt;
            letter-spacing: 2px;
        }
    }
    @media screen and (max-width: 400px) {
        .banner-title {
            font-size: 10.28pt;
            letter-spacing: 2px;
        }
    }
</style>