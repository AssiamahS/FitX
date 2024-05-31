const { model, Schema } = require('mongoose')
const bcrypt = require('bcryptjs');
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

// const {workoutSchema} = require ('./Workout')
const userSchema = new Schema({
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
  workouts: [{
    type: Schema.Types.ObjectId,
    ref: 'Workout'
  }]
});


// Method to compare passwords
userSchema.methods.validatePassword = function (password) {
  return bcrypt.compare(password, this.password)
}

userSchema.pre('save', async function (next) {
  const user = this;
  if (!user.isModified('password')) {
    return next();
  }
  if (user.isNew) {
    try {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(user.password, salt);
      user.password = hash;
      next();
    } catch (error) {
      return next(error);
    }
  }


})

const User = model('User', userSchema)
module.exports = User