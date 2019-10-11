<template>
    <v-row class="container-row" justify="end" align="center">
        <v-col cols="1" sm="1" md="1" lg="1" xl="1" class="d-none d-sm-none d-md-none d-lg-flex d-xl-flex">
        </v-col>
        <v-col cols="11" sm="10" md="7" lg="5" xl="5" class="pl-0 pl-sm-0 pl-md-12 pl-lg-0 pl-xl-0">
            <div class="card-title text-uppercase text-left">Proyectos en</div>
            <div class="card-title text-uppercase text-left">Construcción</div>
            <v-row align="center" justify="start">
                <v-col cols="3" :class="{period: true, handhover:true, active:isActive(first_year), 'pb-0': true}"
                       @click="setActiveYear(first_year)">
                    {{getYear(first_year)}}
                </v-col>
                <v-col cols="1" class="period pb-0">-</v-col>
                <v-col cols="3" :class="{period: true, handhover:true, active:isActive(middle_year),'pb-0': true}"
                       @click="setActiveYear(middle_year)">{{getYear(middle_year)}}
                </v-col>
                <v-col cols="1" class="period pb-0">-</v-col>
                <v-col cols="3" :class="{period: true, handhover:true, active:isActive(last_year),'pb-0': true}"
                       @click="setActiveYear(last_year)">{{getYear(last_year)}}
                </v-col>
                <v-col cols="1" class="pb-0 mb-n1">
                    <v-icon color="white" @click="shiftLeft">keyboard_arrow_left</v-icon>
                    <v-icon color="white" @click="shiftRight">keyboard_arrow_right</v-icon>
                </v-col>
            </v-row>
            <v-checkbox v-model="ptype" class="gray-check" style="margin-right: 50px; width: max-content; display: inline-block" value="Nuevo">
                <template v-slot:label>
                    <div :class="{'filter-span': true, 'filter-span-active': ptype==='Nuevo'}">
                        Nuevos
                    </div>
                </template>
            </v-checkbox>
            <v-checkbox v-model="ptype" class="gray-check" style="width: max-content; display: inline-block" value="Ampliación">
                <template v-slot:label>
                    <div :class="{'filter-span': true, 'filter-span-active': ptype==='Ampliación'}">
                        Ampliaciones / Remodelaciones
                    </div>
                </template>
            </v-checkbox>
            <v-list ref="list" class="project-list pt-0 mt-3" max-height="3.5in" max-width="90%">
                <div :key="i" :class="'y'+i" :ref="'y'+i" v-for="(y,i) in years">
                    <v-divider v-if="i>0" :key="'y'+i" color="#3b3b3b" class="mt-3"
                               style="boder: none !important;"></v-divider>
                    <v-list-item
                            style="min-height: 42px !important;"
                            :key="h.nombre"
                            v-for="h in filteredProjects.filter(p=>p.fecha_fin === y+'')"
                            class="pl-0"
                            two-line
                            @click="showPopup(h)">
                        <v-list-item-content class="pb-0 pt-0">
                            <v-list-item-title
                                    :class="{'item-title': true, 'primary-color': h.id === hotel.id && showDetails, 'text-wrap': true}">
                                {{h.nombre}}
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </div>
            </v-list>
        </v-col>
        <v-col cols="1" sm="5" md="5" lg="5" xl="5" class="pa-0 d-none d-sm-none d-md-flex d-lg-flex d-xl-flex">
            <v-img height="7in" :src="require('@/assets/home/activep.jpg')">
                <transition name="slide-fade">
                    <v-card class="text-uppercase" v-show="showDetails"
                            style="margin-top: 150px; padding: 25px 32px 25px ; background-color: #cc983c; width: 400px;border-radius:0; height: 400px">
                        <v-icon style="margin-left: 88%" color="black" @click="hidePopup()">clear</v-icon>
                        <v-card-text class="pt-0"
                                     style="font-family: Montserrat-ExtraBold; color:#171716; font-size: 11pt; letter-spacing: 1px">
                            <stars class="text-center" :stars="getCat(hotel)" color="white"></stars>
                            <p class="mb-0 text-uppercase text-center"
                               style="text-transform: none; font-family: Montserrat-Bold;">
                                {{hotel.habitaciones}} habitaciones</p>
                            <p class="mb-9 text-uppercase text-center"
                               style="text-transform: none; font-family: Montserrat-Bold">
                                $ {{hotel.costo}}</p>

                            <p class="mb-0"
                               style="text-transform: none; font-family: Montserrat-Bold; letter-spacing: 0">
                                <span style="font-family: Montserrat-Regular">Ubicación: </span>{{hotel.localizacion}}. {{hotel.provincia.nombre}}</p>
                            <p class="mb-0"
                               style="text-transform: none; font-family: Montserrat-Bold; letter-spacing: 0">
                                <span style="font-family: Montserrat-Regular">A cargo de: </span>{{hotel.cadena}}</p>

                            <p class="mb-0"
                               style="text-transform: none; font-family: Montserrat-Bold; letter-spacing: 0">
                                <span style="font-family: Montserrat-Regular">Previsto para: </span>{{hotel.fecha_fin}}</p>

                            <p class="mb-3"
                               style="text-transform: none; font-family: Montserrat-Bold; letter-spacing: 0">
                                <span style="font-family: Montserrat-Regular">Estado de la obra: </span>{{hotel.est_inv}}</p>
                        </v-card-text>
                        <v-card-actions>
                            <div style="font-family: Montserrat-Light; color:#ffffff; font-size: 10pt; width: max-content; margin-left: auto; margin-right: auto">
                                {{hotel.tipo}}
                            </div>
                        </v-card-actions>
                    </v-card>
                </transition>
            </v-img>
        </v-col>

        <v-dialog
                width="max-content"
                v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm"
                v-model="showDetails"
        style="border-radius: 0!important;">
            <v-card class="text-uppercase" v-show="showDetails"
                    style="padding: 25px 32px 25px ; background-color: #cc983c; width: 400px;border-radius:0 !important; height: 400px">
                <v-icon style="margin-left: 88%" color="black" @click="hidePopup()">clear</v-icon>
                <v-card-text class="pt-0"
                             style="font-family: Montserrat-ExtraBold; color:#171716; font-size: 11pt; letter-spacing: 1px">
                    <stars class="text-center" :stars="getCat(hotel)" color="white"></stars>
                    <p class="mb-0 text-uppercase text-center"
                       style="text-transform: none; font-family: Montserrat-Bold;">
                        {{hotel.habitaciones}} habitaciones</p>
                    <p class="mb-9 text-uppercase text-center"
                       style="text-transform: none; font-family: Montserrat-Bold">
                        $ {{hotel.costo}}</p>

                    <p class="mb-0"
                       style="text-transform: none; font-family: Montserrat-Bold; letter-spacing: 0">
                        <span style="font-family: Montserrat-Regular">Ubicación: </span>{{hotel.localizacion}}. {{hotel.provincia.nombre}}</p>
                    <p class="mb-0"
                       style="text-transform: none; font-family: Montserrat-Bold; letter-spacing: 0">
                        <span style="font-family: Montserrat-Regular">A cargo de: </span>{{hotel.cadena}}</p>

                    <p class="mb-0"
                       style="text-transform: none; font-family: Montserrat-Bold; letter-spacing: 0">
                        <span style="font-family: Montserrat-Regular">Previsto para: </span>{{hotel.fecha_fin}}</p>

                    <p class="mb-3"
                       style="text-transform: none; font-family: Montserrat-Bold; letter-spacing: 0">
                        <span style="font-family: Montserrat-Regular">Estado de la obra: </span>{{hotel.est_inv}}</p>
                </v-card-text>
                <v-card-actions>
                    <div style="font-family: Montserrat-Light; color:#ffffff; font-size: 10pt; width: max-content; margin-left: auto; margin-right: auto">
                        {{hotel.tipo}}
                    </div>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
    import {mapGetters} from 'vuex'
    import Stars from '@/components/Stars'

    export default {
        name: "BuildingProjects",
        components: {Stars},
        data() {
            return {
                active_year: 0,
                first_year: 0,
                middle_year: 1,
                last_year: 2,
                showDetails: false,
                hotel: {
                    "cadena": "Grupo Hotelero Cubanacán SA",
                    "cat": "9",
                    "est_inv": "CACH",
                    "est_negocio": "Propio",
                    "fecha_fin": "2018",
                    "fecha_ini": "5",
                    "ha": "4669600",
                    "habitaciones": "",
                    "id": 0,
                    "localizacion": "Cayo Levisa",
                    "modalidad": "Hotel",
                    "nombre": "Hotel Cayo Levisa. 2da ampliación",
                    "propiedad": "2018",
                    "provincia": {
                        "codigo": "cu-pr",
                        "nombre": "Pinar del Río"
                    },
                    "suelo": "Ejecución",
                    "tipo": "Ampliación"
                },
                ptype: ''
            }
        },
        computed: {
            ...mapGetters(['projects', 'years']),
            filteredProjects() {
                return this.projects.filter(p => {
                    if (this.ptype === 'Ampliación') {
                        return p.tipo !== 'Nuevo'
                    } else if (this.ptype === 'Nuevo') {
                        return p.tipo === 'Nuevo'
                    } else {
                        return true
                    }
                })
            }
        },

        mounted() {
            console.log(this.$vuetify.breakpoint)
            const me = this
            this.$refs.list.$el.addEventListener('scroll', function () {
                const year = me.getActiveIYear()
                if (year > -1) {
                    if (year > me.last_year) {
                        me.shiftRight()
                    }
                    if (year < me.first_year) {
                        me.shiftLeft()
                    }
                    me.active_year = year
                }
            })
        },
        methods: {
            setType(ptype) {
                if (ptype === this.ptype) {
                    this.ptype = ''
                } else {
                    this.ptype = ptype
                }

            },
            getCat(h) {
                const cat = parseInt(h.cat)
                if (isNaN(cat)) {
                    return 0
                } else {
                    return cat
                }

            },
            getCost(h) {
                const cat = parseInt(h.cat)
                if (isNaN(cat)) {
                    return 0
                } else {
                    return cat
                }
            },
            showPopup(h) {
                this.hotel = h
                this.showDetails = true
            },
            hidePopup() {
                this.showDetails = false
            },
            scrollToYear(iyear) {
                const parentOffset = this.$refs.list.$el.offsetTop
                const ref = 'y' + iyear
                const offset = this.$refs[ref][0].offsetTop
                this.$refs.list.$el.scroll(0, offset - parentOffset)
            },
            isActive(iyear) {
                return this.active_year === iyear
            },
            setActiveYear(iyear) {
                this.active_year = iyear
                this.scrollToYear(iyear)
            },
            getYear(iyear) {
                return this.years[iyear]
            },
            getActiveIYear() {
                return this.years.findIndex((y, iyear) => {
                    const ref = 'y' + iyear
                    const top = this.$refs.list.$el.scrollTop
                    const parentOffset = this.$refs.list.$el.offsetTop
                    const itemOffset = this.$refs[ref][0].offsetTop
                    const offset = itemOffset - parentOffset
                    const height = this.$refs.list.$el.offsetHeight
                    return (offset >= top && offset <= top + height)
                })
            },
            shiftRight() {
                if (this.years[this.last_year + 1]) {
                    this.last_year = this.last_year + 1
                    this.middle_year = this.middle_year + 1
                    this.first_year = this.first_year + 1
                }
                if (this.years[this.last_year + 1]) {
                    this.last_year = this.last_year + 1
                    this.middle_year = this.middle_year + 1
                    this.first_year = this.first_year + 1
                }
            },
            shiftLeft() {
                if (this.years[this.first_year - 1]) {
                    this.last_year = this.last_year - 1
                    this.middle_year = this.middle_year - 1
                    this.first_year = this.first_year - 1
                }
                if (this.years[this.first_year - 1]) {
                    this.last_year = this.last_year - 1
                    this.middle_year = this.middle_year - 1
                    this.first_year = this.first_year - 1
                }
            }
        }
    }
</script>

<style scoped>
    .check-label {
        font-family: Montserrat-Regular;
        font-size: 11pt;
        color: #171716;
    }

    .container-row {
        background-color: #282828;
        margin-top: 150px
    }

    .card-title {
        letter-spacing: 4px;
        font-size: 30pt;
        color: #cc983c;
        font-family: Montserrat-ExtraBold;
    }

    .period {
        color: #b6b4b2;
        font-family: Montserrat-Light;
        font-size: 39.61pt;
    }

    .active {
        color: #cc983c;
        font-family: Montserrat-ExtraBold;
    }


    .item-title {
        color: #b6b4b2;
        font-size: 12pt;
        letter-spacing: 1px;
        font-family: Montserrat-Regular;
    }

    .project-list {
        overflow-y: scroll;
        background-color: transparent !important;
    }

    /* width */
    ::-webkit-scrollbar {
        width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background-color: white;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: var(--primary-color);
    }

    .handhover:hover {
        cursor: pointer;
    }

    .filter-span {
        cursor: pointer;
        font-family: Montserrat-Light;
        color: #4d4d4c;
    }

    .filter-span-active {
        color: #cc983c;
    }

    .primary-color {
        color: #cc983c;
    }

    @media screen and (max-width: 960px) {
        .card-title {
            font-size: 22pt
        }

        .period {
            font-size: 30px;
        }
    }

    @media screen and (max-width: 600px) {
        .card-title {
            font-size: 22pt
        }

        .period {
            font-size: 30px;
        }
    }

    @media screen and (max-width: 450px) {
        .item-title {
            font-size: 11pt
        }
    }
    @media screen and (max-width: 400px) {
        .card-title {
            font-size: 18pt
        }

        .period {
            font-size: 25px;
        }
    }

    /* Enter and leave animations can use different */
    /* durations and timing functions.              */
    .slide-fade-enter-active {
        transition: all .3s linear;
    }

    .slide-fade-leave-active {
        left: -100%;
    }

    .slide-fade-enter
        /* .slide-fade-leave-active below version 2.1.8 */
    {
        transform: translateX(-20px);
    }
</style>
<style>
    .gray-check i {
        align-self: center;
        color: #4d4d4c !important;
        border-radius: 0 !important;
        font-size: 20px !important;
    }

    .gray-check.v-input--is-label-active i {
        color: #cc983c !important;
        background-color: #cc983c;
        font-size: 16px !important;
        margin-left: 2px;
    }

    .gray-check .v-messages {
        display: none !important;
    }

    .gray-check .v-input__slot {
        margin-bottom: 0 !important;
    }
</style>
