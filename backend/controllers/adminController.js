const Admin = require('../models/Admin');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Book = require('../models/Book');

// Admin login
const adminLogin = async (req, res) => {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });

    if (!admin || !(await bcrypt.compare(password, admin.password))) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
};

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

// Update a book
const updateBook = async (req, res) => {
    const { id } = req.params;
    const book = await Book.findByIdAndUpdate(id, req.body, { new: true });
    res.json(book);
};

// Delete a book
const deleteBook = async (req, res) => {
    const { id } = req.params;
    await Book.findByIdAndDelete(id);
    res.json({ message: 'Book deleted successfully' });
};

module.exports = { adminLogin, addBook, getBooks, updateBook, deleteBook };
