<template>
    <v-footer dark padless style="background-color: rgba(200, 147, 33, 0.9)">
        <v-row style="position: relative" justify="center">
            <v-col cols="4">
                <v-img :src="require('@/assets/home/footer.png')">
                    <v-row align="center" justify="center" style="height: 100%">
                        <v-col
                                v-for="icon in icons"
                                :key="icon" cols="2">
                            <v-btn
                                    style="padding-top: auto; padding-bottom: auto"
                                    class="mx-4 white--text"
                                    icon
                            >
                                <v-icon size="50px">{{ icon }}</v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-img>
            </v-col>
            <v-col cols="8">

            </v-col>
        </v-row>
        <v-row>
            <v-col>

            </v-col>
            <v-col>

            </v-col>

        </v-row>

    </v-footer>
</template>

<script>
    export default {
        name: "Footer",
        data: () => ({
            icons: [
                'fab fa-facebook',
                'fab fa-twitter',
                'fab fa-instagram',
            ]
        }),
    }
</script>

<style scoped>

</style>