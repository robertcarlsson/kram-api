var express = require("express");
var sms = require("./sms.js");
var path = require('path');

var app = express();

var port = process.env.PORT | 8080;

app.listen(port, () => {
  console.log("Server running on port " + port.toString());
});

app.get("/", (req, res, next) => {
  //sms.callSmsApi();
  //res.json(["successs"]);
  res.sendFile(path.join(__dirname + '/index.html'));
});