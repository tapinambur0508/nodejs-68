const fs = require("node:fs/promises");
const path = require("node:path");
const express = require("express");

const router = express.Router();

// /api/books
router.get("/", (__, res) => {
  fs.readFile(path.join(__dirname, "books.json"), "utf8")
    .then((data) => res.json(JSON.parse(data)))
    .catch((err) => res.status(500).send(err));
});

// /api/books
router.post("/", (req, res) => {
  return res.send("Book created");
});

// /api/books/:id
router.put("/:id", (req, res) => {
  return res.send(`Book ${req.params.id} updated`);
});

// /api/books/:id
router.delete("/:id", (req, res) => {
  return res.send(`Book ${req.params.id} deleted`);
});

module.exports = router;
