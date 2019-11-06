const express = require("express");
const cors = require("cors");

const peoples = require("./routes/people");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/peoples", peoples);

const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.listen(port, () => {
  console.log(`Inkubator IT server is served at port ${port}`);
});
