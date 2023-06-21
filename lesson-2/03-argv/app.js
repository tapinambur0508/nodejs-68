const books = require("./books");

async function invokeAction({ action, id, title, author }) {
  switch (action) {
    case "getAll":
      const allBooks = await books.getAll();
      console.log(allBooks);
      return;
    case "getById":
      const book = await books.getById(id);
      console.log(book);
      break;
    case "create":
      const newBook = await books.create({ title, author });
      console.log(newBook);
      break;
    case "update":
      const updatedBook = await books.update(id, { title, author });
      console.log(updatedBook);
      break;
    case "remove":
      const res = await books.remove(id);
      console.log(res);
      break;
    default:
      console.log("Unknown action");
  }
}

console.log(process.argv);

const actionIndex = process.argv.indexOf("--action");

if (actionIndex !== -1) {
  const action = process.argv[actionIndex + 1];
  const id = process.argv[actionIndex + 2];
  const title = process.argv[actionIndex + 3];
  const author = process.argv[actionIndex + 4];

  console.log(action, id, title, author);

  invokeAction({ action, id, title, author });
}
