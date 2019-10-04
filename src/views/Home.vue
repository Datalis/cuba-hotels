<template>
    <div>
        <banner></banner>
        <montecarlo-card class="first-card-margin"></montecarlo-card>
        <business-card class="second-card-margin"></business-card>
        <gaesa-card class="third-card-margin"></gaesa-card>
        <interactive-map class="interactive-comp-margin"></interactive-map>
        <youtube-video class="youtube-comp-margin" style="margin-top: 2in"></youtube-video>
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

<style scoped>
    .first-card-margin{
        margin-top: 4in;
    }
    .second-card-margin{
        margin-top: 2in;
    }
    .third-card-margin{
        margin-top: 2in;
    }
    .interactive-comp-margin{
        margin-top: 2in
    }
    @media screen and (max-width: 800px){
        .first-card-margin{
            margin-top: 3.5in;
        }
        .second-card-margin{
            margin-top: 1in;
        }
        .third-card-margin{
            margin-top: 1in;
        }
        .interactive-comp-margin{
            margin-top: 1in
        }
    }

    @media screen and (max-width: 500px){
        .first-card-margin{
            margin-top: 2.5in;
        }
        .second-card-margin{
            margin-top: 50px;
        }
        .third-card-margin{
            margin-top: 50px;
        }
        .interactive-comp-margin{
            margin-top: 50px;
        }
    }
    @media screen and (max-width: 425px){
        .first-card-margin{
            margin-top: 3.5in;
        }
        .second-card-margin{
            margin-top: 50px;
        }
        .third-card-margin{
            margin-top: 50px;
        }
        .interactive-comp-margin{
            margin-top: 50px;
        }
    }
</style>
