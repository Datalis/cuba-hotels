<template>
    <div style="position: relative">
        <v-row align="end" class="text-row" no-gutters>
            <v-col cols="4" sm="5" md="5" lg="6" xl="6">
                <v-img height="6in" width="8in"
                       :src="require('@/assets/home/banner2.jpg')">
                </v-img>
            </v-col>
            <v-col cols="8" sm="7" md="7" lg="6" xl=6 class="quoted-col">
                <p class="quoted-text">
                    Cuba apuesta con todo al turismo para su desarrollo. Aunque los números están en su contra, se
                    pretende convertir al país en un paraíso hotelero. Un proyecto financiado, en su mayoría con capital
                    cubano. ¿Valdrá la pena?
                </p>
            </v-col>
            <v-col cols="2" justify="end"
                   class="d-none d-sm-none d-md-flex d-lg-flex d-xl-flex"
                   style="padding-top: 150px; border-right: 4px solid black; font-family: Montserrat-Light; color: var(--primary-color);">
                <div/>
            </v-col>
        </v-row>
        <v-row justify="end">
            <v-col cols="10" sm="10" md="10" lg="10" xl="10" class="pt-0">
                <v-row>
                    <v-img height="7in"  :src="require('@/assets/home/banner.jpg')"/>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        name: "Banner"
    }
</script>

<style scoped>
    .text-row {
        width: 100%;
        margin-top: 3.1in;
        position: absolute;
        top: 0;
        height: 6in;
    }

    .quoted-text {
        margin-right: 18px;
        font-family: Montserrat-Regular;
        font-size: 16pt;
        color: #4d4d4c;
        text-align: right;
    }

    .quoted-col {
        padding-left: 5%;
        padding-right: 3%;
        padding-bottom: 0;
    }

    @media screen and (max-width: 1024px) {
        .quoted-text {
            font-size: 14pt;
        }
    }

    @media screen and (max-width: 800px) {
        .quoted-text {
            font-size: 13pt;
        }
    }

    @media screen and (max-width: 700px) {
        .quoted-text {
            font-size: 12pt;
        }
    }

    @media screen and (max-width: 600px) {
        .quoted-text {
            font-size: 11pt;
        }
    }

    @media screen and (max-width: 425px) {
        .text-row {
            margin-top: 3.4in;
        }

        .quoted-text {
            text-align: left !important;
        }
    }

    @media screen and (max-width: 320px) {
        .text-row {
            margin-top: 3.6in;
        }
        .quoted-text {
            font-size: 10pt;
            margin-left: 10px;
        }
    }

    @media screen and (max-width: 270px) {
        .text-row {
            margin-top: 4.2in;
        }
    }
</style>

