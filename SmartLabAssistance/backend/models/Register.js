const mongoose = require('mongoose');
const Schema = mongoose.Schema
const Register = new Schema({
    fullname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confirmPassword:{
        type:String,
        required:true
    }
});
module.exports = mongoose.model('Register', Register);