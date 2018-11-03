var ctx = document.getElementById('myChart').getContext('2d');
loadJSON("viewersinjson.json", getChart);

function getChart(datas) {
var timelabels=[];
var viewercounts=[];
for (var i = 0; i< Object.keys(datas).length/2; i++ {
   timelabels.push(datas[i].time);
   viewercounts.push(datas[i].viewers);
}
var options = {
      title: {
        diplay: true,
        text: 'Chart Stream Viewer Count'
      },
      scales: {
          yAxes: [{
            stacked: true,
            gridLines: {
              display: true,
              color: "rgb(5, 107, 223, .5)"
          }
      }],
          xAxes: [{
            gridLines: {
              display: true
            }
          }]
     }
    };

var data = {
        labels: timelabels,
        datasets: [{
            label: 'Viewers',
            backgroundColor: 'rgb(5, 122, 223)',
            borderColor: 'rgb(5, 122, 223)',
            data: viewercounts,
            fill: false
        }], 

      
    };
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data:data,

    // Configuration options go here
    options: options
});
}
