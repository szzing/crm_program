google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
var data = google.visualization.arrayToDataTable([
  ['주문빈도', '지표1', '지표2'],
  ['25', 1, 2],
  ['50', 5, 1],
  ['75', 4, 2],
  ['100', 7, 4]
]);

var options = {
  backgroundColor : '#121119',
  legend: {position:'none'},
  hAxis: {
    textStyle: {color: '#595368'},
    baseline:'none',
    gridlines: {
      color: 'transparent',
    }
  },
  vAxis: {
    textStyle: {color: '#595368'},
    baseline: {color: '#261e3a'},
    gridlines: {
      color: '#261e3a'
    },
    viewWindowMode:'explicit',
    viewWindow: {
        min: 0,
        max: 10
    }
  },
  chartArea: {
    width: '100%',
    heigth: '100%'
  },
  series: {
    0: { color: '#566db4'},
    1: { color: '#4bc5d6'}
  }
};

var chart = new google.visualization.ColumnChart(document.getElementById('orderFrequencyChart'));
  chart.draw(data, options);
}