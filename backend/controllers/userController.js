const mongoose = require('mongoose')

const User = require('../models/userModel')

const loginUser = async (req, res) => {
    const {email,password} = req.body
    try{
        const user = User.login(email,password)
        res.status(200).json(user)
    }
    catch(err){
        res.status(400).json(err)
    }
    // res.status(200).json("Success")
}

const signupUser = async (req, res) => {
    const {email,password} = req.body
    try{
        const user = User.signup(email,password)
        res.status(200).json(user)
    }
    catch(err){
        res.status(400).json(err)
    }
    // res.status(200).json("Success")
}
 
module.exports = {loginUser, signupUser}