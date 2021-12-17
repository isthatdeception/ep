const dotenv = require("dotenv");
const express = require("express");

dotenv.config();
// intializing the app
const app = express();

let content = "server page at the best";

app.get("/", (req, res) => {
  res.send(`<h1>{content}</h1>`);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, (req, res) => {
  console.log(`server is killing and is alive at ${PORT}`);
});
