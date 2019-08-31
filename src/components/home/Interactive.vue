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
                <v-row class="statistics-row">
                    <v-col cols="6">
                        <h3 class="statistics-title">Total de Hoteles</h3>
                        <h1 class="statistics-value">560</h1>

                    </v-col>
                    <v-col cols="6">
                        <h3 class="statistics-title">Hoteles
                            <v-icon class="primary-color">star</v-icon>
                            <v-icon class="primary-color">star</v-icon>
                            <v-icon class="primary-color">star</v-icon>
                            <v-icon class="primary-color">star</v-icon>
                            <v-icon class="primary-color">star</v-icon>
                            <v-icon class="primary-color">star</v-icon></h3>
                        <h1 class="statistics-value">300</h1>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-text-field
                                filled
                                label="Buscar"
                                prepend-inner-icon="search"
                        ></v-text-field>
                    </v-col>
                    <v-col class="text-right">
                        <h3>Filtros</h3>
                        <v-container fluid>
                            <h3>Categoría</h3>
                            <v-checkbox :key="c.name" v-for="c in categories" :label="c.name"></v-checkbox>
                        </v-container>
                        <v-container fluid>
                            <h3>Operador cubano</h3>
                            <v-checkbox :key="m.name" v-for="m in managers" :label="m.name"></v-checkbox>
                        </v-container>
                        <v-container fluid>
                            <h3>Operador extranjero</h3>
                            <v-checkbox label="Si"></v-checkbox>
                            <v-checkbox label="No"></v-checkbox>
                        </v-container>
                        <v-container fluid>
                            <h3>Ubicación</h3>
                            <v-checkbox :key="r.name" v-for="r in regions" :label="r.name"></v-checkbox>
                        </v-container>
                    </v-col>
                </v-row>

            </v-col>
            <v-col cols="2" style="padding-top: 0">
                <div style="border-top: 3px solid black"></div>
            </v-col>
        </v-row>
        <v-row>
            <v-col></v-col>
            <v-col></v-col>
        </v-row>
        <div class="background-img" >
            <v-img  height="1130" width="750" :src="require('@/assets/home/background.png')"/>
        </div>
    </div>
</template>

<script>
    import CubaMap from "../CubaMap";
    import {mapGetters} from 'vuex'

    export default {
        name: "InteractiveMap",
        components: {CubaMap},
        data() {
            return {}
        },
        computed: {
            ...mapGetters(['categories', 'managers', 'regions']),
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
    .statistics-value{
        font-size: 61px;
        letter-spacing: 12px;
        color: #cc983c;
        font-family: "Montserrat-Bold";
        font-weight: 800;
    }

    .statistics-row{
        margin-bottom: 158px;
    }

    .primary-color{
        color: #cc983c;
    }

    .content-row{
        margin-top: 240px;
    }

    .background-img{
        position: absolute;
        top: -80px;
        left: -160px;
        z-index: -1
    }
</style>