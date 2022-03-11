const Razorpay = require('razorpay');

const razorpayInstance = new Razorpay({
    key_id: process.env.RZP_KEYID,
    key_secret: process.env.RZP_KEYSECRET
});

exports.razorpayInstance = razorpayInstance;