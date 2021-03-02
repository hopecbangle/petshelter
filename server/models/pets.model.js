const mongoose = require('mongoose');
const PetsSchema = new mongoose.Schema({

petName: {
    type: String,
    unique: true, 
    required: [true, " Your pet must have a name"],
    minlength: [3, " Your pet's name must be at least 3 characters"],
},
petType: {
    type: String,
    required: [true, " You must specify the type of pet"],
    minlength: [3, " Your pet's type must be at least 3 characters"],
},    
petDesc: {
    type: String,
    required: [true, " You must describe your pet"],
    minlength: [3, " The description must be at least 3 characters"],
},
petSkill1: {
    type: String,
},
petSkill2: {
    type: String,
},
petSkill3: {
}

/*noSkill: {
    type: Boolean,
    default: false,
},
fetchBall: {
    type: Boolean,
    default: false
},
playDead: {
    type: Boolean,
    default: false
},
houseBroken: {
    type: Boolean,
    default: false,
},
/*pictureUrl: {
    type: String
}
petSkill: {
    type: String,
    enum: ['none','Playing fetch', 'Loose-leash walking', 'Goes to the bathroom on command'],
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
birthDate: {
    type: Date,
    required: [true, "You must enter a birthdate"],
    max: ['2003-01-01', "You must be at least 18 years of age"],
    //max: [new Date(), "You cannot be over 100 years old"],
},*/

}, {timestamps: true})

module.exports = mongoose.model('Pets', PetsSchema);