const express = require("express");
require("dotenv").config();

const app = express();

function getMessage() {
  return process.env.MESSAGE ?? "Hello World";
}

app.get("/", function (req, res) {
  res.send(getMessage());
});

module.exports = app;
