const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    return res.end("Home");
  }

  if (req.url === "/cards") {
    return res.end("Cards");
  }

  if (req.url === "/movies") {
    return res.end("Movies");
  }

  res.end("Not found");
});

server.listen(8080, () => {
  console.log("Server running at http://localhost:8080");
});
