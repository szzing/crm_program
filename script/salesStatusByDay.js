google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
var data = google.visualization.arrayToDataTable([
  ['요일', '판매금액', '판매수량'],
  ['월', 10000000, 3000000],
  ['화', 13000000, 4000000],
  ['수', 7000000, 2000000],
  ['목', 15700000, 3900000],
  ['금', 12000000, 3700000],
  ['토', 9800000, 2200000],
  ['일', 8300000, 3800000],
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

var chart = new google.visualization.LineChart(document.getElementById('salesStatusByDay'));
  chart.draw(data, options);
}