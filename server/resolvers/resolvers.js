const User = require('../models/User')
const Workout = require('../models/Workout')
const bcrypt = require('bcryptjs');
const { signToken, AuthenticationError } = require('../utils/auth');
const resolvers = {
    Query: {
        async authenticate(_, args, context) {
            const id = context.req?.user_id

            if (!id) return null

            const user = await User.findById(id)

            return user
        },

        async getAllUsers() {
            const users = await User.find()
            console.log(users)
            return users
        },
        async getOneUser(_, args, context) {
            // Get to the logged in user's id
            // context.req.user_id
            // // Get user data
            // const user = await User.findById(context.req.user_id)
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

        async loginUser(_, args, context) {
            console.log(args)
            // bcrypt.compareSync(password, this.password)
            const user = await User.findOne({
                email: args.email
            });

            if (!user) throw new Error('User not found with that email address')

            const is_valid = await user.validatePassword(args.password)

            if (!is_valid) {
                throw new Error("Invalid Password")
            }

            const token = signToken(user._id)

            context.res.cookie('token', token, {
                httpOnly: true
            })

            return user
        },

        async registerUser(_, args, context) {
            try {
                const user = await User.create(args)

                const token = signToken(user._id)

                context.res.cookie('token', token, {
                    httpOnly: true
                })

                return user
            } catch (error) {
                throw error
            }
        },

        // async createUser(_, args) {
        //     console.log(args)
        //     const user = await User.create(args)
        //     return user
        // },
        // async removeOneUser(_, args) {
        //     console.log(args)
        //     const user = await User.deleteOne({ _id: args._id })
        //     return user
        // },
        // async updateOneUser(_, args) {
        //     console.log(args)
        //     const user = await User.updateOne({ _id: args._id },
        //         {
        //             username: args?.username,
        //             email: args?.email,
        //             password: args?.password
        //         })
        //     return user
        // },


        async createWorkout(_, args, context) {
            try {
                const user = await User.findById(context.req.user_id)
                const createdWorkout = await Workout.create({
                    ...args,
                    user: context.req.user_id
                })
                // console.log("Before Update",createdWorkout,'the _id',createdWorkout.id)
                // console.log("Before Update",user)
                user.workouts.push(createdWorkout._id)
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