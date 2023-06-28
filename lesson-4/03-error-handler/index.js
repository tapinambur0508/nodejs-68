const fs = require("node:fs/promises");
const path = require("node:path");
const express = require("express");

const app = express();

app.get("/books", (__, res, next) => {
  fs.readFile(path.join(__dirname, "public", "books.json"), "utf8")
    .then((data) => res.send(JSON.parse(data)))
    .catch((error) => next(error));
});

// Handle 404 errors
app.use((__, res, ___) => {
  // return res.status(404).send('Not found');
  return res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
});

// Handle 500 errors
app.use((error, __, res, ___) => {
  console.error(error);
  // return res.status(500).send("Server error");
  return res.status(500).sendFile(path.join(__dirname, "public", "500.html"));
});

app.listen(8080, () => {
  console.log("Server running at http://localhost:8080");
});
