# Purpose:
* A quick refresher for publishing MERN apps on AWS.
* A single-page app that allows an authenticated user to create a todo list.

# Objectives & Issues:
- [ ] Server provides app at LocalHost:3000
  - [ ] Build with webpack
    - [X] Breaking changes in webpack 5:
        * (pass) reverted to webpack 4.8
    - [X] Webpack builds bundle.js, but is not running in watch mode:
        * (fail) changed "react-dev": "webpack -d --watch" to "webpack -d -w". This does not change anything.
        * (pass) in webpack.config.js, add watch:true to the config object. this is causing webpack to persist, but I am unsure if webpack is being notified of changes --> it is in App.jsx, but not for index.html
        * (n/a) in package.json, run the --progress option to verify if webpack is being notified of changes. This just adds a loading bar to the build proecess.
        * (likely non-issue) webpack rebuilds for changes in App.jsx, but not for index.html? 
  - [ ] Start server
  - [ ] Verify with PostMan
- [ ] Front-End Prototype
- [ ] Back-End MVP
- [ ] Front-End MVP
- [ ] Authentication
- [ ] AWS
