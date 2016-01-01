(function() {
  // React
  var React = require('react');
  var ReactDOM = require('react-dom');
  var Router = require('react-router');

  var App = require("./containers/app");
  var DemoCharts = require("./containers/charts");
  var DemoGraphs = require("./containers/graphs");
  var NotFound = require("./containers/not-found");

  //var injectTapEventPlugin = require("react-tap-event-plugin");
  //injectTapEventPlugin();

  require("babel-polyfill");

  // Set up Router object
  var Route = Router.Route;
  var DefaultRoute = Router.DefaultRoute;
  var NotFoundRoute = Router.NotFoundRoute;

  // Declare routes

  var routes = (
    <Route path="/" handler={App}>
      <Route name="charts" path="/charts" handler={DemoCharts} />
      <Route name="graphs" path="/graphs" handler={DemoGraphs} />
      <DefaultRoute handler={DemoCharts} />
      <NotFoundRoute handler={NotFound} />
    </Route>
  );


  Router.run(routes, function (Handler, state) {
    var params = state.params;
    ReactDOM.render(<Handler params={params} />, document.getElementById('app'));
  });

})();
