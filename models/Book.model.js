const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    name: String,
    author: String,
    idiom: String,
    url: String,
    imgUrl: String,

})

const booksModel = mongoose.model('Book', bookSchema);

module.exports = booksModel;  