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
        metaInfo: {
            // Children can override the title.
            title: 'LA APUESTA HOTELERA EN CUBA',
            // Define meta tags here.
            meta: [
                {'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {
                    name: 'description',
                    content: 'Cuba apuesta con todo al turismo para su desarrollo. Aunque los números están en su contra, se pretende convertir al país en un paraíso hotelero. Un proyecto financiado, en su mayoría con capital cubano. ¿Valdrá la pena?'
                },
                {name: 'tags', content: 'cuba, hoteles, turismo, eltoque'},
                {name: 'author', content: 'Abraham Calas <dogcalas@gmail.com>'},
                // OpenGraph data (Most widely used)
                {property: 'og:title', content: 'LA APUESTA HOTELERA EN CUBA'},
                {property: 'og:site_name', content: 'LA APUESTA HOTELERA EN CUBA'},
                // The list of types is available here: http://ogp.me/#types
                {property: 'og:type', content: 'website'},
                // Should the the same as your canonical link, see below.
                {property: 'og:url', content: 'https://hoteles.eltoque.com'},
                {property: 'og:image', content: 'https://res.cloudinary.com/hmhkzirji/image/upload/v1570644605/eltoque/banner.jpg'},
                // Often the same as your meta description, but not always.
                {property: 'og:description', content: 'Cuba apuesta con todo al turismo para su desarrollo. Aunque los números están en su contra, se pretende convertir al país en un paraíso hotelero. Un proyecto financiado, en su mayoría con capital cubano. ¿Valdrá la pena?'},

                // Twitter card
                {name: 'twitter:card', content: 'summary'},
                {name: 'twitter:site', content: 'https://hoteles.eltoque.com'},
                {name: 'twitter:title', content: 'LA APUESTA HOTELERA EN CUBA'},
                {name: 'twitter:description', content: 'Cuba apuesta con todo al turismo para su desarrollo. Aunque los números están en su contra, se pretende convertir al país en un paraíso hotelero. Un proyecto financiado, en su mayoría con capital cubano. ¿Valdrá la pena?'},
                // Your twitter handle, if you have one.
                {name: 'twitter:creator', content: '@eltoquecom'},
                {name: 'twitter:image:src', content: 'https://res.cloudinary.com/hmhkzirji/image/upload/v1570644605/eltoque/banner.jpg'},

                // Google / Schema.org markup:
                {itemprop: 'name', content: 'LA APUESTA HOTELERA EN CUBA'},
                {itemprop: 'description', content: 'Cuba apuesta con todo al turismo para su desarrollo. Aunque los números están en su contra, se pretende convertir al país en un paraíso hotelero. Un proyecto financiado, en su mayoría con capital cubano. ¿Valdrá la pena?'},
                {itemprop: 'image', content: 'https://res.cloudinary.com/hmhkzirji/image/upload/v1570644605/eltoque/banner.jpg'}
            ]
        },
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
    .first-card-margin {
        margin-top: 4in;
    }

    .second-card-margin {
        margin-top: 2in;
    }

    .third-card-margin {
        margin-top: 2in;
    }

    .interactive-comp-margin {
        margin-top: 2in
    }

    @media screen and (max-width: 800px) {
        .first-card-margin {
            margin-top: 3.5in;
        }

        .second-card-margin {
            margin-top: 1in;
        }

        .third-card-margin {
            margin-top: 1in;
        }

        .interactive-comp-margin {
            margin-top: 1in
        }
    }

    @media screen and (max-width: 500px) {
        .first-card-margin {
            margin-top: 2.5in;
        }

        .second-card-margin {
            margin-top: 50px;
        }

        .third-card-margin {
            margin-top: 50px;
        }

        .interactive-comp-margin {
            margin-top: 50px;
        }
    }

    @media screen and (max-width: 425px) {
        .first-card-margin {
            margin-top: 3.5in;
        }

        .second-card-margin {
            margin-top: 50px;
        }

        .third-card-margin {
            margin-top: 50px;
        }

        .interactive-comp-margin {
            margin-top: 50px;
        }
    }
</style>
