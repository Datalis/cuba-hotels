<template>
    <div>
        <div class="map-date">
            Agosto 2019
        </div>
        <Highmaps style="margin-top: -50px" ref="mapChartCuba" :options="chartOptions"/>
    </div>
</template>

<script>
    import Highcharts from "highcharts";
    import {genComponent} from "vue-highcharts";
    import loadMap from "highcharts/modules/map";
    import cujson from "../map/cu-all.json"

    loadMap(Highcharts);

    export default {
        name: "CubaMap",
        components: {
            Highmaps: genComponent("Highmaps", Highcharts)
        },
        props: {
            msg: String
        },
        data() {
            return {
                Highcharts: Highcharts,
                chartOptions: {
                    legend: {
                        enabled: false
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0,0,0,0.9)',
                        headerFormat: '',
                        pointFormat: '<span style="color: #cc983c"> {point.name}</span><br><span style="color: #cc983c">Hoteles: {point.x}</span>'
                    },
                    chart: {
                        backgroundColor: 'transparent',

                    },
                    exporting: {
                        buttons: {
                            contextButton: {
                                enabled: false
                            }
                        }
                    },
                    colorAxis: {
                        // min: 0,
                        maxColor: 'transparent',
                        minColor: 'transparent'
                    },

                    title: {
                        text: ""
                    },
                    credits: {
                        enabled: false
                    },
                    mapNavigation: {
                        enabled: false
                    },
                    series: [
                        {
                            mapData: cujson,
                            data: [
                                ["cu-ho", 0],
                                ["cu-ar", 1],
                                ["cu-ma", 2],
                                ["cu-vc", 3],
                                ["cu-5812", 4],
                                ["cu-ij", 5],
                                ["cu-ss", 6],
                                ["cu-ca", 7],
                                ["cu-cm", 8],
                                ["cu-ch", 9],
                                ["cu-cf", 10],
                                ["cu-gu", 11],
                                ["cu-gr", 12],
                                ["cu-lt", 13],
                                ["cu-sc", 14],
                                ["cu-mq", 15],
                                ["cu-pr", 16]
                            ],
                            name: "Random data",
                            states: {
                                hover: {
                                    color: "#cc983c" // region color when mouse hover
                                }
                            },
                            dataLabels: {
                                enabled: false, // over region labels
                                // useHTML: true,
                                // format: "{point.name}"
                            },
                            borderColor: '#000000', // line separator between regions
                            borderWidth: 3,
                        }
                    ]
                }
            };
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

    .map-date {
        font-family: Montserrat-Light;
        font-size: 27.93pt;
        left: 78%;
        position: relative;
    }

    @media screen and (max-width: 1024px) {
        .map-date {
            left: 70%;
        }
    }

    @media screen and (max-width: 960px) {
        .map-date {
            left: 52%;
        }
    }

    @media screen and (max-width: 600px) {
        .map-date {
            font-size: 22.93pt;
            margin-bottom: -40px;
            left: 46%;
        }
    }

    @media screen and (max-width: 500px) {
        .map-date {
            margin-bottom: -100px;
            font-size: 20.93pt;
            left: 40%;
        }
    }

    @media screen and (max-width: 450px) {
        .map-date {
            left: 30%;
        }
    }

    @media screen and (max-width: 400px) {
        .map-date {
            margin-bottom: -100px;
            font-size: 21.93pt;
            /*left: 15%;*/
        }
    }

    @media screen and (max-width: 320px) {
        .map-date {
            margin-bottom: -100px;
            font-size: 15.93pt;
            /*left: 20%;*/
        }
    }

</style>

<style>
    .black-tooltip {
        background-color: rgba(0, 0, 0, .2);
    }
</style>
