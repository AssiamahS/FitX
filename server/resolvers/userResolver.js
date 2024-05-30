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
            console.log(args)
            const user = await User.findById(args._id)
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
        async removeOneUser(_, args) {
            console.log(args)
            const user = await User.deleteOne({_id:args._id})
            return user
        },
        async updateOneUser(_, args) {
            console.log(args)
            const user = await User.updateOne({_id:args._id},
                {username:args?.username,
                    email:args?.email,
                    password:args?.password
                })
            return user
        },


        async createWorkout(_, args) {
            try {
                console.log(args)
                const user = await User.findById(args.user_id)
                const createdWorkout = await Workout.create(args)
                console.log("Before Update",createdWorkout,'the _id',createdWorkout.id)
                console.log("Before Update",user)
                user.workouts.push(createdWorkout.id)
                console.log("after update",user)

                user.save()
                return createdWorkout
            } catch (error) {
                console.log(error)
                return error
            }

        }
    }
};

module.exports = resolvers