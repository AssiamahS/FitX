const { model, Schema } = require('mongoose')

const workoutSchema = new Schema({
    "WorkoutName": String,
    "ReminderTime":String,
    "DOW":String,
    "user_id":Schema.Types.ObjectId
})

const Workout = model('Workout', workoutSchema)
module.exports = Workout 