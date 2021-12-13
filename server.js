const express = require("express");

const app = express();

let content = "server page";

app.get("/", (req, res) => {
  res.send(`<h1>{content}</h1>`);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, (req, res) => {
  res.json(`server is killing and is alive at ${PORT}`);
});
