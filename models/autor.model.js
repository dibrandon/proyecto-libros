const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
    name: String,
    deathDate: Number,
    books: [{ type: Schema.Types.ObjectId, ref: 'Book' }]
})

const Author = mongoose.model('Author', authorSchema);
module.exports = Author;