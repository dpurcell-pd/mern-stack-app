const mongoose = require('mongoose');
const {Schema, model} = mongoose; 
const userSchema = Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    email: {
        type: String,
        required: [true, 'Please add a email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please add a password']
    },
    name: {
        type: String,
        required: [true, 'Please add a name']
    }
});

module.exports = model("User", userSchema);