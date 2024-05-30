const { ApolloServer, gql } = require('apollo-server-express');
const typeDefs = gql`
    type User {
        _id:ID
        username:String
        email:String
        password:String
        age:String
        weight:String
        goal:String
        frequency:Int
        workouts:[ID]
    }

    type Query {
        getOneUser(_id:ID):User
        getAllUsers:[User]
        
    }

    type Mutation{
        createUser(username:String!,email:String!,password:String!,age:Int, weight:Int,goal:String,frequency:Int) : User
        removeOneUser(_id:ID):User
        updateOneUser(_id:ID,username:String,email:String,password:String!,weight:Int,goal:String,frequency:Int):User
        
    }
    type Workout {
        exercise: String
        weight:Int
        reps:Int
        DayOfWeek:String
        
    }

    type Query {
        getOneWorkout:Workout
        getAllWorkouts:[Workout]
    }

    type Mutation{
        createWorkout(exercise:String!,weight:Int!,reps:Int!,DayOfWeek:String,user_id:ID! ) : Workout
        
    }
`;

module.exports = typeDefs