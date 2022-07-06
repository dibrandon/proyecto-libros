const router = require("express").Router();
const Books = require("../models/Book.model");
const User = require("../models/User.model")
const Recommended = require("../models/recommended.model")


/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

 router.get("/upload", (req, res, next) => {
  res.render("uploadForm");
});

router.get("/explore", (req, res, next) => {
  Books.find()
    .then((Books) => {
      console.log(Books, "entra");
      res.render("explore", { Books });
    })
    .catch((err) => {
      next(err);
    });
});

router.get("/search/:id", (req, res, next) => {
  // aplicar destructuracion sobre req.params

  // acceder a cada pokemon
  Pokemon.findById(req.params.id)
    .then((response) => {
      console.log(response);
      res.render("pokemon-details.hbs", { response });
    })
    .catch((err) => {
      next(err);
    });

  // renderizar la pagina
});

// router.get("/profile", (req, res, next) => {
//   res.render("profile.hbs");
// });
module.exports = router;
