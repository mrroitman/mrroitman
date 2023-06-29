require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRouts = require('./routes/workouts')

//express app
const app = express()

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})


//routes
app.use('/api/workouts', workoutRouts)

//connect to db
mongoose.connect(process.env.MONG_URI)
    .then(() => {
        //listen for request
    app.listen(process.env.PORT , () => {
    console.log('Connected to db & Lisening on Port:', process.env.PORT)
})

    })
    .catch((error) => {
        console.log(error)
    }) 

