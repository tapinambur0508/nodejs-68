const crypto = require("crypto");
const express = require("express");

const app = express();

// app.use(express.json());

const jsonParser = express.json();

app.post("/books", jsonParser, (req, res) => {
  console.log(req.body, typeof req.body);
  console.log({ title: req.body.title, author: req.body.author });

  return res.json({
    id: crypto.randomUUID(),
    title: req.body.title,
    author: req.body.author,
  });
});

app.post("/products", jsonParser, (req, res) => {
  console.log(req.body, typeof req.body);
  console.log({ name: req.body.name, description: req.body.description });

  return res.json({
    id: crypto.randomUUID(),
    name: req.body.name,
    description: req.body.description,
  });
});

app.listen(8080, () => {
  console.log("Server running at http://localhost:8080");
});
