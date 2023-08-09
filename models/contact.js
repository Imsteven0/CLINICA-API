const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: String,
    lastname: String,
    identification: String,
    phone: {
        type: String,
        unique: true
    },
    direction: String,
    relationship:String,
   
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Contact', contactSchema);