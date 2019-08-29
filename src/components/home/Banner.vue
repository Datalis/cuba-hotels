<template>
    <!--    <base-card dark>-->

    <div style="position: relative">

        <v-row align="end" style="margin-top: 330px; position: absolute; top: 0px">
            <v-col cols="6">
                <v-img height="570" width="710" :src="require('@/assets/articles/autumnclouds.jpg')">
                </v-img>
            </v-col>
            <v-col cols="6" class="text-right pl-lg-10 pr-lg-10 pb-lg-10 pt-lg-10">
                <p style="margin-right: 20px">

                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

            </v-col>
        </v-row>
        <v-row justify="end">
            <v-col cols="2" class="pt-0">
            </v-col>
            <v-col cols="10" class="pt-0">
                <v-row>
                    <v-img height="650" width="100%" :src="require('@/assets/articles/blurcamera.jpg')">
                    </v-img>
                </v-row>
            </v-col>
        </v-row>
        <v-row style="margin-top: 300px">
            <v-col cols="2">
                <div>
                    hola
                </div>

            </v-col>
            <v-col cols="10">
                <div>
                    hola
                </div>

            </v-col>
        </v-row>
    </div>
    <!--    </base-card>-->
</template>

<script>
    import BaseCard from '@/components/base/Card'

    export default {
        name: "Banner",
        components: {
            BaseCard
        }
    }
</script>

<style scoped>

</style>