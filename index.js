require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose')
const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

// Import routers
app.use('/', require('./routers/home'));
app.use('/create-payment-intent',require('./routers/createpayment'))

// PORT
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`port is running on ${PORT}`));