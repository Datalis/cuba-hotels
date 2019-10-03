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
    import cujson from "../../map/cu-all.json"
    import {mapGetters} from 'vuex'

    loadMap(Highcharts);

    export default {
        name: "CubaMap",
        components: {
            Highmaps: genComponent("Highmaps", Highcharts)
        },
        props: {
            msg: String
        },
        computed: {
            ...mapGetters(['hotels'])
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
                        pointFormat: '<span style="color: #cc983c"> {point.name}</span><br><span style="color: #cc983c">Hoteles: {point.value}</span>'
                    },
                    chart: {
                        backgroundColor: 'transparent'
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
                                ["cu-ho", 1],
                                ["cu-ar", 0],
                                ["cu-ma", 0],
                                ["cu-vc", 0],
                                ["cu-5812", 0],
                                ["cu-ij", 0],
                                ["cu-ss", 0],
                                ["cu-ca", 0],
                                ["cu-cm", 0],
                                ["cu-ch", 0],
                                ["cu-cf", 0],
                                ["cu-gu", 0],
                                ["cu-gr", 0],
                                ["cu-lt", 0],
                                ["cu-sc", 0],
                                ["cu-mq", 0],
                                ["cu-pr", 0]
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
        },
        mounted() {
            this.$refs.mapChartCuba.chart.update({
                series: [{
                    data: [
                        ["cu-ho", this.hotels.filter(h => h.provincia.nombre === 'Holguín').length],
                        ["cu-ar", this.hotels.filter(h => h.provincia.nombre === 'Artemisa').length],
                        ["cu-ma", this.hotels.filter(h => h.provincia.nombre === 'Matanzas').length],
                        ["cu-vc", this.hotels.filter(h => h.provincia.nombre === 'Villa Clara').length],
                        // ["cu-5812",999],
                        ["cu-ij", this.hotels.filter(h => h.provincia.nombre === 'Isla de la Juventud').length],
                        ["cu-ss",this.hotels.filter(h => h.provincia.nombre === 'Sancti Spíritus').length],
                        ["cu-ca", this.hotels.filter(h => h.provincia.nombre === 'Ciego de Ávila').length],
                        ["cu-cm", this.hotels.filter(h => h.provincia.nombre === 'Camagüey').length],
                        ["cu-ch", this.hotels.filter(h => h.provincia.nombre === 'La Habana').length],
                        ["cu-cf", this.hotels.filter(h => h.provincia.nombre === 'Cienfuegos').length],
                        ["cu-gu", this.hotels.filter(h => h.provincia.nombre === 'Guantánamo').length],
                        ["cu-gr", this.hotels.filter(h => h.provincia.nombre === 'Granma').length],
                        ["cu-lt", this.hotels.filter(h => h.provincia.nombre === 'Las Tunas').length],
                        ["cu-sc",this.hotels.filter(h => h.provincia.nombre === 'Santiago de Cuba').length],
                        ["cu-mq", this.hotels.filter(h => h.provincia.nombre === 'Mayabeque').length],
                        ["cu-pr", this.hotels.filter(h => h.provincia.nombre === 'Pinar del Río').length]

                    ]
                }]
            })
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
