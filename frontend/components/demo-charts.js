var React = require('react')
var ChartistGraph = require('react-chartist')


// These use examples from https://fraserxu.me/react-chartist/

module.exports = React.createClass({
  render: function() {
    var lineChartData = {
      labels: [1, 2, 3, 4, 5, 6, 7, 8],
      series: [
        [5, 9, 7, 8, 5, 3, 5, 4]
      ]
    }
    var lineChartOptions = {
      low: 0,
      showArea: true
    }
    var simpleLineChartData = {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      series: [
        [12, 9, 7, 8, 5],
        [2, 1, 3.5, 7, 3],
        [1, 3, 4, 5, 6]
      ]
    }

    var biPolarBarChartData = {
      labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
      series: [
        [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
      ]
    };

    var biPolarBarChartOptions = {
      high: 10,
      low: -10,
      axisX: {
        labelInterpolationFnc: function(value, index) {
          return index % 2 === 0 ? value : null;
        }
      }
    }

    return (
      <div>
        <div className="demo-charts mdl-color--white mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-grid">
          <ChartistGraph data={lineChartData} options={lineChartOptions} type={'Line'} />
          <ChartistGraph data={simpleLineChartData} type={'Line'} />
          <ChartistGraph data={biPolarBarChartData} options={biPolarBarChartOptions} type={'Line'} />
        </div>
      </div>

    )
  }
})
