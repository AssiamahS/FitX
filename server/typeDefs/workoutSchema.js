const { ApolloServer, gql } = require('apollo-server-express');
const typeDefs = gql`
    type Workout {
        WorkoutName: String
        ReminderTime:String
        DOW:String
        user_id:ID
    }

    type Query {
        getOneWorkOut:Workout
        getAllWorkouts:[Workout]
    }

    type Mutation{
        createWorkout(WorkoutName:String!,ReminderTime:String!,DOW:String!,user_id:ID! ) : Workout
    }
`;

module.exports = typeDefs