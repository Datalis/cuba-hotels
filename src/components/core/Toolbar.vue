<template>
    <v-app-bar
            absolute
            flat
            prominent
            color="rgba(0, 0, 0, 0.76)"
    >
        <v-row class="pt-3">
            <v-col cols="2" class="pt-0 pt-sm-0 pt-md-6 pt-lg-6 pt-xl-6 pl-0 pr-5" align="center">
                <v-icon class="toolbar-social-icon mr-2" color="#ffffffde" dense>mdi-facebook</v-icon>
                <v-icon class="toolbar-social-icon second mr-2" color="#ffffffde">mdi-twitter</v-icon>
                <v-icon class="toolbar-social-icon third mr-2" color="#ffffffde">mdi-instagram</v-icon>
            </v-col>
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

    .small-screen{
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

        .second{
            margin-top: -20px;
        }

        .third{
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

        .second{
            margin-top: -25px;
        }

        .third{
            margin-top: -50px;
        }
    }

    @media screen and (max-width: 500px) {
        .bar-title {
            font-size: 15px;
            letter-spacing: 4px;
        }

        .lg-screen{
            display: none;
        }

        .small-screen{
            display: flex;
        }
    }
</style>
