const fs = require("node:fs/promises");
const path = require("node:path");
const cors = require("cors");
const morgan = require("morgan");
const express = require("express");

const app = express();

function checkAuth(req, res, next) {
  const { apiKey } = req.query;

  if (typeof apiKey === "undefined") {
    return res.status(401).send("Unauthorized");
  }

  if (apiKey !== "123456") {
    return res.status(401).send("Unauthorized");
  }

  next();
}

// app.use(checkAuth);
app.use(cors());
app.use(morgan("combined"));

app.get("/books", checkAuth, (__, res) => {
  fs.readFile(path.join(__dirname, "books.json"), "utf8")
    .then((data) => res.json(JSON.parse(data)))
    .catch((err) => res.status(500).send(err));
});

app.get("/ping", (__, res) => {
  res.send("pong");
});

app.listen(8080, () => {
  console.log("Server running at http://localhost:8080");
});
