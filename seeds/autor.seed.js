

// aqui insertaremos la data a la BD
// los seeds no se conectan con nuestro servidor

const Autor = require("../models/Autor.model");

// insertarla en la BD
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/autor")
  .then((response) => {
    console.log("conectados a la Dase de Datos");

    return Pokemon.insertMany(autorArr);
  })
  .then((response) => {
    console.log("Pokemons agregados correctamente");
    // hacer la desconeccion
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log(err);
  });
