const mongoose = require("mongoose");

const autorSchema = new mongoose.Schema({
  autor: {
    type: String,
    required: true
  },
  bookName: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  deathDate: {
    type: Boolean,
    required: true
  }

});

const Autor = mongoose.model("Autor", autorSchema);

module.exports = Autor;
