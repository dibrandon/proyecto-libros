// const Books = require("../models/Book.model");
// // const newFav = { name, author, idiom, url, imgUrl, description } = req.body


 
// //  router.post("/new-rutina", (req, res, next) => {
// //      const { rutinaName } = req.body;
// //     const loggedUser = req.session.user;
// //     User.findOne({ username: loggedUser.username })
// // /      .then((dbUser) => {
// //         Rutina.create({
// //           name: rutinaName,
// //         }).then((newRutina) => {
// //            dbUser.rutinas.push(newRutina);
// //           dbUser.save();
// //           res.redirect(`/profile`);
// //         });
// //       })
// //       .catch((err) => {
// //         next(err);
// //       });
// //    });

// router.post("/add-favorite", isLoggedIn, (req, res) => {

//      const bookId = req.body._id
//     // const idToCheck = req.body.apiId;

//     Books.find({ _id: bookId })
//         .then(bookArray => {
//             //comprobar si ese Id ya esta en db favoritos(?)
//             if (bookArray.length === 0) {
//                 Books
//                     .create(newFav)
//                     .then(result => {
//                         User
//                             .findByIdAndUpdate(req.user._id, { $push: { favorites: result._id } })
//                             .then(() => {
//                                 res.redirect("/profile")
//                             })
//                     })
//                     .catch(err => console.log(err))
//             } else {
//                 User
//                     .findById(req.user._id)
//                     .then((user) => {
//                         if (!user.favorites.includes(bookArray[0]._id)) {
//                             User
//                                 .findByIdAndUpdate(req.user._id, { $push: { favorites: bookArray[0]._id } })
//                                 .then(() => {
//                                     res.redirect("/profile")
//                                 })
//                         } else { res.redirect("/profile") }
//                     })
//                     .catch((err) => {
//                         console.log(err)
//                     })



//             }
//         })
// })

// ,
// <img src= 'https://i.postimg.cc/Kj38Dn3r/Weird-Tales-volume-11-number-02-page-159-The-Call-of-Cthulu-uncaptioned.jpg' class="d-block w-100" alt="..."></a>
// ,