<template>
    <v-app-bar
            absolute
            flat
            prominent
            color="rgba(0, 0, 0, 0.76)"
    >
        <v-row class="pt-3">
            <social-sharing url="https://dogcalas.github.io/cuba-hotels/#/"
                            title="La apuesta hotelera en Cuba"
                            description="Cuba apuesta con todo al turismo para su desarrollo. Aunque los números están en su contra, se pretende convertir al país en un paraíso hotelero. Un proyecto financiado, en su mayoría con capital cubano. ¿Valdrá la pena?"
                            quote="Cuba apuesta con todo al turismo para su desarrollo. Aunque los números están en su contra, se pretende convertir al país en un paraíso hotelero. Un proyecto financiado, en su mayoría con capital cubano. ¿Valdrá la pena?"
                            hashtags="HotelesEnCuba"
                            inline-template>
                <div data-v-b9a2390a="" align="center" class="pt-0 pt-sm-0 pt-md-6 pt-lg-6 pt-xl-6 pl-0 pr-5 col col-2">
                    <network network="facebook">
                        <i aria-hidden="true"
                           class="v-icon notranslate toolbar-social-icon mr-2 v-icon--dense mdi mdi-facebook theme--light"
                           style="color: rgba(255, 255, 255, 0.87); caret-color: rgba(255, 255, 255, 0.87);"></i>
                    </network>
                    <network network="twitter">
                        <i aria-hidden="true"
                           class="v-icon notranslate toolbar-social-icon second mr-2 mdi mdi-twitter theme--light"
                           style="color: rgba(255, 255, 255, 0.87); caret-color: rgba(255, 255, 255, 0.87);"></i>
                    </network>
                    <network network="telegram">
                        <i aria-hidden="true"
                           class="v-icon notranslate toolbar-social-icon mr-2 v-icon--dense mdi mdi-telegram theme--light"
                           style="color: rgba(255, 255, 255, 0.87); caret-color: rgba(255, 255, 255, 0.87);"></i>
                    </network>
                </div>
            </social-sharing>
            <v-col cols="8" class="pl-0 pl-sm-0 pl-md-5 pl--lg-5 pl-xl-5" style="width: max-content">
                <router-link to="/" style="text-decoration: none">
                    <p class="mb-0 text-uppercase bar-title">
                        La apuesta hotelera
                    </p>
                    <p class="mt-0 text-uppercase  bar-title">
                        en Cuba
                    </p>
                </router-link>
            </v-col>
            <v-col cols="2" class="pt-4">
                <a href="#" style="text-decoration: none;">
                    <v-img class="lg-screen" src="@/assets/home/logos/eltoque.png" max-width="1.50in"></v-img>
                    <v-img class="small-screen" src="@/assets/logo.png" max-width="1.50in"></v-img>
                </a>
            </v-col>
        </v-row>
    </v-app-bar>
</template>
<script>
    export default {
        name: "Toolbar"
    }
</script>

<style scoped>
    .bar-title {
        font-size: 29px;
        letter-spacing: 6px;
        color: var(--primary-color);
    }

    .toolbar-social-icon {
        font-size: 25px;
    }

    .small-screen {
        display: none;
    }

    @media screen and (max-width: 768px) {
        .bar-title {
            font-size: 22px;
        }

        .toolbar-social-icon {
            width: 100%;
            font-size: 20px !important;
            margin-top: -5px;
        }

        .second {
            margin-top: -20px;
        }

        .third {
            margin-top: -30px;
        }
    }

    @media screen and (max-width: 600px) {
        .bar-title {
            font-size: 20px;
            letter-spacing: 4px;
        }

        .toolbar-social-icon {
            width: 100%;
            font-size: 15px !important;
            margin-top: 0;
        }

        .second {
            margin-top: -25px;
        }

        .third {
            margin-top: -50px;
        }
    }

    @media screen and (max-width: 500px) {
        .bar-title {
            font-size: 15px;
            letter-spacing: 4px;
        }

        .lg-screen {
            display: none;
        }

        .small-screen {
            display: flex;
        }
    }
</style>
