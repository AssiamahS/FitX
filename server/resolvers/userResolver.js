const  User = require('../models/User') 
const Workout = require('../models/Workout')

const resolvers = {
    Query: {
        async getAllUsers() {
            const users = await User.find()
            console.log(users)
            return users
        },
        async getOneUser(_,args) {
            const user = await User.findById(args.post_id)
            return user
        },
        async getAllWorkouts() {
            const workouts = await Workout.find()
            return workouts
        },
        async getOneWorkout(_, args) {
            const oneWorkout = await Workout.findById(args._id)
            return oneWorkout
        },
      },
    Mutation: {
        async createUser(_, args) {
            console.log(args)
            const user = await User.create(args)
            return user
        },
        async createWorkout(_, args) {
            console.log(args)
            const createdWorkout = await Workout.create(args)
            return createdWorkout
        }
    }
};

module.exports = resolvers