const cors = require("cors");
const morgan = require("morgan");
const express = require("express");

const routes = require("./routes");

require("./db");

const app = express();

app.use(cors());
app.use(morgan("combined"));

app.use("/api", routes);

app.get("/ping", (__, res) => {
  res.send("pong");
});

app.listen(8080, () => {
  console.log("Server running at http://localhost:8080");
});
