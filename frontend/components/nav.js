var React = require('react')

// Router
var Router = require("react-router");
var Link = Router.Link;

module.exports = React.createClass({
  render: function() {
    return (
      <nav className="demo-navigation mdl-navigation mdl-color--blue-grey-800">
        <Link to="dashboard" className="mdl-navigation__link" href=""><i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">home</i>Dashboard</Link>
        <Link to="charts" className="mdl-navigation__link" href=""><i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">insert_chart</i>Charts</Link>
        <Link to="text" className="mdl-navigation__link" href=""><i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">format_size</i>Text</Link>
        <Link to="account" className="mdl-navigation__link" href=""><i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">settings</i>My Account</Link>

        <div className="mdl-layout-spacer"></div>
        <a className="mdl-navigation__link" href=""><i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">help_outline</i><span className="visuallyhidden">Help</span></a>
      </nav>
    )
  }
})
