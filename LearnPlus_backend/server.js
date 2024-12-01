var express = require("express");
let app = express();
app.set('json spaces', 4);
const cors = require("cors");
app.use(cors());

let myItems = require('./item.js');

// Middleware function
app.use((req, res, next) => {
    console.log("In comes a request to: " + req.url);
    next(); 
  });

  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });