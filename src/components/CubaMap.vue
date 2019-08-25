<template>
  <div>
    <Highmaps ref="mapChartCuba" :options="chartOptions" />
  </div>
</template>

<script>
import Highcharts from "highcharts";
import { genComponent } from "vue-highcharts";
import loadMap from "highcharts/modules/map";
import cujson from "../map/cu-all.json"

loadMap(Highcharts);

export default {
  name: "CubaMap",
  components: {
    // Highcharts: genComponent('Highcharts', Highcharts),
    Highmaps: genComponent("Highmaps", Highcharts)
  },
  props: {
    msg: String
  },
  data() {
    return {
      Highcharts: Highcharts,
      chartOptions: {
        chart: {},
        title: {
          text: "Highmaps basic demo"
        },
        subtitle: {
          text: "CUBA"
        },
        mapNavigation: {
          enabled: false
        },
        colorAxis: {
          min: 0
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
                color: "#BADA55"
              }
            },
            dataLabels: {
              enabled: true,
              useHTML: true,
              format: "{point.name}"
            }
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
</style>
