const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');

const orderSchema = new mongoose.Schema({

    id : Number,
    date : Date,
    product : String,
    quantity : Number,
    discount : String,
    userId : Number,
    productPrice : Number,
})