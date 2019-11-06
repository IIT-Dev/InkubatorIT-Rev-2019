const express = require("express");
const router = express.Router();

const peoples = [
  { id: 1, imageUrl: "", name: "Wildan Dicky", role: "" },
  { id: 2, imageUrl: "", name: "Nabila Rahmi", role: "" },
  { id: 3, imageUrl: "", name: "Cornelius", role: "" },
  { id: 4, imageUrl: "", name: "Albert Sahala", role: "" }
];

router.get("/", (req, res) => {
  res.send(peoples);
});

router.post("/", (req, res) => {
  const { imageUrl, name, role } = req.body;

  const people = {
    id: peoples.length + 1,
    imageUrl,
    name,
    role
  };

  peoples.push(people);
  res.send(peoples);
});

router.get("/:id", (req, res) => {
  const people = peoples.find(c => c.id === parseInt(req.params.id));
  if (!people)
    return res.status(404).send("The people with given id not found");
  res.send(people);
});

router.put("/:id", (req, res) => {
  const people = peoples.find(people => people.id === parseInt(req.params.id));
  if (!people)
    return res.status(404).send("The people with given id not found");

  people.name = req.body.name;
  people.imageUrl = req.body.imageUrl;
  people.role = req.body.role;

  res.send(people);
});

router.delete("/:id", (req, res) => {
  const people = peoples.find(people => people.id === parseInt(req.params.id));
  if (!people)
    return res.status(404).send("The people with given id not found");

  const index = peoples.indexOf(people);
  peoples.splice(index, 1);

  res.send(people);
});

module.exports = router;
