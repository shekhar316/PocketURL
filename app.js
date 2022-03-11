// import modules
const express = require("express");
const path = require("path");
const cookieSession = require("cookie-session");
const passport = require("passport");
const cors = require("cors");
const bodyparser = require("body-parser");
const Razorpay = require('razorpay');
require("dotenv").config();

process.on('uncaughtException', function (err) {
    console.error(err);
    console.log("Node NOT Exiting...");
});

// const passportConfig = require("./utils/passport");
const sequelize = require("./utils/database");
const passportConfig = require("./utils/passport");
const User = require("./models/user");
const Transaction = require("./models/transaction");
const Url = require("./models/url");


// Database Connection
try {
    sequelize.authenticate().then(() => {
        console.log('Database Connected.');
    });
    User.hasOne(Transaction);
    User.hasMany(Url);
    // sequelize.sync({force: true});
} catch (err) {
    console.error('Unable to connect to the database:', err);
}


// app configuration
const app = express();
const port = process.env.PORT || process.env.PORT2 || 8001;
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));



// Middlewares
app.use(cors({
    origin: '*'
}));
app.use(
    cookieSession({
        maxAge: 24 * 60 * 60 * 60 * 1000,
        keys: [process.env.SECRETKEY],
    })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())


// import my modules
const staticRoutes = require("./routes/static");
const authRoutes = require("./routes/auth");
const transactionRoutes = require("./routes/transaction");
const urlRoutes = require("./routes/url");
const userRoutes = require("./routes/user");
const {decode} = require("./controllers/url")
global.__basedir = __dirname;


// My Middlewares
app.use("/static", staticRoutes);
app.use("/auth", authRoutes);
app.use("/pay", transactionRoutes);
app.use("/url", urlRoutes);
// app.use("/admin", adminRoutes);
app.use("/user", userRoutes);



app.get("/", (req, res) => {
    res.redirect("/static/");
});


app.get("/:id", decode);

// startig the app
app.listen(port, () => {
    console.log(`PocketURL is now listening on port: ${port}.`);
});
