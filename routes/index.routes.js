const router = require("express").Router();
const Books = require("../models/Book.model");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});


router.get("/explore", (req, res, next) => {
  // buscar los nombres de los pokemon de mi BD
  // buscamos en la DB los documentos de la coleción de pokemons
  Books.find()
    .then((Books) => {
      console.log(Books, "entra");
      res.render("explore", { Books });
    })
    .catch((err) => {
      next(err);
    });

  // mostrar una vista a el cliente con los nombres de pokemons
});

// router.get("/profile", (req, res, next) => {
//   res.render("profile.hbs");
// });
module.exports = router;
