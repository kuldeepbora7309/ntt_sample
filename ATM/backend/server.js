var express = require("express");
let { validateToken } = require("./app/controller/user.controller");
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
    console.log(req);
    if (
      req.originalUrl !== "/api/authenticate" &&
      req.originalUrl !== "/api/generate-otp"
    ) {
      if (!req.headers.authorization) {
        return res.status(401).json({ error: "Authorization Failed!" });
      } else {
        const token = req.headers.authorization.split(" ")[1];
        console.log("sdasdasd", token);
        return validateToken(token).then((response) => {
          if (response.error) {
            return res.status(401).json({ error: "Authorization Failed!" });
          } else {
            return next();
          }
        });
      }
    }
    return next();
  }
});

require("./app/route/user.route.js")(app);

// Create a Server
var server = app.listen(8082, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("App listening at http://%s:%s", host, port);
});
