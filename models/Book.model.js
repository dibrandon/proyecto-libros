const mongoose = require('mongoose');

const bookSchema = new Schema({
    name: String,
    url: String,
    portrait: String,
    intro: String,
    author: [{ type: Schema.Types.ObjectId, ref: 'Author' }]

})

const Books = mongoose.model('book', bookSchema);

module.exports = Books;