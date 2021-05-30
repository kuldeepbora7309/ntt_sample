var express = require("express");

var app = express();
var bodyParser = require("body-parser");
// for parsing application/json
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization, user,token"
  );
  res.header("Access-Control-Allow-Methods", "POST, PUT, GET, OPTIONS,DELETE");
  if (req.method === "OPTIONS") {
    return res.status(200).send({
      error: true,
      message: "",
      data: [],
    });
  } else {
    return next();
  }
});

require("./app/route/office.route.js")(app);

// Create a Server
var server = app.listen(8082, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("App listening at http://%s:%s", host, port);
});
