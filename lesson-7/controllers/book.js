const Book = require("../models/book");

// Link to Query and Projection Operators
// https://www.mongodb.com/docs/manual/reference/operator/query/
async function getBooks(__, res, next) {
  try {
    const books = await Book.find({
      year: { $gte: 2023 },
      author: "Marijn Haverbeke",
    });

    return res.json(books);
  } catch (error) {
    return next(error);
  }
}

async function getBookById(req, res, next) {
  const { id } = req.params;

  try {
    const book = await Book.findById(id); // Mongoose method
    // const book = await Book.findOne({ _id: id }); // MongoDB method

    if (book === null) {
      return res.status(404).send("Book not found");
    }

    return res.json(book);
  } catch (error) {
    return next(error);
  }
}

async function createBook(req, res, next) {
  try {
    const book = {
      title: req.body.title,
      author: req.body.author,
      year: req.body.year,
      genre: req.body.genre,
      publisherURL: req.body.publisherURL,
    };

    const result = await Book.create(book);

    return res.status(201).json(result);
  } catch (error) {
    return next(error);
  }
}

async function updateBook(req, res, next) {
  const { id } = req.params;

  const book = {
    title: req.body.title,
    author: req.body.author,
    year: req.body.year,
    genre: req.body.genre,
    publisherURL: req.body.publisherURL,
  };

  try {
    const result = await Book.findByIdAndUpdate(id, book, { new: true });

    if (result === null) {
      return res.status(404).send("Book not found");
    }

    return res.json(result);
  } catch (error) {
    return next(error);
  }
}

async function deleteBook(req, res, next) {
  const { id } = req.params;

  try {
    const result = await Book.findByIdAndRemove(id);

    if (result === null) {
      return res.status(404).send("Book not found");
    }

    return res.status(204).end();
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};
