const verifyToken = require('../config/middleware/verifyToken');

module.exports = (app, db, jwt) => {
  // route to get the user's model using the userId from the token
  app.get('/user', verifyToken, (req, res) => {
    jwt.verify(req.token, 'secret', (err, token) => {
      if (err) {
        res.status(403).json({ error: 'Token is invalid.' });
      } else {
        db.User.findById({ _id: token._id })
          .then(user => {
            res.status(200).json(user);
          })
          .catch(err => {
            res.status(400).json({ error: err });
          });
      }
    });
  });

  // route to get the user's model using the userId passed in as req.params.id
  app.get('/user/:id', (req, res) => {
    db.User.findById({ _id: req.params.id })
      .then(user => {
        res.status(200).json(user);
      })
      .catch(err => {
        res.status(400).json({ error: err });
      });
  });
};