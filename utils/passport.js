const passport = require("passport")
const GoogleStrategy = require("passport-google-oauth20");
const User = require("../models/user")
const mail = require("./email");

function notifyRegistration(newUser){
    try{
        const mailOptions = {
            from: process.env.MAILUSERNAME,
            to: newUser.email,
            subject: 'PocketURL: Registration Successful',
            text: `Dear ${newUser.name}, Thank you very much for registering with pocketurl. Feel free to use our amazing features.`,
            html: mail.createHTML("Registered Successfully", `Dear ${newUser.name}, Thank you very much for registering with pocketurl. Feel free to use our amazing features.`),
        };
        mail.sendMail(mailOptions);
    }catch(err){
        console.log(err);
    }
}

passport.serializeUser((user, done) => {
    done(null, user.googleID)
})

passport.deserializeUser((googleID, done) => {
    User.findByPk(googleID).then((user) => {
        // console.log(user);
        if(user){
            done(null, user.dataValues);
        }else{
            done(null, user);
        }
    })
})

passport.use(
    new GoogleStrategy({
        callbackURL: "/auth/google/redirect",
        clientID: process.env.GOOGLE_CLIENTID,
        clientSecret: process.env.GOOGLE_KEYSECRET,
    }, async (accessToken, refreshToken, profile, done) => {
            try{
                const [user, created] = await User.findOrCreate({
                    where: { googleID: profile.id },
                    defaults: {
                        name: profile.displayName,
                        googleID: profile.id,
                        thumbnail: profile.photos[0].value,
                        email: profile.emails[0].value
                    }
                })
                // .then((user, created) => {
                    // console.log(created)
                    if(created){
                        notifyRegistration(user.dataValues);
                    }
                    done(null, user.dataValues);
                    // console.log();
                    // console.log(user);
                // });
                
            }catch(err){
                console.log(err);
            }
    })
);