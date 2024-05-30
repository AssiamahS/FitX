const Workout = require('../models/Workout')

const resolvers = {
    Query: {
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
        async createWorkout(_, args) {
            console.log(args)
            const createdWorkout = await Workout.create(args)
            return createdWorkout
        }
    }
};

module.exports = resolvers