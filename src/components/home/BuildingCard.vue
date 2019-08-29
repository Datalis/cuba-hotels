<template>
    <v-row style="margin-top: 300px;">
        <v-col cols="2">

        </v-col>
        <v-col cols="8">
            <v-card color="gray" flat>
                <v-layout row pl-lg-5>
                    <v-flex xs6>
                        <v-img height="496" width="496" :src="require('@/assets/home/owners.png')">
                        </v-img>
                    </v-flex>
                    <v-flex xs6>
                        <v-card-title style="margin-top: 10px;" class="text-left">
                            <h1 style="margin-bottom: 10px; text-transform: uppercase; line-height: 46px; font-size: 44px; letter-spacing: 9px; color: #040404; font-weight: 800;">
                                La apuesta es construir</h1>

                            <div style="width: 45%; border-bottom: 2px solid #dd9526; "></div>
                        </v-card-title>
                        <div style="position: relative;" >
                            <v-card-text class="text-left" style="margin-top: 50px; ">
                                <v-flex style="background-color: transparent; width: 390px; height: 135px; font-size: 17px; letter-spacing: 1px;  color: #4d4d4c; font-weight: 400;">
                                    ...ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat...
                                </v-flex>

                            </v-card-text>
                            <v-card-actions class="text-right">
                                <v-flex style="margin-top: 50px; text-transform: uppercase; color: #dd9526">Leer más
                                </v-flex>
                            </v-card-actions>
                            <div style="background-color: rgba(0,0,0,0.2); width:50%; height: 200%; position: absolute; top: 0; left: 50%">

                            </div>
                        </div>
                    </v-flex>
                </v-layout>
            </v-card>
        </v-col>
        <v-col cols="2">
        </v-col>
    </v-row>
</template>

<script>
    export default {
        name: "BuildingCard"
    }
</script>

<style scoped>

</style>