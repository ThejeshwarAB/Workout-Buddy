const express = require('express')
const Workout = require('../models/workoutModel')

const router = express.Router()

router.get('/', (req, res) => {
    res.json({ "message": "getting workouts" })
})

router.get('/:id', (req, res) => {
    res.json({ "message": "getting workout" +  ' ' + req.params.id })
})

router.post('/', (req, res) => {
    res.json({ "message": "adding workout" })
})

router.delete('/:id', (req, res) => {
    res.json({ "message": "deleting workout" })
})

router.patch('/:id', (req, res) => {
    res.json({ "message": "updating workout" })
})

module.exports = router