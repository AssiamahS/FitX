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
    // Log to ensure the token is being retrieved correctly
    //console.log('Incoming request cookies:', req.cookies);

    // Retrieve token from cookies
    let token = req.cookies?.token;

    if (!token) {
      console.log('No token found in cookies');
      return { req, res };
    }

    try {
      // Verify token using the secret
      const { user_id } = jwt.verify(token, process.env.JWT_SECRET, { maxAge: expiration });
      req.user_id = user_id;

      //console.log('Token verified successfully:', user_id);
      return { req, res };
    } catch (err) {
      console.log('verify token error', err);
      return { req, res };
    }
  },

  signToken: function (user_id) {
    try {
      // Sign token using the same secret
      const token = jwt.sign({ user_id }, process.env.JWT_SECRET, { expiresIn: expiration });

      console.log('Token signed successfully:', token);
      return token;
    } catch (error) {
      console.log('sign error', error);
      return null;
    }
  },
};
