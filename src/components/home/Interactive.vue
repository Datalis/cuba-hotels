<template>
    <div style="position: relative;">
        <v-row>
            <v-col>
            </v-col>
        </v-row>
        <v-row class="content-row">
            <v-col cols="2" style="padding-bottom: 0">
                <div style="border-bottom: 3px solid black;height: 100%"></div>
            </v-col>
            <v-col cols="8" class="main-container">
                <v-row>
                    <v-col cols="12">
                        <cuba-map></cuba-map>
                    </v-col>
                </v-row>
                <v-row class="statistics-row" justify="center">
                    <v-col cols="6">
                        <h3 style="text-align: center" class="statistics-title">Total de Hoteles</h3>
                        <h1 style="text-align: center" class="statistics-value">560</h1>
                    </v-col>
                    <v-col cols="6">
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
                <v-row>
                    <v-col>
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
                        two-line
                        id="list">
                            <v-list-item @click.stop="showHotelDialog()">
                                <v-list-item-content>
                                    <v-list-item-title>
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
                    <v-col>
                        <h3 class="filters-title">Filtros</h3>
                        <v-container fluid>
                            <h3 class="group-title">Categoría</h3>
                            <v-checkbox class="_vcheck" color="#cc983c" :key="c.name" v-for="c in categories"
                                        :label="c.name"></v-checkbox>
                        </v-container>
                        <v-container fluid>
                            <h3 class="group-title">Operador cubano</h3>
                            <v-checkbox class="_vcheck" color="#cc983c" :key="m.name" v-for="m in managers"
                                        :label="m.name"></v-checkbox>
                        </v-container>
                        <v-container fluid>
                            <h3 class="group-title">Operador extranjero</h3>
                            <v-checkbox class="_vcheck" color="#cc983c" label="Si"></v-checkbox>
                            <v-checkbox class="_vcheck" color="#cc983c" label="No"></v-checkbox>
                        </v-container>
                        <v-container fluid>
                            <h3 class="group-title">Ubicación</h3>
                            <v-checkbox class="_vcheck" color="#cc983c" :key="r.name" v-for="r in regions"
                                        :label="r.name"></v-checkbox>
                        </v-container>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="2" style="padding-top: 0">
                <div style="border-top: 3px solid black"></div>
            </v-col>
        </v-row>
        <v-row style="background-color: #282828; margin-top: 150px">
            <v-col cols="7"></v-col>
            <v-col cols="5" style="padding: 0">
                <v-img :src="require('@/assets/home/activep.png')"/>
            </v-col>
        </v-row>
        <div class="background-img">
            <v-img height="1130" width="750" :src="require('@/assets/home/background.png')"/>
        </div>
    </div>
</template>

<script>
    import CubaMap from "../CubaMap";
    import {mapGetters} from 'vuex'
    import InfoDialog from "./InfoDialog";

    export default {
        name: "InteractiveMap",
        components: {InfoDialog, CubaMap},
        data() {
            return {
                showInfoDialog: false
            }
        },
        computed: {
            ...mapGetters(['categories', 'managers', 'regions']),
        },
        methods: {
            showHotelDialog(){
                this.showInfoDialog = true
            }
        }
    }
</script>

<style scoped>
    .main-container {
        background-color: #eeeeed;
    }

    .statistics-title {
        font-size: 17px;
        letter-spacing: 3px;
        color: #000000;
        font-family: "Montserrat-Bold";
        font-weight: 800;
        text-transform: uppercase;
    }

    .statistics-value {
        font-size: 61px;
        letter-spacing: 12px;
        color: #cc983c;
        font-family: "Montserrat-Bold";
        font-weight: 800;
    }

    .statistics-row {
        margin-bottom: 158px;
    }

    .primary-color {
        color: #cc983c;
    }

    .content-row {
        margin-top: 240px;
    }

    .background-img {
        position: absolute;
        top: -80px;
        left: -160px;
        z-index: -1
    }

    ._vcheck {
        height: 30px;
        margin-top: 0;
    }

    .group-title {
        margin-bottom: 3px;
    }

    .filters-title {
        text-align: center;
        background-color:  #cc983c;
        width: max-content;
        padding: 15px 65px;
    }

</style>