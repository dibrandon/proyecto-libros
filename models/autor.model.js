const mongoose = require('mongoose');
const { Schema } = mongoose;

const autorSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  deathDate: Number,
  books: [{ type: Schema.Types.ObjectId, ref: 'Story' }]
});

const booksSchema = Schema({
  author: { type: Schema.Types.ObjectId, ref: 'Autor' },
  title: String,
});

const Story = mongoose.model('Book', booksSchema);
const Person = mongoose.model('Autor', autorSchema);

module.exports = Autor;
module.exports = Book;

  //fans: [{ type: Schema.Types.ObjectId, ref: 'Person' }]