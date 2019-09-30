<template>
    <v-footer padless class="footer-background">
        <v-row justify="center">
            <v-col cols="12" sm="3" md="3" lg="3" xl="3" class="pa-0" align="center">
                <v-img class="footer-img"  height="100%" :src="require('@/assets/home/footer.png')">
                    <v-row align="center" justify="center" style="height: 100%" class="pl-sm-4">
                        <v-col
                                v-for="icon in icons"
                                :key="icon" cols="3" align="center">
                            <v-btn class="mr-4  white--text" icon>
                                <v-icon size="40px">{{ icon }}</v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-img>
            </v-col>
            <v-col cols="12" sm="9" md="9" lg="9" xl="9" class="pl-8" style="background-color: rgb(222, 153, 49)">
                <v-row align="center" justify="center" style="height: 100%;">
                    <v-col cols="12" sm="12" md="6" lg="8" xl="8" class="credits pt-12 pb-8">
                        <div class="text-uppercase credits-title">Créditos</div>
                        <div>Investigación, datos y textos: Jessica Dominguez y Julio Batista</div>
                        <div>Programación: Abraham Calás</div>
                        <div>Diseño: Wendy Valladares y Janet Aguilar</div>
                        <div>Fotografía: Jans Sosa, Jorge Beltrán y Fidel Alejandro</div>
                    </v-col>
                    <v-col cols="12" sm="12" md="4" lg="4" xl="4">
                        <div class="method text-uppercase">Metodología</div>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-footer>
</template>

<script>
    export default {
        name: "Footer",
        data: () => ({
            icons: [
                'fab fa-facebook',
                'fab fa-twitter',
                'fab fa-instagram',
            ]
        }),
    }
</script>

<style scoped>
    .footer-background {
        background-color: rgb(222, 153, 49) !important;
    }

    .credits{
        font-size: 12pt;
        font-family: Montserrat-Regular;
        color: #fffefc;
        letter-spacing: 1px;
    }

    .credits-title{
        margin-bottom: 16px;
    }

    .method{
        font-family: Montserrat-ExtraBold;
        color: #fffefc;
        font-size: 19pt;
        letter-spacing: 5px;
    }
</style>

<style>
    .footer-img .v-responsive__content{
        width: 100% !important;
    }
</style>