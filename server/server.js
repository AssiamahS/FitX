const express = require('express');
const cookieParser = require('cookie-parser')

require('dotenv').config()

const { ApolloServer } = require('@apollo/server')
const { expressMiddleware } = require('@apollo/server/express4')
const PORT = process.env.PORT || 3333
const resolvers = require('./resolvers/resolvers')
// Construct a schema, using GraphQL schema language
const typeDefs = require('./typeDefs/schema')
const authMiddleware = require('./utils/auth')
// Provide resolver functions for your schema fields

const app = express();


const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/FitX')


async function startServer() {

    const server = new ApolloServer({ typeDefs, resolvers });

    await server.start();

    app.use(
        '/graphql',
        express.json(),
        cookieParser(),
        expressMiddleware(server, {
            context: authMiddleware
        })
    );

    app.listen(PORT, () =>
        console.log(`🚀 Server ready at http://localhost:3333${server.graphqlPath}`)
    );

}

startServer()

// new commit to main