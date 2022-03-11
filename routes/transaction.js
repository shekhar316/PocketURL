
const router = require("express").Router();
const passport = require("passport");
const {isLoggedIn} = require("../controllers/auth");
const {pay, save} = require("../controllers/transaction");

router.get("/", isLoggedIn, pay);

router.post("/save/:notes/:amount/:receipt", isLoggedIn, save);

module.exports = router;