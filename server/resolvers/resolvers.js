const User = require('../models/User')
const Workout = require('../models/Workout')

const { signToken } = require('../utils/auth');
const resolvers = {
    Query: {
        async authenticate(_, args, context) {
            const id = context.req?.user_id

            if (!id) return null

            const user = await User.findById(id)

            return user
        },
        async getAllUsers() {
            const users = await User.find().populate('workouts')
            return users
        },
        async getOneUser(_, args,context) {
            console.log(context.req?.user_id)
            const user = await User.findById(context.req?.user_id).populate('workouts')
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

                // Create a JWT token and store the user's id to it
                const token = signToken(user._id)

                // Send a cookie to the browser with the JWT saved to it
                context.res.cookie('token', token, {
                    httpOnly: true
                })

                return user
            } catch (error) {
                // If user is already in the database, this error code will trigger
                if (error.code === 11000) {
                    throw new Error('That username or email is already in use.')
                }

                throw error
            }
        },

        async logoutUser(_, args, context) {
            delete context.req.user_id
            context.res.clearCookie('token')

            return {
                message: 'User logged out successfully!'
            }
        },

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