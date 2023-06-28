const path = require("node:path");
const express = require("express");

const app = express();

function checkFileAccess(req, res, next) {
  if (req.path === "/image.png") {
    return res.status(403).end();
  }

  return next();
}

app.use(checkFileAccess, express.static(path.join(__dirname, "public")));

app.listen(8080, () => {
  console.log("Server running at http://localhost:8080");
});
