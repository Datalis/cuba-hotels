<template>
    <v-row class="container-row" justify="end" align="center">
        <v-col cols="1">
        </v-col>
        <v-col cols="5">
            <div class="card-title text-uppercase text-left">Proyectos en</div>
            <div class="card-title text-uppercase text-left">Construcción</div>
            <v-row align="center" justify="start">
                <v-col cols="3" class="period">2019</v-col>
                <v-col cols="1" class="period">-</v-col>
                <v-col cols="3" class="period">2020</v-col>
                <v-col cols="1" class="period">-</v-col>
                <v-col cols="3" class="period active">2030</v-col>
            </v-row>
            <v-list class="project-list" max-height="3.5in" max-width="90%">
                <v-list-item class="pl-0" two-line :key="i" v-for="(h, i) in hotels" @click="showPopup()">
                    <v-list-item-content>
                        <v-list-item-title class="item-title">{{h}}</v-list-item-title>
                        <v-list-item-subtitle>
                            <v-rating :value="5" color="#cc983c" dense readonly></v-rating>
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-divider color="#3b3b3b"></v-divider>
                <v-list-item class="pl-0" two-line>
                    <v-list-item-content>
                        <v-list-item-title class="item-title">Habana Libre</v-list-item-title>
                        <v-list-item-subtitle>
                            <v-rating :value="3" empty-icon="" color="#cc983c" dense readonly></v-rating>
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-col>
        <v-col cols="5" class="pa-0">
            <v-img height="7in" :src="require('@/assets/home/activep.png')">
                <v-card class="text-uppercase" v-show="showDetails"
                        style="margin-top: 150px; padding: 60px 32px 60px ; background-color: #cc983c; width: 400px;border-radius:0;">
                    <v-icon style="margin-left: 88%" color="black" @click="hidePopup()">clear</v-icon>
                    <v-card-text style="font-family: Montserrat-ExtraBold; color:#171716; font-size: 16pt;">
                        <p>Ficha del Proyecto</p>
                        <p>Nombre / Ubicación</p>
                        <p>Empresa a cargo</p>
                        <p>Capacidad</p>
                        <p>Fechas</p>
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
    export default {
        name: "BuildingProjects",
        data() {
            return {
                showDetails: false,
                hotels: ['Paseo del prado', 'Paseo del prado', 'Paseo del prado', 'Paseo del prado', 'Paseo del prado']
            }
        },
        methods: {
            showPopup() {
                this.showDetails = true
            },
            hidePopup() {
                this.showDetails = false
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
        font-size: 17.71pt;
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

    /*!* handle on hover *!*/
    /*::-webkit-scrollbar-thumb:hover {*/
    /*    background: #555555;*/
    /*}*/

</style>
