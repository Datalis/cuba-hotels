<template>
    <v-row class="container-row" justify="end" align="center">
        <v-col cols="1" sm="1" md="1" lg="1" xl="1" class="d-none d-sm-none d-md-none d-lg-flex d-xl-flex">
        </v-col>
        <v-col cols="11" sm="10" md="7" lg="5" xl="5" class="pl-0 pl-sm-0 pl-md-12 pl-lg-0 pl-xl-0">
            <div class="card-title text-uppercase text-left">Proyectos en</div>
            <div class="card-title text-uppercase text-left">Construcción</div>
            <v-row align="center" justify="start">
                <v-col cols="3" :class="{period: true, handhover:true, active:isActive(first_year)}"
                       @click="setActiveYear(first_year)">
                    {{getYear(first_year)}}
                </v-col>
                <v-col cols="1" class="period">-</v-col>
                <v-col cols="3" :class="{period: true, handhover:true, active:isActive(middle_year)}"
                       @click="setActiveYear(middle_year)">{{getYear(middle_year)}}
                </v-col>
                <v-col cols="1" class="period">-</v-col>
                <v-col cols="3" :class="{period: true, handhover:true, active:isActive(last_year)}"
                       @click="setActiveYear(last_year)">{{getYear(last_year)}}
                </v-col>
            </v-row>
            <v-list ref="list" class="project-list pt-0" max-height="3.5in" max-width="90%">
                <div :class="'y'+i" :ref="'y'+i" v-for="(y,i) in years">
                    <v-divider :key="'y'+i" color="#3b3b3b" style="boder: none !important;"></v-divider>
                    <v-list-item
                            :key="h.nombre"
                            v-for="h in projects.filter(p=>p.fecha_fin === y+'')"
                            class="pl-0"
                            two-line
                            @click="showPopup(h)">
                        <v-list-item-content class="pb-0 pt-0">
                            <v-list-item-title class="item-title text-wrap">{{h.nombre}}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </div>
            </v-list>
        </v-col>
        <v-col cols="1" sm="5" md="5" lg="5" xl="5" class="pa-0 d-none d-sm-none d-md-flex d-lg-flex d-xl-flex">
            <v-img height="7in" :src="require('@/assets/home/activep.png')">
                <v-card class="text-uppercase" v-show="showDetails"
                        style="margin-top: 150px; padding: 60px 32px 60px ; background-color: #cc983c; width: 400px;border-radius:0;">
                    <v-icon style="margin-left: 88%" color="black" @click="hidePopup()">clear</v-icon>
                    <v-card-text class="pt-0"
                                 style="font-family: Montserrat-ExtraBold; color:#171716; font-size: 11pt; letter-spacing: 1px">
                        <!--                        <cambiar fechaini por estrellas> cat por habitaciones, propiedad por fechafin-->
                        <stars :stars="getCat(hotel)" color="white"></stars>
                        <p class="mb-3" style="font-style: italic; text-transform: none; font-family: Montserrat-Regular">
                            {{hotel.habitaciones}} habitaciones</p>
                        <p class="mb-3" style="font-style: italic; text-transform: none; font-family: Montserrat-Regular;">
                            {{hotel.localizacion}}. {{hotel.provincia.nombre}}</p>
                        <p class="mb-0" style="font-family: Montserrat-Bold"><span
                                style="font-style: italic; text-transform: none; font-family: Montserrat-Regular;"> A cargo de: </span>{{hotel.cadena}}
                        </p>
                        <p class="mb-0"><span style="font-style: italic; font-family: Montserrat-Regular; text-transform: none; "> Previsto para </span>
                            {{hotel.fecha_fin}}</p>
                        <p class="mb-3"><span style="font-style: italic; font-family: Montserrat-Regular; text-transform: none; "> Costo: </span> {{hotel.costo}}</p>
                        <p style="font-family: Montserrat-Bold"><span
                                style="font-style: italic; text-transform: none;"> Inversión: </span>{{hotel.est_inv}}
                        </p>
                    </v-card-text>
                    <v-card-actions>
                        <div style="font-family: Montserrat-Light; color:#ffffff; font-size: 10pt; width: max-content; margin-left: auto; margin-right: auto">
                            En Construcción
                        </div>
                    </v-card-actions>
                </v-card>
            </v-img>
        </v-col>
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
                    "id": 1,
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
            }
        },
        computed: {
            ...mapGetters(['projects', 'years'])
        },
        mounted() {
            const me = this
            this.$refs.list.$el.addEventListener('scroll', function (e) {
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
                if (this.years[this.last_year - 1]) {
                    this.last_year = this.last_year - 1
                    this.middle_year = this.middle_year - 1
                    this.first_year = this.first_year - 1
                }
                if (this.years[this.last_year - 1]) {
                    this.last_year = this.last_year - 1
                    this.middle_year = this.middle_year - 1
                    this.first_year = this.first_year - 1
                }
            }
        }
    }
</script>

<style scoped>
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

    @media screen and (max-width: 400px) {
        .card-title {
            font-size: 18pt
        }

        .item-title {
            font-size: 15pt
        }

        .period {
            font-size: 25px;
        }
    }
</style>
