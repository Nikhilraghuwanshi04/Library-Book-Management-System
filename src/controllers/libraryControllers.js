const Book = require('../models/libraryModels');

// Add a Book
exports.addBook = async (req, res) => {
    try {
        const newBook = await Book.create(req.body);
        res.status(201).json({ status: 'success', data: newBook });
    } catch (error) {
        res.status(400).json({ status: 'fail', message: error.message });
    }
};

// Update a Book
exports.updateBook = async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedBook) {
            return res.status(404).json({ status: 'fail', message: 'Book not found' });
        }
        res.status(200).json({ status: 'success', data: updatedBook });
    } catch (error) {
        res.status(400).json({ status: 'fail', message: error.message });
    }
};

// Delete a Book
exports.deleteBook = async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);
        if (!deletedBook) {
            return res.status(404).json({ status: 'fail', message: 'Book not found' });
        }
        res.status(200).json({ status: 'success', message: 'Book deleted successfully' });
    } catch (error) {
        res.status(400).json({ status: 'fail', message: error.message });
    }
};

// Search Books
exports.searchBooks = async (req, res) => {
    try {
        const query = req.query;
        const books = await Book.find(query);
        res.status(200).json({ status: 'success', data: books });
    } catch (error) {
        res.status(400).json({ status: 'fail', message: error.message });
    }
};
