<template>
    <v-footer padless class="footer-background">
        <v-row justify="center">
            <v-col cols="12" sm="3" md="3" lg="3" xl="3" class="pa-0" align="center">
                <v-img class="footer-img" height="100%" :src="require('@/assets/home/footer.png')">
                    <v-row align="center"  class="networks-container pl-sm-4">
                        <v-col cols="12" justify="center">
                            <v-row align="center" justify="center">
                                <v-col
                                        v-for="snet  in socialNets"
                                        :key="snet.icon" cols="2" align="center" class="mr-3">
                                    <a :href="snet.url" style="text-decoration: none;">
                                        <v-btn class="white--text" icon>
                                            <v-icon size="40px">{{ snet.icon}}</v-icon>
                                        </v-btn>
                                    </a>
                                </v-col>
                            </v-row>
                            <v-row align="center" justify="center" class="mt-6">
                                <v-col
                                        v-for="snet  in socialNets2"
                                        :key="snet.icon" cols="2" align="center" class="mr-3">
                                    <a :href="snet.url" style="text-decoration: none;">
                                        <v-btn class="white--text" icon>
                                            <v-icon size="40px">{{ snet.icon}}</v-icon>
                                        </v-btn>
                                    </a>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-img>
            </v-col>
            <v-col cols="12" sm="9" md="9" lg="9" xl="9" class="pl-8" style="background-color: rgb(222, 153, 49)">
                <v-row align="center" justify="center" style="height: 100%;">
                    <v-col cols="12" sm="12" md="6" lg="7" xl="7" class="credits pt-12 pb-8 pl-12">
                        <div class="text-uppercase credits-title">Créditos</div>
                        <div>Investigación, datos y textos: Jessica Dominguez y Julio Batista</div>
                        <div>Programación: Amelia Zulueta Contreras y Abraham Calás</div>
                        <div>Diseño: Wendy Valladares y Janet Aguilar</div>
                        <div>Fotografía: Jans Sosa, Jorge Beltrán y Fidel Alejandro</div>
                        <div class="method text-uppercase pt-8">Metodología</div>
                        <div class="method text-uppercase pt-4 pb-6">Base de Datos</div>
                    </v-col>
                    <v-col cols="12" sm="12" md="4" lg="5" xl="5" align="center">
                        <a href="#" style="text-decoration: none;">
                        <v-img src="@/assets/home/logos/eltoque.png" max-width="1.45in"></v-img>
                        </a>
                        <a href="#" style="text-decoration: none;">
                        <v-img src="@/assets/home/logos/connectas.png" max-width="1.80in" class="mt-2 ml-3"></v-img>
                        </a>
                        <a href="#" style="text-decoration: none;">
                        <v-img src="@/assets/home/logos/icfb.png" max-width="0.50in" class="mt-6"></v-img>
                        </a>
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
            socialNets: [
                {
                    icon: 'fab fa-facebook',
                    url: 'https://www.facebook.com/eltoquecom/'
                },
                {
                    icon: 'fab fa-instagram',
                    url: 'https://www.instagram.com/eltoquecom/'
                },
                {
                    icon: 'fab fa-linkedin',
                    url: 'https://www.linkedin.com/company/eltoquecom/'
                }
            ],
            socialNets2: [
                {
                    icon: 'fab fa-telegram',
                    url: 'https://t.me/eltoquecom'
                },
                {
                    icon: 'fab fa-youtube',
                    url: 'https://www.youtube.com/eltoquecom/'
                },
                {
                    icon: 'fab fa-twitter',
                    url: 'https://twitter.com/eltoquecom/'
                }
            ]
        }),
    }
</script>

<style scoped>
    .footer-background {
        background-color: rgb(222, 153, 49) !important;
    }

    .credits {
        font-size: 16px;
        font-family: Montserrat-Regular;
        color: #fffefc;
        letter-spacing: 1px;
    }

    .credits-title {
        margin-bottom: 16px;
    }

    .method {
        font-family: Montserrat-Bold;
        color: #fffefc;
        font-size: 14pt;
        letter-spacing: 4px;
    }
    .networks-container{
        height: 100%
    }
</style>

<style>
    .footer-img .v-responsive__content {
        width: 100% !important;
    }
</style>