google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
var data = google.visualization.arrayToDataTable([
  ['X축', 'Sales', 'Expenses'],
  [0, 0, 0],
  [1, 1, 2],
  [2, 5, 1],
  [3, 4, 2],
  [4, 7, 4],
  [5, 2, 3],
  [6, 5, 2],
  [7, 3, 7],
  [8, 2, 5],
  [9, 4, 2],
  [10, 3, 6],
]);

var options = {
  height : 350,
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
        max: 8
    }
  },
  lineWidth: 5,
  series: {
    0: { color: '#ef4766'},
    1: { color: '#4bc5d6'}
  }
};

var chart = new google.visualization.LineChart(document.getElementById('myChart'));
  chart.draw(data, options);
}