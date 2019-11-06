const express = require("express");
const cors = require("cors");

const peoples = require("./routes/people");
const portofolios = require("./routes/portofolio");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/peoples", peoples);
app.use("/portofolios", portofolios);

const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.listen(port, () => {
  console.log(`Inkubator IT server is served at port ${port}`);
});
