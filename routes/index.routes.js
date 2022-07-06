const router = require("express").Router();
const isLoggedIn = require("../middleware/isLoggedIn")
const isLoggedOut = require("../middleware/isLoggedOut");
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

router.get("/upload", isLoggedIn, (req, res, next) => {
  res.render("uploadForm");
});

router.post("/upload", (req, res, next) => {
  const name = req.body.name
  const author = req.body.author
  const idiom = req.body.idiom
  const url = req.body.url
  const imgUrl = req.body.imgUrl

  Books.create({
    name:name,
    author:author,
    idiom:idiom,
    url:url,
    imgUrl:imgUrl
  })
  .then((newBook)=>{
    res.redirect("explore")
  })
  .catch((e)=>console.log(e))
} );


router.get("/profile", isLoggedIn, (req, res, next) => {
  res.render("profile");
});


module.exports = router;

