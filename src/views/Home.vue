<template>
<v-layout>
    <v-flex>
        <banner></banner>
    </v-flex>
</v-layout>
</template>

<script>
    import CubaMap from '@/components/CubaMap'
    import Banner from '@/components/home/Banner'
    import FeedCard from '@/components/FeedCard'
    import YoutubeVideo from "../components/home/YoutubeVideo";

    export default {
        name: "Home",
        components: {
            YoutubeVideo,
            CubaMap,
            Banner,
            FeedCard
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