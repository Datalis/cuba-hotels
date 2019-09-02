<template>
    <v-dialog
    v-model="dialog">
        <v-card>
            <v-card-title>
                Iberostar Gran Packard
            </v-card-title>
            <v-card-text>
                Capacidad: 200 habitaciones

            </v-card-text>
        </v-card>

    </v-dialog>
</template>

<script>
    export default {
        name: "InfoDialog",
        props: ['dialog']
    }
</script>

<style scoped>

</style>