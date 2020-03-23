//https://www.chartjs.org/docs/latest/

// dans l'en-tête html:
// <script type="text/javascript"
//         src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.js">
// </script>
// <link href="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.css"
//       rel="stylesheet"
//       type="text/css" />
//https://www.chartjs.org/samples/latest/
//https://www.chartjs.org/docs/latest/charts/ => types de chart supportés par chartjs
// pour le chart.js il y a 3 variables essentiels : data,options,ctx

var ctx = $('#radarChart'); // ctx: c'est un élement dans lequel tu mets ton chart

var data = { // Données, dans mon cas j'ai utilisé un radar chart
  labels: [ // nom des colonnes
    'Complexité',
    'Technique',
    'Logiciels',
    'Compétences',
    'Temps de développement',
    'Données',
    'Coût'
  ],
  datasets: [{
    label: radarDataLabel, // nom du dataset
    data: radarData, // ici j'ai récupéré les données de la partie back-end
    backgroundColor: 'rgba(75, 191, 115, 0.4)',
    pointHoverBackgroundColor: 'rgba(75, 191, 115, 1)',
  },]
};
// options : https://www.chartjs.org/docs/latest/configuration/
var options = {
    scale: {
        angleLines: {
            display: true
        },
        ticks: {
            suggestedMin: 0,
            suggestedMax: 5,
            stepSize:1,
        }
    }
};

var myRadarChart = new Chart(ctx, {
    type: 'radar',
    data: data,
    options: options
});
