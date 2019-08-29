<template>
<v-layout>
    <v-flex>
        <banner></banner>
        <owners></owners>

    </v-flex>
</v-layout>
</template>

<script>
    import Banner from '@/components/home/Banner'
    import YoutubeVideo from "../components/home/YoutubeVideo"
    import Owners from '@/components/home/Owners'

    export default {
        name: "Home",
        components: {
            Banner,
            Owners,
            YoutubeVideo
        },
        data() {
            return {
                articles: [
                    {
                        "title": "Moroccan Days",
                        "author": "John L",
                        "category": "Travel",
                        "hero": "moroccandays.jpg"
                    },
                    {
                        "title": "Swedish Fishing",
                        "author": "Rachel L",
                        "category": "Leisure",
                        "hero": "autumnclouds.jpg"
                    }]
            }
        },
        methods: {
            applyFilter(list, filters){
                list.filter(item => filters.every(f => item[f.cat] === f.value))
            }
        }
    }
</script>

<style scoped>

</style>