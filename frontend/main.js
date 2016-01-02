(function() {
  // React
  var React = require('react');
  var ReactDOM = require('react-dom');
  var Router = require('react-router');

  var App = require("./containers/app");
  var DemoCharts = require("./containers/charts");
  var DemoText = require("./containers/text");
  var Account = require("./containers/account-setup");

  var Dashboard = require("./containers/dashboard");

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
      <Route name="dashboard" path="/dashboard" handler={Dashboard} />
      <Route name="charts" path="/charts" handler={DemoCharts} />
      <Route name="text" path="/text" handler={DemoText} />
        <Route name="account" path="/acount" handler={Account} />

      <DefaultRoute handler={Dashboard} />
      <NotFoundRoute handler={NotFound} />
    </Route>
  );


  Router.run(routes, function (Handler, state) {
    var params = state.params;
    ReactDOM.render(<Handler params={params} />, document.getElementById('app'));
  });

})();
