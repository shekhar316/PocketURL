<img src="/public/images/logo/PocketURL.png" width="150" height="150" />

# PocketURL

PocketURL is a URL shortener with amazing features. PocketURL PRO allows you to manage your URLs with an ease.

<br/>

## Features

* Create shorl urls for long url redirection.
* Generate QR codes for your short urls.
* Analyse traffic on your URLs by counting no of visits.
* Free and Paid Version.
* Custom alias for short urls. (PRO)
* Set a custom expiration date for your short urls (PRO)
* Update, manage, delete generated short urls. (PRO)

<br/>

## PocketURL: Workflow

<img src="/PocketURL.png"/>

<br/>

## Application Demo

https://user-images.githubusercontent.com/57747076/157823604-b4e3e9e9-526d-49e4-93be-5e65d9bb846a.mp4

<br/>

## FAQs

* **What is a URL Shortner?**
  <br/>URL shortening is a technique on the internet in which a URL may be made substantially shorter and still direct to the required page.
* **What are the benifits of URL Shortner?**
  * They offer the ability to track the performance.
  * Get Analytical data like no of clicks.
  * They use fewer of your precious characters.
  * URL Shorteners Promote Sharing. 
  * People are used to them.
  * They lead to a higher click-through rate.
* **What is custom alias?**
  <br/>You may create a custom alias that can be intuitive and descriptive of your shortURL. This makes url easy to remember and share. Custom alias looks like `www.pocketurl.shekharsaxena.co.in/yourAlias`
* **What is a QR Code?**
  <br/>Basically, a QR code works in the same way as a barcode at the supermarket. It is a machine-scannable image that can instantly be read using a Smartphone camera and redirects you to the desired url.
* **Why should I prefer QR over link?**
  <br/>QR Code can make your bussiness to grow more. It is easy to scan a image rather than typing whole url.


<br/>

## How to use?
* Create a SQL database and import `shekhars_pocketurl.sql`
* Update the `.env` file with your credentials.
* Run `npm start` for production mode and `npm test` for development mode.

<br/>

## Technical Specifications

* **Backend Framework:** Express JS (NodeJS)
* **Frontend Framework:** EJS
* **CSS Framework:** Bootstrap 5.0
* **Database:** SQL
* **Architechture:** MVC (Model-View-Controller)
* **Payment Gateway:** Razorpay
* **Login Method:** OAuth Google Login
* **ORM:** Sequelize
* **Node JS Dependencies:**
  * "body-parser": "^1.19.1",
  * "cookie-session": "^2.0.0",
  * "cors": "^2.8.5",
  * "dotenv": "^15.0.0",
  * "easyinvoice": "^2.2.6",
  * "ejs": "^3.1.6",
  * "express": "^4.17.2",
  * "mysql2": "^2.3.3",
  * "nanoid": "^3.2.0",
  * "node-schedule": "^2.1.0",
  * "nodemailer": "^6.7.2",
  * "nodemon": "^2.0.15",
  * "passport": "^0.5.2",
  * "passport-google-oauth20": "^2.0.0",
  * "razorpay": "^2.8.0",
  * "sequelize": "^6.15.0",
  * "url-exists": "^1.0.3",
  * "valid-url": "^1.0.9"
