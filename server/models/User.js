const { model, Schema } = require('mongoose')
const bcrypt = require('bcryptjs');

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

  // Removed the password isModified logic, as I believe this was an old check that is no longer needed

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

  next()
})

const User = model('User', userSchema)

module.exports = User