const { program } = require("commander");

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

program
  .option("-a, --action <action>", "Action to invoke")
  .option("-i, --id <id>", "Book id")
  .option("-t, --title <title>", "Book title")
  .option("-at, --author <author>", "Book author");

program.parse(process.argv);

const options = program.opts();

invokeAction(options);
