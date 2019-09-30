<template>
    <div>
        <core-toolbar/>
        <v-content class="pt-lg-0">
            <v-container fluid fill-height fill-width class="pl-0 pr-0 pt-0">
                <v-layout>
                    <v-flex xs12 style="overflow-x: hidden">
                        <router-view></router-view>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
        <core-footer style="margin-top: 100px"/>
    </div>
</template>

<script>
    import Toolbar from '@/components/core/Toolbar'
    import Footer from '@/components/core/Footer'
    export default {
        name: "Layout",
        components: {
            CoreToolbar: Toolbar,
            CoreFooter: Footer
        }
    }
</script>

<style scoped>

</style>