google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
var data = google.visualization.arrayToDataTable([
  ['X', '지표1', '지표2'],
  [1, 1, 2],
  [2, 5, 1],
  [3, 4, 2],
  [4, 7, 4]
]);

var options = {
  backgroundColor : '#121119',
  curveType: 'function',
  legend: {position:'none'},
  hAxis: {
    textStyle: {color: '#261e3a'},
    baseline:'none',
    gridlines: {
      color: 'transparent',
    }
  },
  vAxis: {
    textStyle: {color: '#261e3a'},
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
  series: {
    0: { color: '#566db4'},
    1: { color: '#4bc5d6'}
  }
};

var chart = new google.visualization.ColumnChart(document.getElementById('myBarChart'));
  chart.draw(data, options);
}