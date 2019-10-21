<template>
    <Highcharts ref="bubbleHabs" :options="chartOptions"/>
</template>

<script>
    import Highcharts from "highcharts";
    import {genComponent} from "vue-highcharts";

    require('highcharts/highcharts-more.js')(Highcharts);

    export default {
        name: "OcupacionHabitaciones",
        components: {
            Highcharts: genComponent('Highcharts', Highcharts),
        },
        data() {
            let me = this
            return {
                percents: {
                    '28318.761':'61.3%',
                    '29231.438':'60.1%',
                    '29513.936':'52.3%',
                    '32940.288':'54.4%',
                    '35848.522':'57.1%',
                    '37142.400':'58.4%',
                    '40479.009':'60.7%',
                    '38797.265':'56.9%',
                    '34175.295':'49.5%'
                },
                Highcharts: Highcharts,
                chartOptions: {
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: 'Ocupación de habitaciones en Cuba'
                    },
                    colors: ['#ec6c5e', '#3a3d59', '#f6ab68', '#4c2b37', '#9c8986', '#6d889b', '#eb6375', '#f19384', '#4f2d54', '#ec6c5e', '#89cabd', '#575756', '#3a3d59', '#f6ab68', '#6d889b', '#3a3d59', '#f6ab68'],
                    subtitle: {
                        text: 'Fuente: Ministerio de Turismo / Oficina Nacional de Estadística e Información'
                    },
                    xAxis: {
                        categories: [
                            '2006',
                            '2008',
                            '2010',
                            '2012',
                            '2014',
                            '2015',
                            '2016',
                            '2017',
                            '2018'
                        ]
                    },
                    yAxis: [{
                        min: 0,
                        title: {
                            text: 'Número de habitaciones'
                        }
                    }, {
                        title: {
                            text: 'Tasa de ocupación'
                        },
                        opposite: true
                    }],
                    legend: {
                        shadow: false
                    },
                    tooltip: {
                        formatter: function () {
                            return `${this.point.category} <br> <b>${this.series.name}</b>: ${(this.series.name=='Habitaciones')?this.point.y:me.percents[this.point.y]} <br/>`;
                        }
                    },
                    plotOptions: {
                        column: {
                            grouping: false,
                            shadow: false,
                            borderWidth: 0
                        }
                    },
                    series: [{
                        name: 'Habitaciones',
                        color: 'rgba(165,170,217,1)',
                        data: [46197,48638,56432,60552,62782,63600,66687,68185,69041],

                    }, {
                        name: 'Tasa de ocupación',
                        color: '#dd9526',
                        data: [28318.761,29231.438,29513.936,32940.288,35848.522,37142.400,40479.009,38797.265,34175.295],
                        pointPadding: 0.30,
                    }]
                }
            }
        }
    }
</script>

<style scoped>

</style>