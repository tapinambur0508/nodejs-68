const fs = require("node:fs/promises");
const path = require("node:path");
const crypto = require("node:crypto");

const filePath = path.join(__dirname, "books.json");

async function readBooks() {
  const data = await fs.readFile(filePath, "utf-8");

  return JSON.parse(data);
}

async function writeBooks(books) {
  await fs.writeFile(filePath, JSON.stringify(books));
}

async function getAll() {
  const books = await readBooks();

  return books;
}

async function getById(id) {
  const books = await readBooks();

  const book = books.find((book) => book.id === id);

  return book;
}

async function create(book) {
  const books = await readBooks();
  const newBook = { ...book, id: crypto.randomUUID() };

  books.push(newBook);

  await writeBooks(books);

  return newBook;
}

async function update(id, book) {
  const books = await readBooks();

  const index = books.findIndex((book) => book.id === id);

  const newBooks = [
    ...books.slice(0, index),
    { ...book, id },
    ...books.slice(index + 1),
  ];

  await writeBooks(newBooks);

  return { ...book, id };
}

async function remove(id) {
  const books = await readBooks();

  const index = books.findIndex((book) => book.id === id);

  const newBooks = [...books.slice(0, index), ...books.slice(index + 1)];

  await writeBooks(newBooks);

  return "Success";
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
