import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email : {
        type: String,
        unique: true,
        required: true
    },
    password : {
        type: String,
        required: true,
        minlength: 8
    },
    username: {
        type: String
    }
})

const User = mongoose.model('user', userSchema);

export default User;