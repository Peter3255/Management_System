import mongoose from "mongoose";

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
        },
        streetAddress : {
            type: String,
            required: true
            
        },
        city : {
            type: String,
            required: true
          
        },
        state : {
            type: String,
            required: true
           
        },
        zipCode : {
            type: String,
            required: true
          
        },
        countryOrRegion : {
            type: String,
            required: true
          
        },
        cardNumber : {
            type: String,
            required: true
          
        },
        cVV2Number : {
            type: String,
            required: true
        
        },
        month : {
            type: String,
            required: true
          
        },
        year : {
            type: String,
            required: true
           
        },
        gender: String,
        status: String
})

const Userdb = mongoose.model('userdb', schema, 'userdbs');

export default Userdb;
