const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

//login static function
userSchema.statics.login = async function(email, password) {
    return user
}

//signup static function
userSchema.statics.signup = async function(email, password) {
    return user
}


module.exports = mongoose.model('User', userSchema)