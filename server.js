require("dotenv").config();
var express = require("express"),
  app = express(),
  fs = require('fs'),
  path = require("path"),
  cors = require("cors"),
  helmet = require("helmet"),
  util = require('util'),
  morgan = require('morgan'),
  compress = require("compression"),
  config = require("./config"),
  bodyParser = require("body-parser"),
  ApiRoutes = require("./routes");

// Normal express config middlewares
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'server.log'), { flags: 'a' })
// setup the logger
app.use(morgan('short', { stream: accessLogStream }))
app.use(bodyParser.json());
app.use(compress());
// secure apps by setting various HTTP headers
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
// enable CORS - Cross Origin Resource Sharing
app.use(
  cors({
    origin: [
      "http://localhost:3000"
    ],
    credentials: true,
  })
);

// Custom api routes
app.use("/", ApiRoutes);
/** connect to Server **/
app.listen(config.PORT, function () {
    console.log("Listening on port " + config.PORT);
   
});
