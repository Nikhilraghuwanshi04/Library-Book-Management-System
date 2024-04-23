const express = require('express');
const router = express.Router();
const bookController = require('../controllers/libraryControllers');

// Add a Book
router.post('/add', bookController.addBook);

// Update a Book
router.put('/update', bookController.updateBook);

// Delete a Book
router.delete('/delete', bookController.deleteBook);

// Search Books
router.get('/search', bookController.searchBooks);

module.exports = router;
