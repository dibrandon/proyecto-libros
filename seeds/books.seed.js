const booksArr = [
    {name: "los gatos de ulthar", author: "lovecraft", idiom: "español", url: "https://drive.google.com/file/d/1FC-Q2_ut1L2B18yBPLBmWKeVE9mwlfyX/view?usp=sharing", imgUrl: "https://i.postimg.cc/zGspZPHZ/Captura-de-Pantalla-2022-07-06-a-las-12-12-29.png"},
    {name: "la llamada de cthulhu", author: "lovecraft", idiom: "español", url: "https://drive.google.com/file/d/1gdYGFSAu96-qaS39JtU7T_V0YWE2ZKq-/view?usp=sharing", imgUrl: "https://i.postimg.cc/Kj38Dn3r/Weird-Tales-volume-11-number-02-page-159-The-Call-of-Cthulu-uncaptioned.jpg"},
    {name: "las ratas de las paredes", author: "lovecraft", idiom: "español", url: "https://drive.google.com/file/d/1j3t3Z3MoJjS70mPIyfwtOXmU5ijflaf4/view?usp=sharing", imgUrl: "https://i.postimg.cc/gjm06dwy/Captura-de-Pantalla-2022-07-06-a-las-12-01-59.png"}
]

// aqui insertaremos la data a la BD
// los seeds no se conectan con nuestro servidor

const Book = require("../models/Book.model");

// insertarla en la BD
const mongoose = require("mongoose");
// mongodb://localhost:27017/freebooks-app
mongoose
  .connect("mongodb+srv://admin:adminadmin1234@cluster0.ngv8j.mongodb.net/?retryWrites=true&w=majority")
  .then((response) => {
    console.log("conectados a la Dase de Datos");

    return Book.insertMany(booksArr);
  })
  .then((response) => {
    console.log("Books agregados correctamente");
    // hacer la desconeccion
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log(err);
  });


