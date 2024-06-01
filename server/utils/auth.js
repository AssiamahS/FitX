const { GraphQLError } = require('graphql');
const jwt = require('jsonwebtoken');
const secret = "anything";

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
      const { user_id } = jwt.verify(token, process.env.JWT_SECRET, { maxAge: expiration });
      req.user_id = user_id;

      return { req, res };
    } catch {
      return { req, res }
    }

    return req;
  },

  signToken: function (user_id) {
    return jwt.sign({ user_id }, secret, { expiresIn: expiration });
  },
};
