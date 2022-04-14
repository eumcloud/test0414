var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("index", {title: "Index페이지"})
});

router.get("/getCookie", (req, res)=>{
  res.cookie("token", "true");
  res.redirect("/");
})

router.get("/cors-test", (req, res)=>{
  res.cookie("cors123", "value123");
  res.redirect("/");
})

router.get("/metamask", (req, res)=>{
  res.render("MetaMask");
})

module.exports = router;
