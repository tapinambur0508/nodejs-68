// const fs = require("node:fs");

// fs.readFile('./text.txt', 'UTF-8', (err, data) => {
//   if (err) throw err;

//   console.log(data);
// });

// console.log("After");

// fs.writeFile('./text.txt', "Hello World", (err, data) => {
//   if (err) throw err;

//   console.log(data);
// });

// fs.appendFile('./text.txt', "Hello World\n", (err, data) => {
//   if (err) throw err;

//   console.log(data);
// });

// try {
//   const data = fs.readFileSync("./index.html", "UTF-8");
//   console.log(data);
// } catch (err) {
//   console.log(err);
// }

// console.log("After");

// fs.promises
//   .readFile("./text.txt", "UTF-8")
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

// console.log("After");

// const fs = require("fs").promises;
const fs = require("node:fs/promises");

// fs.readFile("./text.txt", "UTF-8")
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

// console.log("After");

async function readFile(filePath) {
  const data = await fs.readFile(filePath, "UTF-8");

  return data;
}

async function main() {
  const data = await readFile("./text.txt");

  console.log(data);
}

main();
