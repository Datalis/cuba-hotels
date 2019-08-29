<template>
    <v-app-bar
            absolute
            flat
            prominent
    color="rgba(0,0,0,0.76)">
        <v-app-bar-nav-icon color="rgb(255, 255, 255)"></v-app-bar-nav-icon>
        <v-toolbar-title style="margin-left: 269px">
            <v-layout column>
                <v-flex xs12>
                    <p class="text-uppercase font-weight-light" style="font-size: 29px; letter-spacing: 6px; color: #dc9321; text-align: left; margin-bottom: 0">
                        Hoteles en Cuba:
                    </p>
                </v-flex>
                <v-flex xs12>
                    <p class="text-uppercase" style="font-size: 29px; letter-spacing: 6px; color: #dc9321; font-weight: 300; margin-top: 0">
                        El valor de un pais
                    </p>
                </v-flex>
            </v-layout>
        </v-toolbar-title>
    </v-app-bar>
</template>
<script>
    export default {
        name: "Toolbar"
    }
</script>

<style scoped>

</style>