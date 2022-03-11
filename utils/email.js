const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: process.env.MAILHOST,
    port: process.env.MAILPORT,
    secure: true, // upgrade later with STARTTLS
    auth: {
        user: process.env.MAILUSERNAME,
        pass: process.env.MAILPASSWORD
    }
});

exports.transport = transporter;

exports.sendMail = (mailOptions) => {
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent to: ' + mailOptions.to + " " + info.response);
        }
    });
}

exports.createHTML = (titleA, msgA) => {
    return require("./emailTemplate")({
                msg: msgA,
                title: titleA,
        })
}