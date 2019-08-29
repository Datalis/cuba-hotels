<template>
    <div style="position: relative">
        <v-row align="end" style="margin-top: 330px; position: absolute; top: 0px">
            <v-col cols="0" sm="2" lg="6">
                <v-img height="570" width="710" :src="require('@/assets/home/banner2.png')">
                </v-img>
            </v-col>
            <v-col cols="12" sm="10" lg="6" class="text-right pa-lg-10 pa-sm-0">
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
                    <v-img height="650" width="100%" :src="require('@/assets/home/banner.png')">
                    </v-img>
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

</style>