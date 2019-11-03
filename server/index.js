const express = require("express");

const app = express();

const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.listen(port, () => {
  console.log(`Inkubator IT server is served at port ${port}`);
});
