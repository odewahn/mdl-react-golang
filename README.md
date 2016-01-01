# MDL / React template

This repo shows how to use the awesome [Material Design Lite](http://www.getmdl.io/index.html) "Dashboard" template with react and react-router (v 0.13, though, so it's kinda old, but I don't really see what you get from the later versions of theat tool).    The files in the `frontend` directory have all the react stuff, while the files in the `backend` directory show how you can serve the site with Golang.  

To use it:

* Clone the repo
* Run `npm install`
* Run `npm start`

You'll also need a working Golang installation and Gin.  For additional info, see https://github.com/odewahn/golang-react-template

*NB*: I added an `index.html` in the root folder so that it would render on github pages, but if you're actually coding with this, you should use the one in `backend\public`.
