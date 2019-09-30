<template>
    <Highcharts ref="bubbleHabs" :options="chartOptions"/>
</template>

<script>
    import Highcharts from "highcharts";
    import {genComponent} from "vue-highcharts";
    import boost from 'highcharts/modules/boost'

    require('highcharts/modules/exporting')(Highcharts);
    require('highcharts/highcharts-more.js')(Highcharts);
    boost(Highcharts)

    export default {
        name: "BubbleHabitaciones",
        components: {
            Highcharts: genComponent('Highcharts', Highcharts),
        },
        data() {
            return {
                Highcharts: Highcharts,
                chartOptions: {
                    chart: {
                        type: 'packedbubble',
                        height: '100%'
                    },
                    title: {
                        text: 'Cantidad de habitaciones por cadena extranjera'
                    },
                    tooltip: {
                        useHTML: true,
                        pointFormat: '<b>{point.name}:</b> {point.value} habitaciones <br> <p>{point.fact}</p>'
                    },
                    plotOptions: {
                        packedbubble: {
                            minSize: '30%',
                            maxSize: '120%',
                            zMin: 0,
                            zMax: 1000,
                            layoutAlgorithm: {
                                splitSeries: false,
                                gravitationalConstant: 0.02
                            },
                            dataLabels: {
                                enabled: true,
                                format: '{point.name}',
                                filter: {
                                    property: 'y',
                                    operator: '>',
                                    value: 250
                                },
                                style: {
                                    color: 'black',
                                    textOutline: 'none',
                                    fontWeight: 'normal'
                                }
                            }
                        }
                    },
                    series:[
                        {
                            "data": [
                                {
                                    "fact": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n" +
                                        "                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n" +
                                        "                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n" +
                                        "                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n" +
                                        "                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n" +
                                        "                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                                    "name": "Accor",
                                    "value": 816
                                },
                                {
                                    "fact": "",
                                    "name": "Louvre Hotel",
                                    "value": 897
                                }
                            ],
                            "name": "Francia"
                        },
                        {
                            "data": [
                                {
                                    "fact": "",
                                    "name": "Archipelago International",
                                    "value": 770
                                }
                            ],
                            "name": "Indonesia"
                        },
                        {
                            "data": [
                                {
                                    "fact": "",
                                    "name": "Banyan Tree Hotels & Resorts",
                                    "value": 812
                                }
                            ],
                            "name": "Singapur"
                        },
                        {
                            "data": [
                                {
                                    "fact": "",
                                    "name": "Blue Diamond Resort",
                                    "value": 8551
                                }
                            ],
                            "name": "Canadá"
                        },
                        {
                            "data": [
                                {
                                    "fact": "",
                                    "name": "Grupo Posadas",
                                    "value": 1382
                                }
                            ],
                            "name": "México"
                        },
                        {
                            "data": [
                                {
                                    "fact": "",
                                    "name": "H10 Hotels",
                                    "value": 2041
                                },
                                {
                                    "fact": "",
                                    "name": "Iberostar",
                                    "value": 6709
                                },
                                {
                                    "fact": "",
                                    "name": "Meliá Hotel International",
                                    "value": 14732
                                },
                                {
                                    "fact": "",
                                    "name": "Valentin Hotel & Resorts",
                                    "value": 1020
                                },
                                {
                                    "fact": "",
                                    "name": "Be Live",
                                    "value": 1351
                                },
                                {
                                    "fact": "",
                                    "name": "BLAU Hotels & Resorts",
                                    "value": 395
                                },
                                {
                                    "fact": "",
                                    "name": "Barceló",
                                    "value": 1353
                                },
                                {
                                    "fact": "",
                                    "name": "Blue Diamond Resort",
                                    "value": 302
                                },
                                {
                                    "fact": "",
                                    "name": "Futuro CACH (Blue Diamond)",
                                    "value": 280
                                },
                                {
                                    "fact": "",
                                    "name": "NH Hoteles",
                                    "value": 251
                                },
                                {
                                    "fact": "",
                                    "name": "ROC Hotels",
                                    "value": 760
                                }
                            ],
                            "name": "España"
                        },
                        {
                            "data": [
                                {
                                    "fact": "",
                                    "name": "Kempinski Hotels",
                                    "value": 246
                                }
                            ],
                            "name": "Suiza"
                        },
                        {
                            "data": [
                                {
                                    "fact": "",
                                    "name": "Labranda Hotel & Resort",
                                    "value": 1243
                                }
                            ],
                            "name": "Alemania"
                        },
                        {
                            "data": [
                                {
                                    "fact": "",
                                    "name": "Marriott",
                                    "value": 269
                                }
                            ],
                            "name": "Estados Unidos"
                        },
                        {
                            "data": [
                                {
                                    "fact": "",
                                    "name": "MGM Muthu Hotels",
                                    "value": 1385
                                }
                            ],
                            "name": "India"
                        },
                        {
                            "data": [
                                {
                                    "fact": "",
                                    "name": "Pestana Hoteles y Resorts",
                                    "value": 508
                                }
                            ],
                            "name": "Portugal"
                        },
                        {
                            "data": [
                                {
                                    "fact": "",
                                    "name": "Saratoga Resort",
                                    "value": 96
                                }
                            ],
                            "name": "Inglaterra"
                        },
                        {
                            "data": [
                                {
                                    "fact": "",
                                    "name": "Elite Club Vacanze",
                                    "value": 444
                                }
                            ],
                            "name": "Italia"
                        }
                    ]
                }
            }
        }
    }
</script>

<style scoped>

</style>