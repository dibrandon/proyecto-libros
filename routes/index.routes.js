const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

// router.get("/profile", (req, res, next) => {
//   res.render("profile.hbs");
// });
module.exports = router;
