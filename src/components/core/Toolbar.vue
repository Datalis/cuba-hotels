<template>
    <v-app-bar
            absolute
            flat
            prominent
            color="rgba(0, 0, 0, 0.76)"
    >
        <v-row class="pt-3">
            <v-col cols="2" class="pt-6 pl-0 pr-5" align="center">
                <!-- todo: put icon-->
<!--                <v-app-bar-nav-icon color="rgb(255, 255, 255)"></v-app-bar-nav-icon>-->
                <v-icon size="25px" class="mr-2" color="#ffffffde" dense>mdi-facebook</v-icon>
                <v-icon size="25px" class="mr-3" color="#ffffffde">mdi-twitter</v-icon>
                <v-icon size="25px" class="mr-2" color="#ffffffde">mdi-instagram</v-icon>

            </v-col>
            <v-col cols="8" class="pl-5" style="width: max-content">
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
                    <v-img src="@/assets/home/logos/eltoque.png" max-width="1.50in"></v-img>
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

    @media screen and (max-width: 550px) {
        .bar-title {
            font-size: 23px;
        }
    }

    @media screen and (max-width: 450px) {
        .bar-title {
            font-size: 23px;
            letter-spacing: 3px;
        }
    }

    @media screen and (max-width: 375px) {
        .bar-title {
            font-size: 19px;
            letter-spacing: 0px;
        }
    }
</style>
