const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const providersSchema = new Schema({
    name: {
        type: String,
        trim: true,
    },
    lastname: {
        type: String,
        trim: true,
    },
    company: {
        type: String,
        trim: true,
    },
    address: {
        type: String,
        trim: true,
    },
    phone: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        lowercase: true,
    }
});

module.exports = mongoose.model('Providers', providersSchema);