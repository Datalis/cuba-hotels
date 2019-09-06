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
                <v-list-item class="pl-0" two-line :key="i" v-for="(h, i) in hotels">
                    <v-list-item-content>
                        <v-list-item-title class="item-title">{{h}}</v-list-item-title>
                        <v-list-item-subtitle>
                            <v-rating :value="5" color="#cc983c" dense readonly></v-rating>
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-col>
        <v-col cols="5" class="pa-0">
            <v-img height="7in" :src="require('@/assets/home/activep.png')"/>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        name: "BuildingProjects",
        data() {
            return {
                hotels: ['Paseo del prado', 'Paseo del prado', 'Paseo del prado', 'Paseo del prado', 'Paseo del prado']
            }
        }
    }
</script>

<style scoped>
    .container-row{
        background-color: #282828;
        margin-top: 150px
    }
    .card-title {
        font-size: 34.98pt;
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
</style>
