const jwt = require('jsonwebtoken');

exports.createToken = function(user) {
  return jwt.sign({ email: user.email }, getRandomString(), {
    algorithm: 'HS256',
    expiresIn: '1h'
  });
};

exports.authenticateToken = function(request, response, next) {
  const token = request.cookies.token;

  if (token == null) return response.sendStatus(401);

  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    if (err) {
      console.log(`authenticateToken Verify error: ${err}`);
      return response.sendStatus(403);
    }
    request.user = user;
    next();
  });
};

const getRandomString = () => {
  const randomString = require('crypto').randomBytes(64).toString('hex');
  process.env.TOKEN_SECRET = randomString;
  return process.env.TOKEN_SECRET;
};