const mongoose = require('mongoose');
const ThingsSchema = new mongoose.Schema({

firstName: {
    type: String,
    required: [true, "You must have a first name"],
    minlength: [3, "Your first name must be at least 3 characters long"],
},
lastName: {
    type: String,
    required: [true, "You must have a last name"],
    minlength: [3, "Your last name must be at least 3 characters long"],
},    
eMail: {
    type: String,
    required: [true, "You must enter a valid email address"],
    minlength: [3, "Your last name must be at least 3 characters long"],
},

updates: {
    type: Boolean,
    default: true,
},

phoneNumber: {
    type: Number,
    required: [true, "You must enter a contact number"],
    minlength: [10, "Please include your area code and do not include any dashes"],  
},

categories: {
    type: String,
    required: [true, "You must pick a category"],
    enum: ['Cat1', 'Cat2', 'Cat3', 'Cat4'],
},
birthDate: {
    type: Date,
    required: [true, "You must enter a birthdate"],
    max: ['2003-01-01', "You must be at least 18 years of age"],
    //max: [new Date(), "You cannot be over 100 years old"],
},
//Address: String

//Today's Date: Date

}, {timestamps: true})

//Thing will be a collection labeled "things" in the database based on the statement below
module.exports = mongoose.model('Thing', ThingsSchema);