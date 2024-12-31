const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.staus(200).json({
    message: "Welcome to the Home "});
});

app.get("/users", (req, res) => {
  res.staus(200).json({
    message: "Welcome to the Users route"});
});

app.get("/products", (req, res) => {
  res.staus(200).json({
    message: "Welcome to the Products route"});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
