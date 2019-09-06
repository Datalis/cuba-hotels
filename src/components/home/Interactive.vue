<template>
    <div style="position: relative;">
        <v-row>
            <v-col>
            </v-col>
        </v-row>
        <v-row class="content-row">
            <v-col cols="2" style="padding-bottom: 0">
                <div class="horizontal-black-line"></div>
            </v-col>
            <v-col cols="8" class="main-container">
                <v-row>
                    <v-col cols="12">
                        <cuba-map class="cuba-map"></cuba-map>
                    </v-col>
                </v-row>
                <v-row class="statistics-row" justify="center">
                    <v-col cols="5">
                        <h3 style="text-align: center" class="statistics-title">Total de Hoteles</h3>
                        <h1 style="text-align: center" class="statistics-value">560</h1>
                    </v-col>
                    <v-col cols="5">
                        <h3 class="statistics-title" style="text-align: center">Hoteles
                            <v-icon class="primary-color">star</v-icon>
                            <v-icon class="primary-color">star</v-icon>
                            <v-icon class="primary-color">star</v-icon>
                            <v-icon class="primary-color">star</v-icon>
                            <v-icon class="primary-color">star</v-icon>
                            <v-icon class="primary-color">star</v-icon>
                        </h3>
                        <h1 class="statistics-value" style="text-align: center">300</h1>
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <v-col cols="7">
                        <v-text-field
                                filled
                                label="Buscar"
                                prepend-inner-icon="search"
                        ></v-text-field>
                        <v-dialog
                                v-model="showInfoDialog"
                                width="max-content"
                                attach="#list">
                            <v-card>
                                <v-card-title>
                                    <div style="width: 100%">
                                        Iberostar Gran Packard
                                    </div>
                                </v-card-title>
                                <v-card-text>
                                    <p>Capacidad: 200 habitaciones</p>
                                    <p>Provincia: Ciudad Habana</p>
                                    <p>Polo Turístico: ?</p>
                                    <p>Nombre de los operadores cubanos y extranjeros</p>
                                    <p>Modalidad</p>

                                </v-card-text>
                                <v-card-actions>
                                    <div style="width: max-content; margin-left: auto; margin-right: auto">
                                        <v-icon class="primary-color">star</v-icon>
                                        <v-icon class="primary-color">star</v-icon>
                                        <v-icon class="primary-color">star</v-icon>
                                        <v-icon class="primary-color">star</v-icon>
                                        <v-icon class="primary-color">star</v-icon>
                                        <v-icon class="primary-color">star</v-icon>
                                        Plus
                                    </div>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                        <v-list
                                style="background-color: transparent;"
                                two-line
                                id="list">
                            <v-list-item @click.stop="showHotelDialog()">
                                <v-list-item-content class="list-item">
                                    <v-list-item-title class="list-item-title">
                                        Iberostar Gran Packard
                                    </v-list-item-title>
                                    <v-list-item-subtitle>
                                        <v-icon class="primary-color">star</v-icon>
                                        <v-icon class="primary-color">star</v-icon>
                                        <v-icon class="primary-color">star</v-icon>
                                        <v-icon class="primary-color">star</v-icon>
                                        <v-icon class="primary-color">star</v-icon>
                                        <v-icon class="primary-color">star</v-icon>
                                        Plus
                                    </v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </v-col>
                    <v-col cols="4">
                        <h3 class="filters-title text-uppercase">Filtros</h3>
                        <v-container fluid>
                            <h3 class="group-title">Categoría</h3>
                            <v-checkbox class="_vcheck" :key="c.name" v-for="c in categories">
                                <template v-slot:label>
                                    <div class="check-label">
                                        {{c.name}}
                                    </div>
                                </template>
                            </v-checkbox>
                        </v-container>
                        <v-container fluid>
                            <h3 class="group-title">Operador cubano</h3>
                            <v-checkbox class="_vcheck" :key="m.name" v-for="m in managers">
                                <template v-slot:label>
                                    <div class="check-label">
                                        {{m.name}}
                                    </div>
                                </template>
                            </v-checkbox>
                        </v-container>
                        <v-container fluid>
                            <h3 class="group-title">Operador extranjero</h3>
                            <v-checkbox class="_vcheck">
                                <template v-slot:label>
                                    <div class="check-label">
                                        Si
                                    </div>
                                </template>
                            </v-checkbox>
                            <v-checkbox class="_vcheck">
                                <template v-slot:label>
                                    <div class="check-label">
                                        No
                                    </div>
                                </template>
                            </v-checkbox>
                        </v-container>
                        <v-container fluid>
                            <h3 class="group-title">Ubicación</h3>
                            <v-checkbox class="_vcheck" color="#171716" :key="r.name" v-for="r in regions"
                                        :label="r.name">
                                <template v-slot:label>
                                    <div class="check-label">
                                        {{r.name}}
                                    </div>
                                </template>
                            </v-checkbox>
                        </v-container>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="2" style="padding-top: 0">
                <div class="horizontal-black-line-up"></div>
            </v-col>
        </v-row>
        <v-row style="background-color: #282828; margin-top: 150px">
            <v-col cols="7">
                <v-card>
                    <v-card-title>Proyectos en Construcción</v-card-title>
                    <v-card-text>
                        <v-row>
                            2019 - 2020 - 2030
                        </v-row>
                        <v-list max-height="200" style="overflow-y: scroll">
                            <v-list-item two-line :key="i" v-for="(h, i) in hotels">
                                <v-list-item-content>
                                    <v-list-item-title>{{h}}</v-list-item-title>
                                    <v-list-item-subtitle>
                                        <v-rating :value="5" color="#cc983c" dense readonly></v-rating>
                                    </v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="5" style="padding: 0">
                <v-img :src="require('@/assets/home/activep.png')"/>
            </v-col>
        </v-row>

        <!--- banner -->
        <v-row class="background-img" align="start">
            <v-col cols="5">
                <v-img height="14.324in" width="7.907in" :src="require('@/assets/home/background.png')"/>
            </v-col>
            <v-col cols="6" style="margin-top: 1in">
                <h1 class="map-title text-uppercase">Hoteles</h1>
                <h1 class="map-title text-uppercase">Existentes</h1>
            </v-col>
        </v-row>

    </div>
</template>

<script>
    import CubaMap from "../CubaMap";
    import {mapGetters} from 'vuex'

    export default {
        name: "InteractiveMap",
        components: {CubaMap},
        data() {
            return {
                showInfoDialog: false,
                hotels: ['Paseo del prado', 'Paseo del prado', 'Paseo del prado', 'Paseo del prado', 'Paseo del prado']
            }
        },
        computed: {
            ...mapGetters(['categories', 'managers', 'regions']),
        },
        methods: {
            showHotelDialog() {
                this.showInfoDialog = true
            }
        }
    }
</script>

<style scoped>
    .content-row {
        margin-top: 240px;
    }

    .main-container {
        background-color: #eeeeed;
        height: 20.39in;
    }

    .horizontal-black-line {
        border-bottom: 4px solid black;
        border-radius: 4px;
        height: 100%;
        width: 70%;
    }
    .horizontal-black-line-up {
        border-bottom: 4px solid black;
        border-radius: 4px;
        width: 70%;
        margin-left: auto;
    }

    .map-title {
        letter-spacing: 3px;
        font-size: 34.98pt;
        color: #040404;
        font-family: Montserrat-ExtraBold;
    }


    .statistics-title {
        font-size: 16.71pt;
        letter-spacing: 3px;
        color: #000000;
        font-family: Montserrat-ExtraBold;
        font-weight: 800;
        text-transform: uppercase;
    }

    .statistics-value {
        font-size: 61.04pt;
        letter-spacing: 12px;
        color: #cc983c;
        font-family: Montserrat-ExtraBold;
        font-weight: 800;
    }

    .statistics-row {
        margin-bottom: 2.73in;
    }

    .primary-color {
        color: #cc983c;;
    }

    .list-item {

        font-family: Montserrat-Regular;
    }
    .list-item-title{
        font-size: 17pt;
    }

    ._vcheck {
        height: 30pt;
        margin-top: 0;

    }

    .check-label{
        font-family: Montserrat-Regular;
        font-size: 13.71pt;
        color: #171716;
    }

    .group-title {
        margin-bottom: 3px;
        color: #171716;
        font-family: Montserrat-Regular;
    }

    .background-img {
        position: absolute;
        top: 0;
        z-index: -1;
        width: 100%;
    }



    .filters-title {
        text-align: center;
        font-family: Montserrat-ExtraBold;
        background-color: #cc983c;
        width: max-content;
        padding: 15px 65pt;
        font-size: 14.21pt;
    }

    .cuba-map {
        position: relative;
        left: 100px;
    }

</style>