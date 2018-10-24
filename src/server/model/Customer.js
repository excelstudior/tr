const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const validator = require('validator');
//import {ADMIN,END_USER} from '../common/constants';
//Create Schema
// user validator to validate email
const CustomerSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    businessType: {
        type: String,
        trim: true,
    },
    tradingName: {
        type: String,
        trim: true,
    },
    abn: {
        type: String,
        trim: true,
    },
    address: [{
        addressType: { type: String,trim: true, },
        address1: { type: String ,trim: true,},
        address2: { type: String ,trim: true,},
        suburb: { type: String ,trim: true,},
        state: { type: String ,trim: true,},
        postCode: { type: String ,trim: true,},
        country: { type: String ,trim: true,},
        isDefault: false,
    }],
    phone: [{
        phoneType: { type: String },
        phoneNumber: { type: String, required: true },
        isDefault: {
            type: Boolean,
            default: false,
        }
    }]
})

let Customer = mongoose.model('Customer', CustomerSchema)
module.exports = Customer;