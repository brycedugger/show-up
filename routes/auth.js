require('dotenv').config();
const secret = process.env.SECRET_KEY;

module.exports = (app, passport, jwt) => {
  // signing up
  app.post('/signup', (req, res, next) => {
    passport.authenticate('local-signup', { session: false }, (err, user, info) => {
      if (!user || err) {
        return res.status(400).json({ error: info });
      }

      return res.status(200).json(user);
    })(req, res, next);
  });

  // logging in
  app.post('/login', (req, res, next) => {
    passport.authenticate('local-login', { session: false }, (err, user, info) => {
      // redirect if there was an issue with the login
      if (!user || err) {
        return res.status(403).json({ error: info });
      }

      // logging in the user
      req.login(user, { session: false }, err => {
        if (err) {
          res.status(400).json({ error: err });
        }

        // generate a signed son web token with the contents of user object and return it in the response
        jwt.sign({ _id: user._id }, secret, (err, token) => {
          // returns the token
          return res.status(200).json({ token, userId: user._id });
        });
      });
    })(req, res, next);
  });

  // logging out
  app.get('/logout', (req, res) => {
    req.logout();
    res.status(200).json({ data: 'Logout sucessful' });
  });
};