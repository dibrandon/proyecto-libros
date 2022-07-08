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
  const description = req.body.description

  Books.create({
    name: name,
    author: author,
    idiom: idiom,
    url: url,
    imgUrl: imgUrl,
    description:description,
  })
    .then((newBook) => {
      
      User
    .findByIdAndUpdate(req.session.user._id, { $push: { uploadedBooks: newBook._id } })

      .then(() => {
      res.redirect("/profile")
    })
    })
    .catch((e) => console.log(e))
});


router.get("/profile", isLoggedIn, (req, res, next) => {
  
  User.findById(req.session.user._id).populate("favorites uploadedBooks")

  .then((dataUser) => {
   
    res.render("profile", { dataUser })
  
  })
  .catch((err) => {
    

    console.log(err) 
  })
  
});


  
router.post("/add-favorite", isLoggedIn, (req, res) => {

  const bookId = req.body._id
 // const idToCheck = req.body.apiId;
//console.log("favoritos")
 Books.find({ _id: bookId })
     .then(bookArray => {
         //comprobar si ese Id ya esta en db favoritos(?)
         if (bookArray.length === 0) {
             Books
                 .create(newFav)
                 .then(result => {
                  console.log("@")
                  console.log(req.user._id)
                  console.log(result._id)
                     User
                         .findByIdAndUpdate(req.user._id, { $push: { favorites: result._id } })
                         .then(() => {
                             res.redirect("/profile")
                         })
                 })
                 .catch(err => console.log(err))
         } else {
             User
                 .findById(req.user._id)
                 .then((user) => {
                     if (!user.favorites.includes(bookArray[0]._id)) {
                      console.log("ds")
                      console.log(req.user._id)
                      console.log(user._id)
                         User
                             .findByIdAndUpdate(req.user._id, { $push: { favorites: bookArray[0]._id } })
                             .then(() => {
                                 res.redirect("/profile")
                             })
                     } else { res.redirect("/profile") }
                 })
                 .catch((err) => {
                     console.log(err)
                 })



         }
     })
})
router.post("/delete-favorite",isLoggedIn,(req,res)=>{
  const {id} = req.body
  User.findByIdAndUpdate(req.user._id,{$pull : {favorites : id}})
  .then(()=>{
      res.redirect("/profile")
  })
  .catch(err => console.log(err))
})

router.post("/delete-uploadedBooks",isLoggedIn,(req,res)=>{
  const {id} = req.body
  User.findByIdAndUpdate(req.user._id,{$pull : {uploadedBooks : id}})
  .then(()=>{
      res.redirect("/explore")
  })
  .catch(err => console.log(err))
})


module.exports = router;

