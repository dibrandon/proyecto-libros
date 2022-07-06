const router = require("express").Router();
const Books = require("../models/Book.model");
const User = require("../models/User.model")
const Recommended = require("../models/recommended.model")


/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
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

// router.get("/profile", (req, res, next) => {
//   res.render("profile.hbs");
// });
module.exports = router;
