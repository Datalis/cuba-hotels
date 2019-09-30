<template>
    <div>
        <banner></banner>
        <v-row justify="center">
            <v-col cols="5" class="pa-0">
                <p class="author text-uppercase"  style="margin-bottom: 70px">Autor</p>
                <evolucion-hoteles></evolucion-hoteles>
                <bubble-habitaciones></bubble-habitaciones>
                <div style="height:90vh; overflow-y: scroll; ">
                    <p class="text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p class="text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p class="text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p class="text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p class="text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>  <p class="text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>  <p class="text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

                </div>
            </v-col>
            <v-col cols="1"></v-col>
            <v-col cols="2" class="pa-0">
                <v-card class="card first-card">
                    <v-img :src="require('@/assets/home/building.png')" height="45vh">
                        <v-card-title class="card-title">
                            <div class="card-title-text text-uppercase">
                                Los dueños
                            </div>
                            <div class="sep-line"></div>
                            <div class="card-action-text text-uppercase">Leer mas</div>
                        </v-card-title>
                    </v-img>
                </v-card>
                <v-card class="mt-12 card" style="background-color: #292929;">
                    <video-frame width="100%" height="200px"></video-frame>
                    <v-card-title class="pr-4 pb-5" style="background-color: #292929; height: 5%">
                        <h1 class="video-title text-uppercase text-right" style="width: 100%">Video Resumen</h1>
                    </v-card-title>
                </v-card>
            </v-col>
        </v-row>
    </div>

</template>

<script>
    import Banner from '@/components/building/Banner'
    import VideoFrame from "../components/videoFrame";
    import EvolucionHoteles from "../components/EvolucionHoteles";
    import BubbleHabitaciones from "../components/BubbleHabitaciones";


    export default {
        name: "Building",
        components: {VideoFrame, Banner, EvolucionHoteles, BubbleHabitaciones}
    }
</script>

<style scoped>
    .card {
        height: max-content;
        border-radius: 0;
    }

    .first-card {
        margin-top: 246px;
    }

    .card-title {
        height: 33%;
        background-color: #eeeeed;
    }

    .card-title-text {
        font-family: Montserrat-ExtraBold;
        margin-left: auto;
        margin-right: auto;
        font-size: 19pt;
        margin-top: 8%;
    }

    .card-action-text {
        font-family: Montserrat-Light;
        color: var(--primary-color);
        margin-right: 20px;
        font-size: 10pt;
    }

    .author {
        padding-left: 20px;
        padding-top: 150px;
        border-left: 4px solid var(--primary-color);
        font-family: Montserrat-Light;
        color: var(--primary-color);
    }

    .sep-line {
        width: 40%;
        margin-left: auto;
        margin-right: 20px;
        border: 2px solid var(--primary-color);
    }

    .video-title{
        font-family: Montserrat-ExtraBold;
        color: var(--primary-color);
        font-size: 15pt;
        line-height: 15pt;
    }
</style>