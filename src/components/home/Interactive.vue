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
                <v-row class="statistics-title-row" justify="center">
                    <v-col cols="5">
                        <h3 style="text-align: center" class="statistics-title">Total de Hoteles</h3>
                    </v-col>
                    <v-col cols="5">
                        <h3 class="statistics-title" style="text-align: center">Hoteles
                            <v-icon class="primary-color">star</v-icon>
                            <v-icon class="primary-color">star</v-icon>
                            <v-icon class="primary-color">star</v-icon>
                            <v-icon class="primary-color">star</v-icon>
                            <v-icon class="primary-color">star</v-icon>
                        </h3>
                    </v-col>
                </v-row>
                <v-row class="statistics-row" justify="center">
                    <v-col cols="5">
                        <h1 style="text-align: center" class="statistics-value">560</h1>
                    </v-col>
                    <v-col cols="5">
                        <h1 class="statistics-value" style="text-align: center">300</h1>
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <v-col
                            order="2" order-sm="1" order-md="1" order-lg="1" order-xl="1"
                            cols="12" sm="7" md="7" lg="7" xl="7"
                            style="height: max-content;">
                        <v-text-field
                                class="search-box"
                                filled
                                label="Buscar"
                                prepend-inner-icon="search"
                                style="height: 40px;"
                                color="#cc983c"
                        ></v-text-field>
                    </v-col>
                    <v-col
                            class="d-none d-sm-flex d-md-flex d-lg-flex d-xl-flex"
                            order="1" order-sm="2" order-md="2" order-lg="2" order-xl="2"
                            cols="12" sm="4" md="4" lg="4" xl="4"
                            style="height: max-content;">
                        <h3 class="filters-title text-uppercase">Filtros</h3>
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <v-col
                            class="col-hotel-list"
                            cols="12" sm="7" md="7" lg="7" xl="7"
                           order="2" order-sm="1" order-md="1" order-lg="1" order-xl="1">
                        <v-list
                                style="background-color: transparent; height: 100%; overflow-y: scroll"
                                two-line
                                id="list">
                            <v-list-item :key="i" v-for="(h, i) in hotels" @click.stop="showHotelDialog(i)">
                                <v-list-item-content class="list-item">
                                    <v-list-item-title class="list-item-title">
                                        {{h.nombre}}
                                    </v-list-item-title>
                                    <v-list-item-subtitle>
                                       <stars :stars="getCat(h)" :plus="h.cat.plus"></stars>
                                    </v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                        <v-dialog
                                v-model="showInfoDialog"
                                width="max-content"
                                attach="#list">
                            <v-card style="padding: 60px 32px 60px ; background-color: #cc983c; width: 400px; border-radius:0;">
                                <v-icon style="margin-left: 88%" color="black" @click="showInfoDialog=false">clear
                                </v-icon>
                                <v-card-title class="text-uppercase">
                                    <div style="width: 100%; font-family: Montserrat-Bold">
                                        {{hotel.nombre}}
                                    </div>
                                </v-card-title>
                                <v-card-text class="text-uppercase" style="font-family: Montserrat-Light;">
                                    <p> {{hotel.habitaciones}} habitaciones /
                                        {{hotel.provincia.nombre}} /
                                        {{hotel.polo}} /
                                        {{hotel.oper_cu}} /
                                        {{hotel.oper_ext}} / {{hotel.modalidad}}</p>
                                </v-card-text>
                                <v-card-actions>
                                    <div style="width: max-content; margin-left: auto; margin-right: auto">
                                        <stars color="white" :stars="getCat(hotel)" :plus="hotel.cat.plus"></stars>
                                    </div>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-col>
                    <v-col cols="12" sm="4" md="4" lg="4" xl="4"
                           order="1" order-sm="2" order-md="2" order-lg="2" order-xl="2">
                        <v-container fluid class="group-filter-container">
                            <h3 class="group-title">Categoría</h3>
                            <v-checkbox
                                    on-icon="$vuetify.icons.checkboxOff"
                                    color="#cc983c"
                                    class="_vcheck d-none d-sm-flex d-md-flex d-lg-flex d-xl-flex"
                                    :key="c.name"
                                    v-for="c in categories">
                                <template v-slot:label>
                                    <div class="check-label">
                                        {{c.name}}
                                    </div>
                                </template>
                            </v-checkbox>
                            <v-select

                                    color="#cc983c"
                                    class="_vselect d-flex d-sm-none d-md-none d-lg-none d-xl-none"
                                    :items="categories"
                                    item-text="name"
                                    item-value="name">
                            </v-select>
                        </v-container>
                        <v-container fluid>
                            <h3 class="group-title">Operador cubano</h3>
                            <v-checkbox
                                    on-icon="$vuetify.icons.checkboxOff"
                                    color="#cc983c"
                                    class="_vcheck d-none d-sm-flex d-md-flex d-lg-flex d-xl-flex"
                                    :key="m"
                                    v-for="m in managers">
                                <template v-slot:label>
                                    <div class="check-label">
                                        {{m}}
                                    </div>
                                </template>
                            </v-checkbox>
                            <v-select
                                    color="#cc983c"
                                    class="_vselect d-flex d-sm-none d-md-none d-lg-none d-xl-none"
                                    :items="managers"
                                    item-text="name"
                                    item-value="name">
                            </v-select>
                        </v-container>
                        <v-container fluid>
                            <h3 class="group-title">Operador extranjero</h3>
                            <v-checkbox on-icon="$vuetify.icons.checkboxOff" color="#cc983c" class="_vcheck">
                                <template v-slot:label>
                                    <div class="check-label">
                                        Si
                                    </div>
                                </template>
                            </v-checkbox>
                            <v-checkbox color="#cc983c" class="_vcheck">
                                <template v-slot:label>
                                    <div class="check-label">
                                        No
                                    </div>
                                </template>
                            </v-checkbox>
                        </v-container>
                        <v-container fluid>
                            <h3 class="group-title">Ubicación</h3>
                            <v-checkbox
                                    on-icon="$vuetify.icons.checkboxOff"
                                    class="_vcheck d-none d-sm-flex d-md-flex d-lg-flex d-xl-flex" color="#cc983c"
                                    :key="r" v-for="r in regions"
                                    :label="r">
                                <template v-slot:label>
                                    <div class="check-label">
                                        {{r}}
                                    </div>
                                </template>
                            </v-checkbox>
                            <v-select
                                    color="#cc983c"
                                    class="_vselect d-flex d-sm-none d-md-none d-lg-none d-xl-none"
                                    :items="regions"
                                    item-text="name"
                                    item-value="name">
                            </v-select>
                        </v-container>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="2" style="padding-top: 0">
                <div class="horizontal-black-line-up"></div>
            </v-col>
        </v-row>

        <!--- banner -->
        <v-row class="background-img" align="start">
            <v-col cols="3" sm="3" md="3" lg="4" xl="4">
                <v-img height="14.324in" width="7.907in" :src="require('@/assets/home/background.png')"/>
            </v-col>
            <v-col cols="7"  sm="7" md="7" lg="6" xl="6" class="title-component-container">
                <h1 class="map-title text-uppercase">Hoteles</h1>
                <h1 class="map-title text-uppercase">Existentes</h1>
            </v-col>
        </v-row>

        <building-projects></building-projects>
    </div>
</template>

<script>
    import CubaMap from "../CubaMap";
    import {mapGetters} from 'vuex'
    import BuildingProjects from "./BuildingProjects";
    import Stars  from '@/components/Stars'

    export default {
        name: "InteractiveMap",
        components: {BuildingProjects, CubaMap, Stars},
        data() {
            return {
                hotel: {
                    habitaciones: "250",
                    polo: "Centro Tradicional",
                    provincia: {
                        codigo: "OTRO",
                        nombre: "La Habana"
                    },
                    oper_cu: "Grupo de turismo Gaviota SA",
                    oper_ext: "Accor",
                    modalidad: "Ciudad",
                    cat: {
                        estrellas: "5",
                        plus: true
                    },
                },
                showInfoDialog: false
            }
        },
        computed: {
            ...mapGetters(['categories', 'managers', 'regions', 'hotels']),
        },
        methods: {
            showHotelDialog(i) {
                this.showInfoDialog = true
                this.hotel = this.hotels[i]
            },

            getCat(h){
                const cat = parseInt(h.cat.estrellas)
                if(isNaN(cat)){
                    return 0
                } else{
                    return cat
                }

            }
        }
    }
</script>

<style scoped>
    .content-row {
        margin-top: 240px;
    }

    .col-hotel-list{
        height: 10.5in;
    }

    .main-container {
        background-color: #eeeeed;
        height: max-content;
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
        margin-bottom: 1in;
    }

    .primary-color {
        color: #cc983c;
    }

    .list-item {

        font-family: Montserrat-Regular;
    }

    .list-item-title {
        font-size: 17pt;
    }

    ._vcheck {
        height: max-content;
        margin-top: 0;
    }

    .check-label {
        font-family: Montserrat-Regular;
        font-size: 11pt;
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
        width: 100%;
        padding-top: 15px;
        padding-bottom: 15px;
        font-size: 14.21pt;
    }

    .cuba-map {
        position: relative;
        left: 100px;
    }
    .title-component-container{
        margin-top: 1in;
    }

    @media screen and (max-width: 1024px) {
        .cuba-map {
            left: 70px;
        }

        .statistics-value {
            font-size: 55.04pt;
            letter-spacing: 3px;
        }

        .filters-title{
            font-size: 12pt;
        }

        .check-label{
            font-size: 12pt;
        }
    }

    @media screen and (max-width: 960px) {
        .cuba-map {
            left: 70px;
        }

        .map-title {
            letter-spacing: 2px;
            font-size: 28.98pt;
        }

        .title-component-container{
            margin-top: 0.5in;
        }

        .content-row{
            margin-top: 180px;
        }

        .check-label{
            font-size: 11pt;
        }
    }

    @media screen and (max-width: 600px) {

        .statistics-value {
            font-size: 45.04pt;
            letter-spacing: 3px;
        }

        .statistics-title-row{
            margin-top: -60px;
        }

    }

    @media screen and (max-width: 500px) {
        .group-filter-container{

            padding-bottom: 0;
        }

        .group-title{
            font-size: 12pt;
        }
        .check-label{
            font-size: 9pt;
        }
        .map-title {
            letter-spacing: 2px;
            font-size: 21.98pt;
        }

        .content-row{
            margin-top: 140px;
        }
        .statistics-value {
            font-size: 30.04pt;
            letter-spacing: 3px;
            line-height: 1.2pt;
        }

        .statistics-title {
            font-size: 13.71pt;
            letter-spacing: 1px;
        }

        .statistics-title-row{
            margin-top: -100px;
        }

        .cuba-map{
            left: 50px;
        }
    }

    @media screen and (max-width: 320px) {
        .title-component-container{
            padding-left: 0 !important;
        }
        .map-title {
            letter-spacing: 1px;
            font-size: 16.98pt;
        }
        .content-row{
            margin-top: 110px;
        }
        .statistics-value {
            font-size: 20.04pt;
            letter-spacing: 3px;
            line-height: 1.2pt;
        }

        .statistics-title {
            font-size: 10.71pt;
            letter-spacing: 1px;
        }


    }
</style>
<style>
    ._vcheck i {
        align-self: center;
        color: #cc983c !important;
        border-radius: 0 !important;
        width: 14pt;
        height: 14pt;
    }

    ._vcheck .v-input__slot {
      margin-bottom: 0 !important;
    }
    ._vcheck .v-messages {
        display: none  !important;
    }

    .v-input--is-label-active i {
        color: #cc983c !important;
        background-color: #cc983c;
    }
</style>