const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/registro", (req, res, next) => {
  res.render("registroOk");
});
module.exports = router;
