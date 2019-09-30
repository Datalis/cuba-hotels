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
                        text: 'Llegada de visitantes, 2000-2018'
                    },
                    subtitle: {
                        text: 'Fuente: '
                    },
                    chart: {
                        type: 'area'
                    },
                    xAxis: {
                        categories: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'],
                        tickmarkPlacement: 'on',
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
                            lineWidth: 1,
                            marker: {
                                lineWidth: 1,
                                lineColor: '#ffffff'
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
                            data: [471902, 456306, 394973, 437041, 541467, 727746, 650459, 600329, 669368, 628808, 617387, 687037, 754099, 755652, 810770, 924535, 1074298, 1258672, 3522917
                            ]
                        }, {
                            name: 'CANADÁ',
                            data: [307725, 350426, 348468, 452438, 563371, 602377, 604263, 660384, 818246, 914884, 945248, 1002318, 1071692, 1105726, 1175077, 1295597, 1205809, 1134225]
                        }, {
                            name: 'ESTADOS UNIDOS',
                            data: [147551, 158290, 178097, 194177, 107468, 96493, 99957, 117605, 132587, 215474, 326018, 358508, 366854, 353430, 350091, 453925, 613982, 1052419, 1159419
                            ]
                        }, {
                            name: 'ALEMANIA',
                            data: [203403, 171851, 152662, 157721, 143644, 124527, 114291, 103053, 100964, 93437, 93136, 95124, 108709, 115546, 139136, 174415, 242355, 243408
                            ]
                        }, {
                            name: 'ITALIA',
                            data: [175667, 159423, 147750, 177627, 178570, 169317, 144262, 134291, 126042, 118347, 112298, 110432, 103287, 95536, 112076, 137727, 191585, 228028
                            ]
                        }, {
                            name: 'REINO UNIDO',
                            data: [90972, 94794, 103741, 120866, 161189, 199399, 211075, 208122, 193932, 172318, 174343, 175822, 153731, 149513, 123910, 155802, 194815, 205727
                            ]
                        }, {
                            name: 'ESPAÑA',
                            data: [153197, 140125, 138609, 127666, 146236, 194103, 185531, 133149, 121166, 129224, 104948, 101631, 81354, 73057, 77099, 107368, 153340, 169507
                            ]
                        }, {
                            name: 'FRANCIA',
                            data: [132089, 138765, 129907, 144548, 119868, 107518, 103469, 92304, 90731, 83478, 80470, 94370, 101521, 96636, 103475, 138474, 187468, 209642
                            ]
                        }, {
                            name: 'MEXICO',
                            data: [86540, 98495, 87589, 88787, 79752, 89154, 97984, 92120, 84052, 61487, 66650, 76326, 78286, 84705, 82820, 105406, 131353, 142050]
                        }, {
                            name: 'CHINA',
                            data: [4940, 6066, 4366, 4811, 7007, 8700, 9276, 10864, 11252, 12352, 11247, 14749, 18822, 22218, 28291, 31530, 40572, 45899, 49944
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