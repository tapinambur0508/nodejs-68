const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log({ method: req.method });
  console.log({ url: req.url });
  res.send("Home");
});

app.get("/cards", (req, res) => {
  console.log({ query: req.query });
  const { foo, a } = req.query;
  console.log({ foo, a });
  res.send("Cards");
});

app.get("/movies", (req, res) => {
  res.send("Movies");
});

app.post("/cards", (req, res) => {
  console.log({ method: req.method });
  console.log({ url: req.url });
  res.send("Cards created!");
});

app.put("/cards/:id", (req, res) => {
  console.log({ method: req.method });
  console.log({ url: req.url });
  console.log({ params: req.params });
  const { id } = req.params;
  console.log({ id, type: typeof id, number: Number(id) });
  res.send(`Card ${id} updated!`);
});

app.delete("/cards/:id", (req, res) => {
  console.log({ method: req.method });
  console.log({ url: req.url });
  console.log({ params: req.params });
  const { id } = req.params;
  console.log({ id, type: typeof id, number: Number(id) });
  res.send(`Card ${id} deleted!`);
});

app.listen(9000, () => {
  console.log("Server running at http://localhost:9000");
});
