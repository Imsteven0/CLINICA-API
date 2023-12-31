const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    lastname: String,
    identification: String,
    email: {
        type: String,
        unique: true
    },
    image: String,
    country: String,
    dateOfBirth: Date,
    idContact:[{
        type: String,
        require: false
    }],
    hashedPassword: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userSchema);