
if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}
const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

const stripe_secret_key = process.env.STRIPE_SECRET;
const stripe_public_key = process.env.STRIPE_PUBLIC;
console.log('--secret %s and %s',stripe_secret_key,stripe_public_key);

app.listen(3000, () => {
    console.log('Server running at port 3000');
});