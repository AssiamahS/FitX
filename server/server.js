const express = require('express');
const path = require('path')
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

const dbConnection = require('./config/db')

const app = express();


async function startServer() {

    const server = new ApolloServer({ typeDefs, resolvers });

    await server.start();

    app.use(
        '/graphql',
        express.json(),
        cookieParser(),
        expressMiddleware(server, {
            context: authMiddleware.authMiddleware
        })
    );

    // For deployment on heroku or render
    if (process.env.PORT) {
        app.use(express.static('../client/dist'))
        app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, '../client/dist/index.html'))
        })
    }
    // Added the mongoose connection check to ensure the database connection has been established
    dbConnection.once('open', () => {
        app.listen(PORT, () =>
            console.log(`🚀 Server ready at http://localhost:3333${server.graphqlPath}`)
        );
    })

}
startServer()