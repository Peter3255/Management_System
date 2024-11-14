const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: {
            type: String,
            required: true
        },
        email : {
            type: String,
            required: true,
            unique: true
        },
        lastName : {
            type: String,
            required: true,
            unique: true
        },
        streetAddress : {
            type: String,
            required: true,
            unique: true
        },
        city : {
            type: String,
            required: true,
            unique: true
        },
        state : {
            type: String,
            required: true,
            unique: true
        },
        zipCode : {
            type: String,
            required: true,
            unique: true
        },
        countryOrRegion : {
            type: String,
            required: true,
            unique: true
        },
        cardNumber : {
            type: String,
            required: true,
            unique: true
        },
        cVV2Number : {
            type: String,
            required: true,
            unique: true
        },
        month : {
            type: String,
            required: true,
            unique: true
        },
        year : {
            type: String,
            required: true,
            unique: true
        },
        gender: String,
        status: String
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;