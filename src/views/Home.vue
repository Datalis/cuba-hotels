<template>
    <div id="home">
        <!--        <feed>-->
        <v-container
                grid-list-xl>
            <v-layout wrap>
                <v-flex xs12>
                    <banner></banner>
                    <cuba-map msg="Welcome to Your Vue.js App"/>
                </v-flex>
                <!--        <feed-card>-->

                <feed-card
                        :size="2"
                        :value="articles[1]"
                />
                <feed-card
                        :size="2"
                        :value="articles[1]"
                />
                <!--        </feed-card>-->
                <v-flex xs12>
                    <youtube-video/></v-flex>
            </v-layout>

        </v-container>
        <!--        </feed>-->
        <!--        <banner></banner>-->

    </div>

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
        }
    }
</script>

<style scoped>

</style>