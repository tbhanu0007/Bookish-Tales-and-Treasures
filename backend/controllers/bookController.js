const Book = require('../models/Book');

// Add a new book
const addBook = async (req, res) => {
    const book = new Book(req.body);
    await book.save();
    res.status(201).json(book);
};

// Get all books
const getBooks = async (req, res) => {
    const books = await Book.find();
    res.json(books);
};

module.exports = { addBook, getBooks };
