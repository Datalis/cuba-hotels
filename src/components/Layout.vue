<template>
    <v-app>
        <core-toolbar/>
        <v-content id="home">
            <router-view />
        </v-content>
        <core-footer/>
    </v-app>
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