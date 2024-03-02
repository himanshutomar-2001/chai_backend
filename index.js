require("dotenv").config();
const express = require("express");
var app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("<h1>Chai or code!</h1>");
});
app.get("/register", (req, res) => {
  res.send("<h1>Chai or code 2!</h1>");
});
app.get("/login", (req, res) => {
  res.send("<h1>Chai or code 3!</h1>");
});
app.get("/twitter", (req, res) => {
  res.send("<h1>Chai or code 4!</h1>");
});

app.listen(port, () => {
  console.log("currently listening to the port ", { port });
});
