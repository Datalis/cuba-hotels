<template>
    <div>
        <banner></banner>
        <montecarlo-card style="margin-top: 4in;"></montecarlo-card>
        <business-card style="margin-top:  2in;"></business-card>
        <gaesa-card style="margin-top: 3in;"></gaesa-card>
        <interactive-map style="margin-top: 2in"></interactive-map>
        <youtube-video style="margin-top: 2in"></youtube-video>
    </div>
</template>

<script>
    import Banner from '@/components/home/Banner'
    import YoutubeVideo from "@/components/home/YoutubeVideo"
    import MontecarloCard from '@/components/home/MontecarloCard'
    import BusinessCard from '@/components/home/BusinessCard'
    import GaesaCard from '@/components/home/GaesaCard'
    import InteractiveMap from "@/components/home/Interactive";

    export default {
        name: "Home",
        components: {
            InteractiveMap,
            Banner,
            MontecarloCard,
            BusinessCard,
            YoutubeVideo,
            GaesaCard
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