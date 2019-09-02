<template>
    <div>
        <banner></banner>
        <v-row justify="center">
            <v-col cols="5">
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
            </v-col>
            <v-col cols="4">
                <v-card>
                    <v-img :src="require('@/assets/home/building.png')">
                        <v-card-title style="height: 40%; background-color: #eeeeed">
                            Los duenos
                        </v-card-title>
                    </v-img>
                </v-card>
                <v-card class="mt-12">
                    <video-frame width="100%"></video-frame>
                    <v-card-title style="background-color: #eeeeed">
                        <h1 style="width: 100%">Video</h1>
                        <h1 style="width: 100%">Resumen</h1>
                    </v-card-title>
                </v-card>
            </v-col>
        </v-row>
    </div>

</template>

<script>
    import Banner from '@/components/building/Banner'
    import VideoFrame from "../components/videoFrame";

    export default {
        name: "Building",
        components: {VideoFrame, Banner}
    }
</script>

<style scoped>

</style>