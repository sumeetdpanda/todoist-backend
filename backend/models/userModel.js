const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: mongoose.Schema.Types.String,
        required: [true, 'Name cannot be left empty'],
    },
    email: {
        type: mongoose.Schema.Types.String,
        required: [true, 'Email cannot be left empty'],
        unique: true,
        lowercase: true,
        dropDups: true
    },
    password: {
        type: mongoose.Schema.Types.String,
        required: [true, 'Password cannot be left empty'],
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)