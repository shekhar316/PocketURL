var easyinvoice = require('easyinvoice');
var fs = require("fs").promises;
const path = require("path");




async function writefile(url, pData, pFromat){
    try{
        await fs.writeFile(url, pData, pFromat);
    }catch(err){
        console.log(err);
    }
}

var data = {
    "customize": {
        //  "template": fs.readFileSync('template.html', 'base64') // Must be base64 encoded html 
    },
    "images": {
        "logo": "https://raw.githubusercontent.com/shekhar316/ImageHosting/main/Icon2c.png",
        // The invoice background
        "background": "https://raw.githubusercontent.com/shekhar316/ImageHosting/main/bg.jpg"
    },
    // Your own data
    "sender": {
        "company": "PocketURL",
        "address": process.env.MAIL_USER,
        "zip": "Contact Us: +91-9412446081",
        "custom1": process.env.HOMEURL
    },
    // Your recipient
    "client": {
        "company": "Client Corp",
        "address": "email@client.com",
        "zip": "Client ID: 089890987",
        "custom1": "Payment ID: 54568",
        "custom2": "Transaction ID: 765434568"
        // "custom3": "custom value 3"
    },
    "information": {
        // Invoice number
        "number": "200000001",
        // Invoice data
        "date": "12-12-2021",
        // "due-date": "31-12-2021"
    },
    // The products you would like to see on your invoice
    // Total values are being calculated automatically
    "products": [
        {
            "quantity": 1,
            "description": "Pocket URL Pro Original",
            "tax-rate": 0,
            "price": 100
        },
    ],
    // The message you would like to display on the bottom of your invoice
    "bottom-notice": "You are now subscribed to PocketURL Pro. Thanks.",
    // Settings to customize your invoice
    "settings": {
        "currency": "INR", // See documentation 'Locales and Currency' for more info. Leave empty for no currency.
        // "locale": "en-IN", // Defaults to en-US, used for number formatting (See documentation 'Locales and Currency')
        // "tax-notation": "gst", // Defaults to 'vat'
        // "margin-top": 25, // Defaults to '25'
        // "margin-right": 25, // Defaults to '25'
        // "margin-left": 25, // Defaults to '25'
        // "margin-bottom": 25, // Defaults to '25'
        // "format": "A4" // Defaults to A4, options: A3, A4, A5, Legal, Letter, Tabloid
    },
    // Translate your invoice to your preferred language
    "translate": {
        // "invoice": "FACTUUR",  // Default to 'INVOICE'
        // "number": "Nummer", // Defaults to 'Number'
        // "date": "Datum", // Default to 'Date'
        // "due-date": "Verloopdatum", // Defaults to 'Due Date'
        // "subtotal": "Subtotaal", // Defaults to 'Subtotal'
        // "products": "Producten", // Defaults to 'Products'
        // "quantity": "Aantal", // Default to 'Quantity'
        // "price": "Prijs", // Defaults to 'Price'
        // "product-total": "Totaal", // Defaults to 'Total'
        // "total": "Totaal" // Defaults to 'Total'
    },
};

function modifyData(newUser){
    data.client.company = newUser.name;
    data.client.address = newUser.email;
    data.client.zip = `User ID:${newUser.cid}`;
    data.client.custom1 = `Order ID: ${newUser.pid}`;
    data.client.custom2 = `Transaction ID: ${newUser.tid}`;
    data.information.number = newUser.iid;
    data.information.date = new Date().toLocaleString();
    data.products[0].description = `PocketURL Pro Lifetime`;
    // data.information."due-date"

}

//Create your invoice! Easy!
exports.createPDFInvoice = async (newUser) => {
    try{
        modifyData(newUser);
        const result = await easyinvoice.createInvoice(data);
        writefile(path.join(__basedir, "/AppData/Invoices/", `${newUser.googleID}.pdf`), result.pdf, 'base64');
    }catch(err){
        console.log(err);
    }
}