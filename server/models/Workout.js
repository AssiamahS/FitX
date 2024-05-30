const { model, Schema } = require('mongoose')

// const workoutSchema = new Schema({
//     "WorkoutName": String,
//     "ReminderTime":String,
//     "DOW":String,
//     "user_id":Schema.Types.ObjectId
// })

const WorkoutSchema = new Schema({
    // user: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'User',
    //   required: true,
    // },
    exercise: {
      type: String,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    DayOfWeek: {
      type: String,//M,T,W,Th,F,S,Su
    //   default: Date.now,
    },
 
  });

const Workout = model('Workout', WorkoutSchema)
module.exports = Workout