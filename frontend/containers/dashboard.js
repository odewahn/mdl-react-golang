var React = require('react')
var DemoCharts = require('../components/demo-charts')
var DemoText = require('../components/demo-text')

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <DemoCharts />
        <DemoText />
      </div>
    )
  }
})
