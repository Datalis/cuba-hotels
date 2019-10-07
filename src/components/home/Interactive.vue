<template>
    <div style="position: relative;">
        <v-row>
            <v-col>
            </v-col>
        </v-row>
        <v-row class="content-row">
            <v-col cols="2" sm="1" md="2" lg="2" xl="2" style="padding-bottom: 0">
                <div class="horizontal-black-line"></div>
            </v-col>
            <v-col cols="8" sm="10" md="8" lg="8" xl="8" class="main-container">
                <v-row>
                    <v-col cols="9">
                        <v-row class="statistics-title-row" justify="center">
                            <v-col cols="5" class="pb-0 pl-sm-0 pr-sm-0">
                                <h3 style="text-align: center" class="statistics-title">Total de Hoteles</h3>
                            </v-col>
                            <v-col cols="5" class="pb-0 pr-sm-0">
                                <h3 class="statistics-title" style="text-align: center">Hoteles
                                    <p class="divider ma-0"></p>
                                    <v-icon class="primary-color cat-icon">star</v-icon>
                                    <v-icon class="primary-color cat-icon">star</v-icon>
                                    <v-icon class="primary-color cat-icon">star</v-icon>
                                    <v-icon class="primary-color cat-icon">star</v-icon>
                                    <v-icon class="primary-color cat-icon">star</v-icon>
                                </h3>

                            </v-col>
                        </v-row>
                        <v-row class="statistics-row" justify="center">
                            <v-col cols="5" class="pt-0">
                                <h1 style="text-align: center" class="statistics-value">381</h1>
                            </v-col>
                            <v-col cols="5" class="pt-0">
                                <h1 class="statistics-value" style="text-align: center">67</h1>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="3">
                        <div class="map-date">
                            Octubre 2019
                        </div>
                    </v-col>
                    <v-col cols="12" class="map-col">
                        <cuba-map class="cuba-map"></cuba-map>
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <v-col
                            order="2" order-sm="1" order-md="1" order-lg="1" order-xl="1"
                            cols="12" sm="7" md="7" lg="7" xl="7"
                            style="height: max-content;">
                        <v-text-field
                                v-model="filters.text"
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
                            <v-list-item :key="i" v-for="(h, i) in filteredHotels"
                                         class="pl-1"
                                         style="height: 55px !important; min-height: 55px !important;"
                                         @click.stop="showHotelDialog(i)">
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
                            <v-card style="padding: 20px 32px 10px ; background-color: #cc983c; width: 400px; border-radius:0;">
                                <v-icon style="margin-left: 88%" color="black" @click="showInfoDialog=false">clear
                                </v-icon>
                                <v-card-actions>
                                    <div style="width: max-content; margin-left: auto; margin-right: auto">
                                        <stars color="white" :stars="getCat(hotel)" :plus="hotel.cat.plus"></stars>
                                    </div>
                                </v-card-actions>
                                <v-card-title class="text-uppercase text-center">
                                    <div style="width: 100%; font-family: Montserrat-Bold; font-size: 13pt !important; line-height: 16pt">
                                        {{hotel.nombre}}
                                    </div>
                                    <p class="text-center mb-0" style="width: 100%; font-family: Montserrat-Light; font-size: 13pt !important;  line-height: 16pt"> {{hotel.habitaciones}} habitaciones</p>
                                    <p class="text-center" style="width: 100%; font-family: Montserrat-Light; font-size: 13pt !important;  line-height: 16pt"> {{hotel.modalidad}}</p>
                                </v-card-title>
                                <v-card-text style="font-family: Montserrat-Bold; color: #000;">
                                    <p style="font-size: 13pt !important;  line-height: 16pt"><span style="font-family: Montserrat-Regular">Ubicación:</span> {{hotel.provincia.nombre}} / {{hotel.polo}} </p>
                                    <p style="font-size: 13pt !important;  line-height: 16pt"><span style="font-family: Montserrat-Regular">A cargo de:</span> {{hotel.oper_cu}} / {{hotel.oper_ext}}</p>
                                </v-card-text>

                            </v-card>
                        </v-dialog>
                    </v-col>
                    <v-col cols="12" sm="4" md="4" lg="4" xl="4"
                           class="pr-0"
                           order="1" order-sm="2" order-md="2" order-lg="2" order-xl="2">
                        <v-container fluid class="group-filter-container pt-0">
                            <h3 class="group-title">Categoría</h3>
                            <v-checkbox
                                    multiple
                                    v-model="filters.categories"
                                    on-icon="$vuetify.icons.checkboxOff"
                                    color="#cc983c"
                                    class="_vcheck d-none d-sm-flex d-md-flex d-lg-flex d-xl-flex pt-0"
                                    :key="c.name"
                                    :value="c.val"
                                    v-for="c in categories">
                                <template v-slot:label>
                                    <div class="check-label">
                                        {{c.name}}
                                    </div>
                                </template>
                            </v-checkbox>
                            <v-select
                                    v-model="filters.categories"
                                    color="#cc983c"
                                    class="_vselect d-flex d-sm-none d-md-none d-lg-none d-xl-none pt-0"
                                    :items="categories"
                                    item-text="name"
                                    item-value="val"
                                    multiple
                                    chips
                                    deletable-chips>
                                <template v-slot:item="{ item }">
                                    <div class="check-label">
                                        {{item.name}}
                                    </div>
                                </template>
                                <!--                                <template v-slot:selection="{ item, index }">-->
                                <!--                                    <div class="check-label" style="margin-right: 2px">-->
                                <!--                                        {{item.name}}-->
                                <!--                                    </div>-->
                                <!--                                </template>-->
                            </v-select>
                        </v-container>
                        <v-container fluid class="pt-0">
                            <h3 class="group-title">Operador cubano</h3>
                            <v-checkbox
                                    multiple
                                    v-model="filters.opers_cu"
                                    on-icon="$vuetify.icons.checkboxOff"
                                    color="#cc983c"
                                    class="_vcheck d-none d-sm-flex d-md-flex d-lg-flex d-xl-flex pt-0"
                                    :value="m"
                                    :key="m"
                                    v-for="m in managers">
                                <template v-slot:label>
                                    <div class="check-label">
                                        {{m}}
                                    </div>
                                </template>
                            </v-checkbox>
                            <v-select
                                    v-model="filters.opers_cu"
                                    color="#cc983c"
                                    class="_vselect d-flex d-sm-none d-md-none d-lg-none d-xl-none pt-0"
                                    :items="managers"
                                    item-text="item"
                                    item-value="item"
                                    multiple
                                    chips
                                    deletable-chips>
                                <template v-slot:item="{ item }">
                                    <div class="check-label">
                                        {{item}}
                                    </div>
                                </template>
                            </v-select>
                        </v-container>
                        <v-container fluid class="pt-0">
                            <h3 class="group-title">Operador extranjero</h3>
                            <v-checkbox v-model="filters.opers_ext" :false-value="0" :true-value="1"
                                        on-icon="$vuetify.icons.checkboxOff" color="#cc983c" class="_vcheck">
                                <template v-slot:label>
                                    <div class="check-label">
                                        Si
                                    </div>
                                </template>
                            </v-checkbox>
                            <v-checkbox v-model="filters.opers_ext" :false-value="0" :true-value="-1" color="#cc983c"
                                        class="_vcheck">
                                <template v-slot:label>
                                    <div class="check-label">
                                        No
                                    </div>
                                </template>
                            </v-checkbox>
                        </v-container>
                        <v-container fluid class="pt-0">
                            <h3 class="group-title">Ubicación</h3>
                            <v-checkbox
                                    multiple
                                    v-model="filters.regions"
                                    on-icon="$vuetify.icons.checkboxOff"
                                    class="_vcheck d-none d-sm-flex d-md-flex d-lg-flex d-xl-flex pt-0" color="#cc983c"
                                    :value="r"
                                    :key="r" v-for="r in regions"
                                    :label="r">
                                <template v-slot:label>
                                    <div class="check-label">
                                        {{r}}
                                    </div>
                                </template>
                            </v-checkbox>
                            <v-select
                                    v-model="filters.regions"
                                    color="#cc983c"
                                    class="_vselect d-flex d-sm-none d-md-none d-lg-none d-xl-none"
                                    :items="regions"
                                    item-text="item"
                                    item-value="item"
                                    multiple
                                    chips
                                    deletable-chips>
                                <template v-slot:item="{ item }">
                                    <div class="check-label">
                                        {{item}}
                                    </div>
                                </template>
                            </v-select>
                        </v-container>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="2" sm="1" md="2" lg="2" xl="2" style="padding-top: 0">
                <div class="horizontal-black-line-up"></div>
            </v-col>
        </v-row>

        <!--- banner -->
        <v-row class="background-img" align="start">
            <v-col cols="3" sm="3" md="3" lg="4" xl="4">
                <v-img height="14.324in" width="7.907in" :src="require('@/assets/home/background.jpg')"/>
            </v-col>
            <v-col cols="7" sm="7" md="7" lg="6" xl="6" class="title-component-container">
                <h1 class="map-title text-uppercase">Hoteles Existentes</h1>
            </v-col>
        </v-row>
        <building-projects></building-projects>
    </div>
</template>

<script>
    import CubaMap from "../graphics/CubaMap";
    import {mapGetters} from 'vuex'
    import BuildingProjects from "./BuildingProjects";
    import Stars from '@/components/Stars'

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
                filters: {
                    text: "",
                    categories: [],
                    opers_cu: [],
                    opers_ext: 0,
                    regions: []
                },
                showInfoDialog: false
            }
        },
        computed: {
            ...mapGetters(['categories', 'managers', 'regions', 'hotels']),
            filteredHotels() {
                return this.hotels.filter(h => {
                    const matchCategories = (this.filters.categories.length === 0 || this.filters.categories.includes(this.getCat(h)))
                    const matchRegions = (this.filters.regions.length === 0 || this.filters.regions.includes(h.provincia.nombre))
                    const matchOpersCu = (this.filters.opers_cu.length === 0 || this.filters.opers_cu.includes(h.oper_cu))
                    if (this.filters.opers_ext > 0) {
                        var match = matchCategories && matchRegions && matchOpersCu && h.oper_ext.length > 0
                    } else if (this.filters.opers_ext < 0) {
                        match = matchCategories && matchRegions && matchOpersCu && h.oper_ext.length === 0
                    } else {
                        match = matchCategories && matchRegions && matchOpersCu
                    }
                    return (match && h.nombre.toLowerCase().includes(this.filters.text.toLowerCase()))
                })
            }
        },
        methods: {
            showHotelDialog(i) {
                this.showInfoDialog = true
                this.hotel = this.filteredHotels[i]
            },
            getCat(h) {
                const cat = parseInt(h.cat.estrellas)
                if (isNaN(cat)) {
                    return 0
                } else {
                    return cat
                }
            }
        }
    }
</script>

<style scoped>
    .content-row {
        margin-top: 125px;
    }

    .map-title {
        letter-spacing: 3px;
        font-size: 22pt;
        line-height: 28pt;
        color: #040404;
        font-family: Montserrat-ExtraBold;
    }

    .main-container {
        background-color: #eeeeed;
        height: max-content;
    }

    .statistics-title {
        font-size: 12.71pt;
        line-height: 14pt;
        letter-spacing: 3px;
        color: #000000;
        font-family: Montserrat-ExtraBold;
        text-transform: uppercase;
    }

    .statistics-value {
        font-size: 20.04pt;
        line-height: 22pt;
        letter-spacing: 12px;
        color: #cc983c;
        font-family: Montserrat-ExtraBold;
    }

    .cat-icon{
        font-size: 15px;
    }
    .statistics-row {
        margin-bottom: 0.4in;
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

    .col-hotel-list {
        height: 10.5in;
    }

    .primary-color {
        color: #cc983c;
    }

    .list-item {
        font-family: Montserrat-Regular;
    }

    .list-item-title {
        font-size: 12pt;
        letter-spacing: 1px;
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
        margin-top: -125px;
        margin-left: 50px;
    }

    .title-component-container {
        margin-top: 1in;
    }

    .divider {
        display: none;
    }

    .map-date {
        font-family: Montserrat-Light;
        font-size: 20.93pt;
        position: relative;
    }

    @media screen and (max-width: 1024px) {
        .content-row {
            margin-top: 125px;
        }

        .map-title {
            font-size: 22pt;
            line-height: 28pt;
        }

        .filters-title {
            font-size: 12pt;
        }

        .map-date {
            font-size: 18pt;
        }
    }

    @media screen and (max-width: 960px) {
        .content-row {
            margin-top: 75px;
        }

        .map-title {
            font-size: 22pt;
            line-height: 25pt;
            letter-spacing: 2px;
        }

        .title-component-container {
            margin-top: 0.5in;
        }

        .statistics-title {
            font-size: 12.71pt;
            line-height: 14pt;
            letter-spacing: 2px;
        }

    }

    @media screen and (max-width: 720px) {
        .statistics-title {
            font-size: 12.71pt;
            line-height: 14pt;
            letter-spacing: 2px;
        }

        .statistics-value {
            font-size: 20.04pt;
            line-height: 22pt;
            letter-spacing: 8px;
            color: #cc983c;
        }
    }

    @media screen and (max-width: 600px) {
        .cuba-map {
            position: relative;
            left: 0;
        }

        .cat-icon {
            font-size: 15px;
        }

        .list-item-title {
            font-size: 11pt;
            letter-spacing: .2px;
        }

        .filters-title {
            padding-top: 15px;
            padding-bottom: 15px;
            font-size: 12pt;
        }

        .check-label {
            font-size: 10pt;
        }

        .group-title {
            font-size: 11pt;
        }

        .map-date {
            font-size: 15.93pt;
            margin-bottom: -40px;
        }
    }

    @media screen and (max-width: 599px) {
        .divider {
            display: block;
        }

        .search-box {
            margin-bottom: 30px !important;
        }

        .col-hotel-list {
            height: 5in;
        }

        .col-hotel-list {
            padding-left: 24px;
        }

        .map-col {
            overflow-x: scroll;
            overflow-y: hidden;
            height: 300px;
        }

        .map-date {
            font-size: 15.93pt;
            margin-bottom: -40px;
        }

    }

    @media screen and (max-width: 500px) {
        .map-title {
            font-size: 19.28pt;
            line-height: 21.28pt;
            letter-spacing: 1px;
        }

        .content-row {
            margin-top: 100px;
        }

        .title-component-container {
            padding-left: 0 !important;
        }


    }

    @media screen and (max-width: 450px) {
        .map-date {
            font-size: 15.93pt;
            margin-bottom: -40px;
        }

        .cat-icon {
            font-size: 12px;
        }

        .statistics-title {
            font-size: 8pt;
            line-height: 10pt;
            letter-spacing: 1px;
        }

        .statistics-value {
            font-size: 16pt;
            line-height: 20pt;
            letter-spacing: 8px;
            color: #cc983c;
        }

        .map-col {
            overflow-x: scroll;
            overflow-y: hidden;
            height: 220px;
        }
    }

    @media screen and (max-width: 400px) {
        .statistics-title {
            font-size: 8pt;
            line-height: 10pt;
            letter-spacing: 1px;
        }

        .statistics-value {
            font-size: 16pt;
            line-height: 20pt;
            letter-spacing: 8px;
            color: #cc983c;
        }

        .cat-icon {
            font-size: 10px;
        }

        .map-date {
            font-size: 13.93pt;
        }
    }

    @media screen and (max-width: 320px) {
        /*.cat-icon {*/
        /*    font-size: 12px;*/
        /*}*/
    }
</style>
<style>
    ._vcheck i {
        align-self: center;
        color: #cc983c !important;
        border-radius: 0 !important;
        font-size: 20px !important;
    }

    ._vcheck .v-input--selection-controls__input {
        margin-right: 2px !important;
    }

    ._vcheck .v-input__slot {
        margin-bottom: 0 !important;
    }

    ._vcheck .v-messages {
        display: none !important;
    }

    ._vcheck.v-input--is-label-active i {
        color: #cc983c !important;
        background-color: #cc983c;
        font-size: 16px !important;
        margin-left: 2px;

    }

    ._vselect .v-chip__content {
        font-family: Montserrat-Regular;
        font-size: 10pt;
        color: #171716;
    }

</style>