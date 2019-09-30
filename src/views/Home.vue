<template>
    <div>
        <banner></banner>
        <owners style="margin-top: 3in;"></owners>
        <building-card style="margin-top: 300px;"></building-card>
        <third-card style="margin-top: 3in;"></third-card>
        <interactive-map style="margin-top: 290px"></interactive-map>
        <youtube-video style="margin-top: 300px"></youtube-video>
    </div>
</template>

<script>
    import Banner from '@/components/home/Banner'
    import YoutubeVideo from "@/components/home/YoutubeVideo"
    import Owners from '@/components/home/OwnersCard'
    import BuildingCard from '@/components/home/BuildingCard'
    import ThirdCard from '@/components/home/ThirdCard'
    import InteractiveMap from "@/components/home/Interactive";

    export default {
        name: "Home",
        components: {
            InteractiveMap,
            Banner,
            Owners,
            BuildingCard,
            YoutubeVideo,
            ThirdCard
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
            applyFilter(list, filters) {
                list.filter(item => filters.every(f => item[f.cat] === f.value))
            }
        }
    }
</script>