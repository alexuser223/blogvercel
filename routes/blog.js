const express = require("express");
const router = express.Router();

const {homepage,homepagetest} = require("../controllers/blog")


router.route("/").get(homepage);
router.route("/test").get(homepagetest);


module.exports = router;