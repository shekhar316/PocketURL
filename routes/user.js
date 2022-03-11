const router = require("express").Router();
const {viewTransaction, viewUrl} = require("../controllers/user")
const {isLoggedIn} = require("../controllers/auth");

router.get("/transactions", isLoggedIn, viewTransaction);
router.get("/url", isLoggedIn, viewUrl);
router.get("/profile", isLoggedIn, (req, res) => {
    res.render("profile", {u: req.user, user:req.user})
});


module.exports = router;