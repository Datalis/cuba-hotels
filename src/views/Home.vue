<template>
<v-layout>
    <v-flex>
        <banner></banner>
        <owners style="margin-top: 6.597in;"></owners>
        <building-card style="margin-top: 300px;"></building-card>
        <interactive-map style="margin-top: 270px"></interactive-map>
        <youtube-video style="margin-top: 300px"></youtube-video>
    </v-flex>
</v-layout>
</template>

<script>
    import Banner from '@/components/home/Banner'
    import YoutubeVideo from "../components/home/YoutubeVideo"
    import Owners from '@/components/home/OwnersCard'
    import BuildingCard from '@/components/home/BuildingCard'
    import InteractiveMap from "../components/home/Interactive";

    export default {
        name: "Home",
        components: {
            InteractiveMap,
            Banner,
            Owners,
            BuildingCard,
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