const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const PORT = process.env.PORT || 3333
const resolvers =require('./resolvers/userResolver')
const resolversWorkout= require('./resolvers/workoutResolver')
// Construct a schema, using GraphQL schema language
const typeDefs = require('./typeDefs/schema')

// Provide resolver functions for your schema fields

const app = express();


const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/FitX')


async function startServer() {

    const server = new ApolloServer({ typeDefs, resolvers,resolversWorkout });
    await server.start()
    server.applyMiddleware({ app });


    app.listen(PORT, () =>
        console.log(`🚀 Server ready at http://localhost:3333${server.graphqlPath}`)
    );

}
startServer()