<template>
    <div style="width: 100%">
        <v-row no-gutters>
            <v-col cols="7">
                <v-img :src="require('@/assets/building/banner.png')"></v-img>
            </v-col>
            <v-col cols="5" style="position: relative">
                <v-img :src="require('@/assets/building/banner2.png')"></v-img>
                <v-row no-gutters style="position: absolute; top: 0; width: 100%; height: 100%" align="end">
                    <v-col cols="6">
                        <div style="background-color: #eeeeed; width: 100%; height: 700px;">

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
</style>