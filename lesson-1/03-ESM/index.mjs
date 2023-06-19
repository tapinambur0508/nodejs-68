import fs from "fs/promises";

fs.readFile("./text.txt", "UTF-8")
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
