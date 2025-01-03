const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the Home ",
  });
});

app.get("/users", (req, res) => {
  res.status(200).json({
    message: "Welcome to the Users route",
  });
});

app.get("/products", (req, res) => {
  res.status(200).json({
    message: "Welcome to the Products route",
  });
});

app.get("/about", (req, res) => {
  res.status(200).json({
    message: "Welcome to the About us route",
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
