const Razorpay = require('razorpay');
const Transaction = require("../models/transaction");
const pdf = require("../utils/invoice");
const path = require("path");
const mail = require("../utils/email");
const User = require("../models/user");

async function notifyUser(newUser) {
    try {

        const mailOptions = {
            from: process.env.MAILUSERNAME,
            to: newUser.email,
            subject: 'PocketURL: Payment Successful',
            text: `Dear ${newUser.name}, Thank you very much for registering with pocketurl pro. Please find the attached invoice for your payment.`,
            html: mail.createHTML("Payment Successful", `Dear ${newUser.name}, Thank you very much for registering with pocketurl pro. Please find the attached invoice for your payment.`),
            attachments: [{
                filename: `${newUser.name}.pdf`,
                path: path.join(__basedir, "/AppData/Invoices/", `${newUser.googleID}.pdf`),
            }]
        };
        mail.sendMail(mailOptions)
    } catch (err) {
        console.log(err);
    }
}



const razorpayInstance = new Razorpay({
    key_id: process.env.RZP_KEYID,
    key_secret: process.env.RZP_KEYSECRET
});

exports.pay = (req, res) => {
    try {
        var amount = 10000;
        var currency = "INR"
        var receipt = req.user.googleID;
        var notes = {
            "name": req.user.name,
            "email": req.user.email,
            "googleID": req.user.googleID,
            "id": req.user.id,
        }
        razorpayInstance.orders.create({ amount, currency, receipt, notes },
            (err, order) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.render("buy", {
                        order: order,
                        user: req.user,
                        payKey: process.env.RZP_KEYID
                    })
                }
            }
        )
    } catch (err) {
        console.log(err);
    }
}

exports.save = (req, res) => {
    try {
        const {razorpay_payment_id} = req.body;
        const notes = req.params.notes;
        const amount = req.params.amount;


        User.update({ role: 1 }, {
            where: {
              googleID: req.user.googleID
            }
        });

        const trans = {
            "invoiceID": req.user.googleID,
            "rzp_orderID": "order_" + req.user.googleID,
            "rzp_payID": razorpay_payment_id,
            "rzp_signature": "NA",
            "amount": amount/100,
            "userGoogleID": req.user.googleID,
        }

        Transaction.create(trans).then((transactionOnSave) => {
            // console.log(transactionOnSave)
            const newUser = {
                "name": req.user.name,
                "googleID": req.user.googleID,
                "email": req.user.email,
                "pid": "order_" + req.user.googleID,
                "tid": razorpay_payment_id,
                "iid": req.user.googleID,
                "cid": req.user.googleID
            }
            pdf.createPDFInvoice(newUser).then(() => {
                notifyUser(newUser);
            })

            res.redirect("/");
        })

    } catch (err) {
        console.log(err);
    }
}

