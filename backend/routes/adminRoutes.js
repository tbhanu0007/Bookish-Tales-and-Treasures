const express = require('express');
const { adminLogin, addBook, getBooks, updateBook, deleteBook } = require('../controllers/adminController');
const protect = require('../middleware/authMiddleware'); // Use protect middleware to secure routes
const router = express.Router();

// Admin login
router.post('/login', adminLogin);

// Protected routes for managing books
router.post('/books', protect, addBook);
router.get('/books', protect, getBooks);
router.put('/books/:id', protect, updateBook);
router.delete('/books/:id', protect, deleteBook);

module.exports = router;
