const Url = require("../models/url")
const Transaction = require("../models/transaction")

exports.viewTransaction = (req, res) => {
    Transaction.findOne({ where: {userGoogleID: req.user.googleID}}).then((transaction) => {
        
        if(transaction){
            const t = {
                iid: transaction.dataValues.invoiceID, 
                oid: transaction.dataValues.rzp_orderID,
                pid: transaction.dataValues.rzp_payID,
                amount: transaction.dataValues.amount,
                date: transaction.dataValues.createdAt
            }
            res.render("userTransactions", {t: t, user: req.user})
        }else{
            res.render("userTransactions", {t: {}, user: req.user})
        }
    })
};


exports.viewUrl = (req, res) => {
    Url.findAll({ order: [['updatedAt', 'DESC']], where: {userGoogleID: req.user.googleID}}).then((urls) => {
        
        if(urls){
            res.render("urlDashboard", {urls: urls, user: req.user})
        }else{
            res.render("urlDashboard", {urls: {}, user: req.user})
        }
    })
};