const { customAlphabet } = require("nanoid");
var urlExists = require("url-exists");
const Url = require("../models/url");

const nanoid = customAlphabet("1234567890abcdefghijklmnopqrstuvwxyz", 7);

var isAliasUnique = (customAlias) => {
    console.log("Custom is " + customAlias);
    return new Promise((resolve, reject) => {
        Url.findOne({ where: {shortid: customAlias}}).then((url) => {
            console.log(url);
            if(url){
                resolve(false);
            }else{
                resolve(true);
            }
        })
    })
}

exports.addUrl = async (req, res) => {
    var {surl, lurl, edate} = req.body;
    var isProMode = false;
    if(surl){
        isProMode = true;
    }
    if(isProMode){
        try{
            var isValidAlias = await isAliasUnique(surl);
            if(isValidAlias){
                Url.create({
                    shortid: surl,
                    longURL: lurl,
                    userGoogleID:  req.user.googleID,
                    edate: edate
                }).then((url) => {
                    res.render("urlDetails", {url: url, alert: "success", user: req.user})
                })
            }else{
                res.render("urlDetails", {url: {}, alert: "alias", user: req.user})
            }
        }catch(err){
            res.render("urlDetails", {url: {}, alert: "fail", user: req.user})
        }
    }else{
        try{
            surl = nanoid();
            var currDate = new Date()
            edate = new Date()
            edate.setDate(currDate.getDate() + 30)
            while(!(await isAliasUnique(surl))){
                surl = nanoid();
                // console.log("Finding.." + surl);
            }
            Url.create({
                shortid: surl,
                longURL: lurl,
                userGoogleID:  req.user.googleID,
                edate: edate.toISOString().split('T')[0],
            }).then((url) => {
                res.render("urlDetails", {url: url, alert: "success", user: req.user})
            })
        }catch(err){
            res.render("urlDetails", {url: {}, alert: "fail", user: req.user})
        }
    }
}



exports.decode = (req, res) => {
    Url.findOne({ where: {shortid: req.params.id}}).then((url) => {

        if(url){
            Url.increment("openCount", { by: 1 ,
                where: {
                  shortid: req.params.id
                }
            });
            res.redirect(url.dataValues.longURL);
        }else{
            res.render("urlDetails", {url: {}, alert: "404", user: req.user})
        }
    })
};


exports.checkurl = (req, res, next) => {
    const { lurl } = req.body;

    urlExists(lurl, function(err, exists) {
        if (exists) {
          next();
        } else {
            res.render("urlDetails", {url: {}, alert: "invalid", user: req.user})
        }
      });
}

exports.update = async (req, res) => {
    var id = req.params.id;
    Url.findOne({
        where: {
            shortid: id
        }
    }).then((url) => {
        res.render("updateUrl", {url: url, user: req.user});
    })
}

exports.updateUrl = async (req, res) => {
    var {id, surl, lurl, edate} = req.body;
    Url.update({
        shortid: surl,
        longURL: lurl,
        edate: edate
    }, {
        where: {
            shortid: id 
        }
    }).then(() => {
        Url.findOne({
            where: {
                shortid: surl
            }
        }).then((url) => {
            // res.send(url)
            res.render("urlDetails", {url: url.dataValues, alert: "success", user: req.user})
        })
        // res.render("urlDetails", {url: url[0].dataValues, alert: "success", user: req.user})
    })
   
}

exports.deleteURL = async (req, res) => {
    var id = req.params.id;
    await Url.destroy({
        where: {
          shortid: id,
        }
    });
    res.render("urlDetails", {url: {}, alert: "delete", user: req.user})
}