<template>
    <v-app-bar
            app
            flat>
        <v-container
                mx-auto
                py-0>
            <v-layout>
                <v-btn
                        :to="'/home'"
                        class="m1-0 hidden-sm-and-down"
                        text>Home
                </v-btn>
                <v-btn
                        :to="'/home'"
                        class="m1-0 hidden-sm-and-down"
                        text>About
                </v-btn>
                <v-btn
                        :to="'/home'"
                        class="m1-0 hidden-sm-and-down"
                        text>Travel
                </v-btn>
            </v-layout>
        </v-container>
    </v-app-bar>
</template>

<script>
    export default {
        name: "Toolbar"
    }
</script>

<style scoped>

</style>