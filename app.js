var express = require("express");
var sms = require("./sms.js");

var app = express();

app.listen(8080, () => {
  console.log("Server running on port 3000");
});

app.get("/", (req, res, next) => {
  //sms.callSmsApi();
  res.json(["successs"]);
});