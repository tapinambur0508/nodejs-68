const express = require("express");

const BookController = require("../controllers/book");

const router = express.Router();

const jsonParser = express.json();

// /api/books
router.get("/", BookController.getBooks);

// /api/books
router.post("/", jsonParser, BookController.createBook);

// /api/books/:id
router.get("/:id", BookController.getBookById);

// /api/books/:id
router.put("/:id", jsonParser, BookController.updateBook);

// /api/books/:id
router.delete("/:id", BookController.deleteBook);

module.exports = router;
