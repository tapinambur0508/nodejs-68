const fs = require("fs/promises");

const addText = async () => {
  const result = await fs.appendFile("./file1.txt", `\ntest string ${Date.now()}`);
  return;
};

addText();
