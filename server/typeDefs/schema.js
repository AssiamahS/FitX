const { ApolloServer, gql } = require('apollo-server-express');
const typeDefs = gql`
    type User {
        _id:ID
        username:String
        email:String
        password:String
        workouts:[ID]
    }

    type Query {
        getOneUser(_id:ID):User
        getAllUsers:[User]
        
    }

    type Mutation{
        createUser(username:String!,email:String!,password:String!) : User
        removeOneUser(_id:ID):User
        updateOneUser(_id:ID,username:String,email:String,password:String!):User
    }
    type Workout {
        WorkoutName: String
        ReminderTime:String
        DOW:String
        user_id:ID
    }

    type Query {
        getOneWorkout:Workout
        getAllWorkouts:[Workout]
    }

    type Mutation{
        createWorkout(WorkoutName:String!,ReminderTime:String!,DOW:String!,user_id:ID! ) : Workout
        
    }
`;

module.exports = typeDefs