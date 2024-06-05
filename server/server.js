const express = require('express');
const cookieParser = require('cookie-parser')

require('dotenv').config()

const { ApolloServer,ApolloServerPlugin  } = require('@apollo/server')
const { expressMiddleware } = require('@apollo/server/express4')
const PORT = process.env.PORT || 3333
const resolvers = require('./resolvers/resolvers')
// Construct a schema, using GraphQL schema language
const typeDefs = require('./typeDefs/schema')
const authMiddleware = require('./utils/auth')
// Provide resolver functions for your schema fields
const path = require('path');
const http = require('http')

const dbConnection = require('./config/db')

const app = express();


async function startServer() {

 
    const allowHeaderPlugin = {
        requestDidStart() {
          return {
            willSendResponse({ response }) {
              response.http.headers.set('Allow', 'GET', 'POST', 'OPTIONS');
            },
          };
        },
      };

      const server = new ApolloServer({
        typeDefs, resolvers,
        // plugins:[allowHeaderPlugin]
    });

    await server.start();

    app.use(
        '/graphql',
        express.json(),
        cookieParser(),
        expressMiddleware(server, {
            context: authMiddleware.authMiddleware
        })
        
    );
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        next();
      });

      if (!process.env.PORT) {
        
        app.use(express.static(path.join(__dirname, '../client/dist')));
    
        app.get('/', (req, res) => {
            res.sendFile(path.join(__dirname, '../client/dist/index.html'));
          });

        app.get('*', (req, res) => {
          res.sendFile(path.join(__dirname, '../client/dist/index.html')); 
        });
      }
    // Added the mongoose connection check to ensure the database connection has been established
    dbConnection.once('open', () => {
        app.listen(PORT, () =>
            console.log(`🚀 Server ready at http://localhost:3333${server.graphqlPath}`)
        );
    })

}
startServer()