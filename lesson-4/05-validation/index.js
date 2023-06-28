const crypto = require("crypto");
const express = require("express");

const bookSchema = require("./schemas/book");

const app = express();

const jsonParser = express.json();

app.post("/books", jsonParser, (req, res) => {
  const response = bookSchema.validate(req.body, { convert: false });

  if (typeof response.error !== "undefined") {
    return res.status(400).send("Validation Errors");
  }

  return res.json({
    id: crypto.randomUUID(),
    title: response.value.title,
    author: response.value.author,
    year: response.value.year,
  });
});

app.listen(8080, () => {
  console.log("Server running at http://localhost:8080");
});
