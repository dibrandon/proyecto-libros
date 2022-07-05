const mongoose = require('mongoose');
let esquema= mongoose.Schema;
const bookSchema = new esquema({
    name: String,
    author: String,
    idiom: String,
    url: String,

})

const Books = mongoose.model('book', bookSchema);

module.exports = Books;

 // portraitUrl: String,
   // intro: String,