# Purpose:
* A quick refresher for publishing MERN apps on AWS.
* A single-page app that allows an authenticated user to create a todo list.

# Objectives & Issues:
- [X] Server provides app at LocalHost:3000
  - [X] Build with webpack
    - [X] Breaking changes in webpack 5:
        * (pass) reverted to webpack 4.8
    - [X] Webpack builds bundle.js, but is not running in watch mode:
        * (fail) changed "react-dev": "webpack -d --watch" to "webpack -d -w". This does not change anything.
        * (pass) in webpack.config.js, add watch:true to the config object. this is causing webpack to persist, but I am unsure if webpack is being notified of changes --> it is in App.jsx, but not for index.html
        * (n/a) in package.json, run the --progress option to verify if webpack is being notified of changes. This just adds a loading bar to the build proecess.
        * (likely non-issue) webpack rebuilds for changes in App.jsx, but not for index.html? 
  - [X] Start server
  - [X] Verify with PostMan
- [X] Back-End Prototype
  - [X] Install json-server
  - [X] todo-item object has: {String} itemName, {String} itemContents, {Boolean} fin
  - [X] start json-server, verify it with web browser
  - [X] query json-server with postman
    * (fail) json-server does not seem to be playing nice with postman. I'm going
    to move on from this issue for now.
    * (pass) the issue with json-server and postman was simply that I can't be having nodemon and json-server running on the same port localhost:3000.
- [ ] Front-End Prototype
  - [X] Prototype drawings: see mern-todo.excalidraw
  - [X] Front-end recieves data from back-end prototype
  - [ ] Todo Item card:
    - [ ] itemName
    - [ ] itemContents
    - [ ] finButton will hide the card
  - [ ] create new item button:
    - [ ] interactive button
    - [ ] modal containing new item form
      - [ ] new item form takes itemName and itemContents
      - [ ] new item form will POST the object to json-server
      - [ ] modal covers page
  - [ ] CSS is enough to be apealing
    - [ ] Blue background
    - [ ] White cards
    - [ ] Cards have a dark shadow
    - [ ] Black text
- [ ] Back-End MVP
- [ ] Front-End MVP
- [ ] Authentication
- [ ] AWS
