const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    genre: String,
    ISBN: String,
    availability: Boolean
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
