const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const validator = require('validator');
import {ADMIN,END_USER} from '../common/constants';
//Create Schema
// user validator to validate email
const UserSchema=new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
    },
    avatar:{
        type:String,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    isActive:{
        type:Boolean,
        default:true,
    },
    type:{
        type:String,
        enum:[ADMIN,END_USER],
        default:END_USER,
        required:true,
    }
})

let User=mongoose.model('User',UserSchema)
module.exports=User;