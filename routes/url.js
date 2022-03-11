const router = require("express").Router();
const {addUrl, update, updateUrl, deleteURL, checkurl} = require("../controllers/url")
const {isLoggedIn} = require("../controllers/auth");


router.get("/add", isLoggedIn, (req, res) => {
    res.render("addUrl", {user: req.user});
})

router.post("/add", isLoggedIn, checkurl, addUrl);

router.get("/update/:id",isLoggedIn,  update);
router.get("/delete/:id", isLoggedIn, deleteURL);
router.post("/updateURL", isLoggedIn, checkurl, updateUrl);

module.exports = router;