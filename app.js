var express = require("express");
var sms = require("./sms.js");

var app = express();

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

app.get("/", () => {
  sms.callSmsApi();
});