<template>
    <Highcharts ref="evolutionVisits" :options="chartOptions"/>
</template>

<script>
    import Highcharts from "highcharts";
    import {genComponent} from "vue-highcharts";

    export default {
        name: "EvolucionHoteles",
        components: {
            Highcharts: genComponent('Highcharts', Highcharts),
        },
        data() {
            return {
                Highcharts: Highcharts,
                chartOptions: {
                    title: {
                        text: 'Llegada de visitantes a Cuba'
                    },
                    subtitle: {
                        text: 'Fuente: Ministerio de Turismo'
                    },
                    chart: {
                        type: 'area'
                    },
                    colors: ['#ec6c5e', '#3a3d59', '#f6ab68', '#4c2b37', '#9c8986', '#6d889b', '#eb6375', '#f19384', '#4f2d54', '#ec6c5e', '#89cabd', '#575756', '#3a3d59', '#f6ab68', '#6d889b', '#3a3d59', '#f6ab68'],
                    xAxis: {
                        categories: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'],
                        // tickmarkPlacement: 'on',
                        title: {
                            enabled: false
                        }
                    },
                    yAxis: {
                        title: {
                            text: 'Número de visitantes'
                        }
                    },
                    tooltip: {
                        split: true
                    },
                    plotOptions: {
                        area: {
                            stacking: 'normal',
                            lineColor: '#ffffff',
                            lineWidth: 0,
                            marker: {
                                enabled: false,
                                lineWidth: 0,
                                radius: 1,
                                lineColor: '#ffffff',
                                symbol: 'circle'
                            }
                        }
                    },

                    series: [
                        // {
                        //     name: 'TOTAL',
                        //     data: [1773986, 1774541, 1686162, 1905682, 2048572, 2319334, 2220567, 2152221, 2348340, 2429809, 2531745, 2716317, 2838355, 2852019, 3002745, 3524779, 4035577, 4689577, 4732280
                        //
                        //     ]
                        // },
                        {
                            name: 'OTROS',
                            data: [542555,535807,495424,546689,599079,787006,713620,677414,760051,791827,880359,971979,1023121,1023377,1077008,1220752,1377320,1661776
                            ]
                        }, {
                            name: 'CANADÁ',
                            data: [307725,350426,348468,452438,563371,602377,604263,660384,818246,914884,945248,1002318,1071696,1106004,1175285,1300405,1205809,1133824,1109339]
                        }, {
                            name: 'ESTADOS UNIDOS',
                            data: [76898,78789,77646,84529,49856,37233,36808,40521,41904,52455,63046,73566,9805,93420,92325,162972,284552,618346,637907
                            ]
                        }, {
                            name: 'ALEMANIA',
                            data: [203403,171851,152662,157721,143644,124527,114292,103054,100964,93437,93136,95124,108712,116150,139262,175507,242355,243172,197122
                            ]
                        }, {
                            name: 'ITALIA',
                            data: [175667,159423,147750,177627,178570,169317,144249,134289,126042,118347,112298,110432,10329,95718,112256,137970,191585,227829,208287
                            ]
                        }, {
                            name: 'REINO UNIDO',
                            data: [90972,94794,103741,120866,161189,199399,211075,208122,193932,172318,174343,175822,153737,149670,124093,156052,194815,205562,167370
                            ]
                        }, {
                            name: 'ESPAÑA',
                            data: [153197,140125,138609,127666,146236,194103,185531,133149,121166,129224,104948,101631,81354,73413,77509,107903,153340,168949,136613
                            ]
                        }, {
                            name: 'FRANCIA',
                            data: [132089,138765,129907,144548,119868,107518,103469,92304,90731,83478,8047,9437,101522,96865,103737,138972,187468,209239,177652
                            ]
                        }, {
                            name: 'MEXICO',
                            data: [86540,98495,87589,88787,79752,89154,97984,9212,84052,61487,6665,76326,78289,84943,83112,105767,131353,141540,171555]
                        }, {
                            name: 'CHINA',
                            data: [4940,6066,4366,4811,7007,87,9276,10864,11252,12352,11247,14749,18836,22713,28997,33875,40572,43322,49781
                            ]
                        }],

                    responsive: {
                        rules: [{
                            condition: {
                                maxWidth: 500
                            },
                            chartOptions: {
                                legend: {
                                    layout: 'horizontal',
                                    align: 'center',
                                    verticalAlign: 'bottom'
                                }
                            }
                        }]
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>
