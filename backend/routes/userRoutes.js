const express = require('express')
const mongoose = require('mongoose')

// const User = require('../models/userModel')

const { loginUser, signupUser } = require('../controllers/userController')

const router = express.Router()

router.post('/login', loginUser)

router.post('/signup', signupUser)

module.exports = router