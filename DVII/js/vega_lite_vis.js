var vg_1 = "js/emissionsByGas.vg.json";
  vegaEmbed('#donut_chart', vg_1, {"actions": false}).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);

var vg_2 = "js/bumpChart.vg.json";
vegaEmbed('#bump_chart', vg_2, {"actions": false}).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_3 = "js/averageCo2BarChart.vg.json";
vegaEmbed('#bar_chart', vg_3, {"actions": false}).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_4 = "js/regionCo2.vg.json";
vegaEmbed('#hconcat_co2', vg_4, {"actions": false}).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_5 = "js/areaChartGlobalSeaLevel.vg.json";
vegaEmbed('#area_chart_sea', vg_5, {"actions": false}).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_6 = "js/tempChangeAreaChart.vg.json";
vegaEmbed('#area_chart_temp', vg_6, {"actions": false}).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_7 = "js/choroplethMap.vg.json";
vegaEmbed('#choropleth_map', vg_7, {"actions": false}).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_8 = "js/choroplethMultiple.vg.json";
vegaEmbed('#choropleth_multiple', vg_8, {"actions": false}).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_9 = "js/tempHeatMap.vg.json";
vegaEmbed('#heat_map', vg_9, {"actions": false}).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);