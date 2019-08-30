<template>
    <div>
        <v-row>
            <v-col>

            </v-col>
        </v-row>
        <v-row>
            <v-col cols="2" style="">
                <div style="border-bottom: 3px solid black;height: 100%"></div>
            </v-col>
            <v-col cols="8">
                <v-row>
                    <v-col cols="12"><cuba-map></cuba-map></v-col>
                </v-row>
                <v-row>
                    <v-col cols="6">
                        <h3>Total de Hoteles</h3>
                        <h1>560</h1>

                    </v-col>
                    <v-col cols="6">
                        <h3>Hoteles 5E</h3>
                        <h1>300</h1>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-text-field
                                filled
                                label="Prepend inner"
                                prepend-inner-icon="search"
                        ></v-text-field>
                    </v-col>
                    <v-col>
                        <h3>Filtros</h3>
                        <h3>Categoría</h3>
                        <h3>Operador cubano</h3>
                        <h3>Operador extranjero</h3>

                        <v-container fluid>
                            <v-checkbox :key="c.name" v-for="c in categories"  :label="c.name"></v-checkbox>
                        </v-container>
                        <v-container fluid>
                            <v-checkbox :key="m.name" v-for="m in managers"  :label="m.name"></v-checkbox>
                        </v-container>
                        <v-container fluid>
                            <v-checkbox :key="m.name" v-for="m in managers"  :label="m.name"></v-checkbox>
                        </v-container>
                    </v-col>
                </v-row>

            </v-col>
            <v-col cols="2">
                <div style="border-top: 3px solid black"></div>
            </v-col>

        </v-row>
        <v-row>
            <v-col></v-col>
            <v-col></v-col>
        </v-row>
    </div>
</template>

<script>
    import CubaMap from "../CubaMap";
    import {mapGetters} from 'vuex'
    export default {
        name: "InteractiveMap",
        components: {CubaMap},
        data(){
            return {}
        },
        computed: {
            ...mapGetters(['categories', 'managers']),
        }
    }
</script>

<style scoped>

</style>