const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
    name: String,
    books: [{ type: Schema.Types.ObjectId, ref: 'Books' }]

});

const authorModel = mongoose.model('author', authorSchema);

module.exports = authorModel;  

