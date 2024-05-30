const { model, Schema } = require('mongoose')
// const {workoutSchema} = require ('./Workout')
const userSchema = new Schema({
    "username": String,
    "email": String,
    "password": String,
    "workouts":[{
        type:Schema.Types.ObjectId,
        ref:'Workout'
    }]
})

const User = model('User', userSchema)
module.exports = User