const { model, Schema } = require('mongoose')
// const {workoutSchema} = require ('./Workout')
// const userSchema = new Schema({
//     "username": String,
//     "email": String,
//     "password": String,
//     "workouts":[{
//         type:Schema.Types.ObjectId,
//         ref:'Workout'
//     }]
// })

// const User = model('User', userSchema)
// module.exports = User
const { model, Schema } = require('mongoose')
// const {workoutSchema} = require ('./Workout')
const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
    },
    weight: {
      type: Number,
    },
    goal: {
      type: String, // 'gain' or 'lose'
    },
    frequency: {
      type: Number, // 3 or 4 days a week
    },
    workouts:[{
        type:Schema.Types.ObjectId,
        ref:'Workout'
    }]
  });

const User = model('User', userSchema)
module.exports = User