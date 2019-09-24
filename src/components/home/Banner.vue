<template>
    <div style="position: relative">
        <v-row align="end" class="text-row" no-gutters>
            <v-col cols="1" sm="1" md="4" lg="6">
                <v-img class="d-none d-sm-flex d-md-flex d-lg-flex d-xl-flex" height="7.92in" width="9.86in"
                       :src="require('@/assets/home/banner2.png')">
                </v-img>
            </v-col>
            <v-col cols="11" sm="11" md="8" lg="6" class="quoted-col">
                <p class="quoted-text text-right">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in.
                </p>
            </v-col>
            <v-col cols="2" justify="end" style="padding-top: 150px; border-right: 4px solid black; font-family: Montserrat-Light; color: var(--primary-color);">
                <div />
            </v-col>
        </v-row>
        <v-row justify="end">
            <v-col cols="12" sm="12" md="12" lg="10" xl="10" class="pt-0">
                <v-row>
                    <v-img height="9.63in" width="16.26in" :src="require('@/assets/home/banner.png')"/>
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
        margin-top: 4.583in;
        position: absolute;
        top: 0;
        height: 7.92in;
    }

    .quoted-text {
        margin-right: 20px;
        font-family: Montserrat-Regular;
        font-size: 16pt;
        color: #4d4d4c;
    }

    .quoted-col {
        padding-left: 8%;
        padding-right: 5%;
        padding-bottom: 2%;
    }

    @media screen and (max-width: 579px) {
        .quoted-col {
            height: 100%;
            padding-top: 130%;
        }
    }

    @media screen and (max-width: 492px) {
        .quoted-col {
            height: 100%;
            padding-top: 130%;
        }
    }

    @media screen and (max-width: 375px) {
        .quoted-col {
            height: 100%;
            padding-top: 170%;
        }
    }

</style>