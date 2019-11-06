const express = require("express");
const router = express.Router();

const portofolios = [
  {
    id: 1,
    imageUrl: "",
    title: "Aplikasi Web",
    platform: "Web",
    description: ""
  },
  {
    id: 2,
    imageUrl: "",
    title: "Aplikasi Mobile",
    platform: "Mobile",
    description: ""
  },
  {
    id: 3,
    imageUrl: "",
    title: "Aplikasi Desktop",
    platform: "Desktop",
    description: ""
  }
];

router.get("/", (req, res) => {
  res.send(portofolios);
});

router.post("/", (req, res) => {
  const { imageUrl, title, platform, description } = req.body;

  const portofolio = {
    id: portofolios.length + 1,
    imageUrl,
    title,
    platform,
    description
  };

  portofolios.push(portofolio);
  res.send(portofolios);
});

router.get("/:id", (req, res) => {
  const portofolio = portofolios.find(c => c.id === parseInt(req.params.id));
  if (!portofolio)
    return res.status(404).send("The portofolio with given id not found");
  res.send(portofolio);
});

router.put("/:id", (req, res) => {
  const portofolio = portofolios.find(
    portofolio => portofolio.id === parseInt(req.params.id)
  );
  if (!portofolio)
    return res.status(404).send("The portofolio with given id not found");

  portofolio.title = req.body.title;
  portofolio.imageUrl = req.body.imageUrl;
  portofolio.platform = req.body.platform;
  portofolio.description = req.body.description;

  res.send(portofolio);
});

router.delete("/:id", (req, res) => {
  const portofolio = portofolios.find(
    portofolio => portofolio.id === parseInt(req.params.id)
  );
  if (!portofolio)
    return res.status(404).send("The portofolio with given id not found");

  const index = portofolios.indexOf(portofolio);
  portofolios.splice(index, 1);

  res.send(portofolio);
});

module.exports = router;
