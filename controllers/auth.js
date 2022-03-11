exports.isLoggedIn = (req, res, next) => {
    if(!req.user){
        res.redirect("/auth/login/google");
    }else{
        next();
    }
}

exports.isAdmin = (req, res, next) => {
    if(!req.user){
        res.redirect("/");
    }else{
        if(req.user.role > 0){
            next();
        }else{
            res.redirect("/");
        }
    }
}