const express = require('express')
const Workout = require('../models/workoutModel')

const router = express.Router()


//Get all workouts 
router.get('/' , (req , res) => {
res.json({mssg: 'Get all workouts'})

})

//Get a single workout
router.get('/:id' , (req, res) => {
    res.json({mssg: 'Get single workout'})
})

// Post a new Workout
router.post('/' , async  (req, res) => {
    const {title , reps , load} = req.body

    try{
        const workout = await Workout.create({title , reps , load})
        res.status(200).json(workout)
    } catch(error){
        res.status(400).json({error: error.message})
    }
 })

// delete a  Workout
router.delete('/:id' , (req, res) => {
    res.json({mssg: 'Delete a workout'})
})

// Update a  Workout
router.patch('/:id' , (req, res) => {
    res.json({mssg: 'Update a workout'})
})

module.exports = router