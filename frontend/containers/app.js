// React
var React = require("react");


// Router
var Router = require("react-router");
var RouteHandler = Router.RouteHandler;

var Header= require('../components/header')
var HeaderAvatar = require('../components/header-avatar')
var Nav = require('../components/nav')

var DemoCharts = require("./charts");


// Component
var App = React.createClass({
  render: function () {
    return (
      <div>
        <div className="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
          <Header />
          <div className="demo-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50">
            <HeaderAvatar />
            <Nav />
          </div>
          <main className="mdl-layout__content mdl-color--grey-100">
            <div className="mdl-grid demo-content">
              <RouteHandler {...this.props} />
            </div>
          </main>
        </div>
      </div>
    );
  }
});

module.exports = App;
