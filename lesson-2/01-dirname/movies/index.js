const fs = require("node:fs/promises");
const path = require("node:path");

async function readMovies() {
  // const data = await fs.readFile('movies.txt','utf-8'); // ENOENT
  // const data = await fs.readFile("movies.txt", { encoding: "utf-8" }); // ENOENT

  const filePath = path.join(__dirname, "..", "static", "movies.txt");
  const data = await fs.readFile(filePath, { encoding: "utf-8" });

  return data;
}

module.exports = { readMovies };
