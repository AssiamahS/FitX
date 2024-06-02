const { GraphQLError } = require('graphql');
const jwt = require('jsonwebtoken');

const expiration = '2h';

module.exports = {
  AuthenticationError: new GraphQLError('Could not authenticate user.', {
    extensions: {
      code: 'UNAUTHENTICATED',
    },
  }),
  authMiddleware: function ({ req, res }) {
    let token = req.cookies?.token

    if (!token) {
      return { req, res };
    }

    try {
      // Ensure the secret is the same value for both verify and sign
      const { user_id } = jwt.verify(token, process.env.JWT_SECRET, { maxAge: expiration });
      req.user_id = user_id;

      return { req, res };
    } catch (err) {
      console.log('verify token error', err);

      return { req, res }
    }
  },

  signToken: function (user_id) {
    try {
      // Ensure the secret is the same value for both verify and sign
      const token = jwt.sign({ user_id }, process.env.JWT_SECRET, { expiresIn: expiration });

      return token;
    } catch (error) {
      console.log('sign error', error)
    }


  },
};
