const mongoose = require('mongoose');

const bookSchema = new Schema({
    name: String,
    url: String,
    portraitUrl: String,
    intro: String,
    author: [{ type: Schema.Types.ObjectId, ref: 'Author' }]

})

const Books = mongoose.model('book', bookSchema);

module.exports = Books;