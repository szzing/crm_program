google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
var data = google.visualization.arrayToDataTable([
  ['시간', '판매금액', '판매수량'],
  [0, 10000000, 3000000],
  [1, 13000000, 4000000],
  [2, 7000000, 2000000],
  [3, 5700000, 3900000],
  [4, 12000000, 3700000],
  [5, 9800000, 2200000],
  [6, 8300000, 3800000],
  [7, 10000000, 3000000],
  [8, 13000000, 4000000],
  [9, 7000000, 2000000],
  [10, 15700000, 3900000],
  [11, 12000000, 3700000],
  [12, 9800000, 2200000],
  [13, 8300000, 3800000],
  [14, 9000000, 2000000],
  [15, 12000000, 3700000],
  [16, 9800000, 2200000],
  [17, 8300000, 3800000],
  [18, 13000000, 4000000],
  [19, 7000000, 2000000],
  [20, 15700000, 3900000],
  [21, 13000000, 4000000],
  [22, 7000000, 2000000],
  [23, 15700000, 3900000],
  [24, 12000000, 3700000]
]);

var options = {
  backgroundColor : '#121119',
  legend: {
    textStyle: {color:'#595368'},
    position:'bottom',
  },
  hAxis: {
    textStyle: {color:'#595368'},
    baseline:{color: '#595368'},
    gridlines: {
      color: 'transparent'
    }
  },
  vAxis: {
    textStyle: {color: 'transparent'},
    baseline: {color: '#595368'},
    gridlines: {
      color: '#261e3a'
    }
  },
  lineWidth: 3.5,
  chartArea: {
    width: '100%',
    heigth: '100%'
  },
  series: {
    0: { color: '#4bc5d6', pointSize: 7},
    1: { color: '#1e7ec1', pointSize: 7}
  }
};

var chart = new google.visualization.LineChart(document.getElementById('salesStatusByTime'));
  chart.draw(data, options);
}