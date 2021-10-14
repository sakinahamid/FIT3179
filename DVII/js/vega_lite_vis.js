var vg_1 = "js/emissionsByGas.vg.json";
  vegaEmbed('#donut_chart', vg_1).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);

var vg_2 = "js/bumpChart.vg.json";
vegaEmbed('#bump_chart', vg_2).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_3 = "js/averageCo2BarChart.vg.json";
vegaEmbed('#bar_chart', vg_3).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);