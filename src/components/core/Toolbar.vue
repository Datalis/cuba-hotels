<template>
    <v-app-bar
            absolute
            flat
            prominent
            color="rgba(0, 0, 0, 0.76)"
    >
        <v-row class="pt-3">
            <v-col cols="2">
                <!-- todo: put icon-->
                        <v-app-bar-nav-icon color="rgb(255, 255, 255)"></v-app-bar-nav-icon>
            </v-col>
            <v-col cols="10" style="width: max-content">
                <p class="mb-0 text-uppercase bar-title">
                    Hoteles en Cuba:
                </p>
                <p class="mt-0 text-uppercase  bar-title">
                    El valor de un pais
                </p>
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

    @media screen and (max-width: 550px){
        .bar-title{
            font-size: 23px;
        }
    }

    @media screen and (max-width: 450px){
        .bar-title{
            font-size: 23px;
            letter-spacing: 3px;
        }
    }

    @media screen and (max-width: 375px){
        .bar-title{
            font-size: 19px;
            letter-spacing: 0px;
        }
    }
</style>
