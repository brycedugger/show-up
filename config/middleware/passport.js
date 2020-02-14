require('dotenv').config();
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt-nodejs');

module.exports = (passport, db) => {
  // for sigining up new user
  passport.use(
    'local-signup',
    new LocalStrategy(
      {
        // by default, local strategy uses username and password, we will override with username
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass back the entire request to the callback
      },
      // required callback function
      (req, username, password, done) => {
        console.log(username)
        // function to generate hash password
        const hashPassword = password => {
          return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
        };

        // check to see if user already exists
        db.User.findOne({ username })
          .then(user => {
            // if a username was found already --> means username is used by someone
            if (user) {
              return done(null, false, {
                message: 'Username address already in use.'
              });
            }
            // no user was found --> create a new user
            else {
              db.User.findOne({ email: req.body.email }).then(res => {
                if (user) {
                  return done(null, false, {
                    message: 'Email address already in use.'
                  });
                }
                const hashedPassword = hashPassword(password);

                // create a new user object
                const newUser = {
                  email: req.body.email,
                  firstName: req.body.firstName,
                  lastName: req.body.lastName,
                  username,
                  password: hashedPassword

                };
                console.log("newUser" + (JSON.stringify(newUser)))
                console.log("req.body" + (JSON.stringify(req.body)))

                // use mongoose to create the new user passing in the newUser object
                db.User.create(newUser)
                  .then((newUser, created) => {
                    // unsuccessful in creating user
                    if (!newUser) {
                      return done(null, false, {
                        message: 'Unsuccessful in signup.'
                      });
                    }
                    // new user created successfully
                    if (newUser) {
                      return done(null, newUser, {
                        message: 'Signup successful.'
                      });
                    }
                  })
              })
                .catch(err => {
                  return done(null, false, {
                    message: 'Cannot create new user... ' + err
                  });
                });
            }

          })
          .catch(err => {
            return done(null, false, {
              message: 'Something went wrong with your signup.'
            });
          });
      }
    )
  );

  // strategy for logging in
  passport.use(
    'local-login',
    new LocalStrategy(
      {
        // by default, local strategy uses username and password, we will override with username
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass back the entire request to the callback
      },
      (req, username, password, done) => {
        const isValidPassword = (hashedPassword, enteredPassword) => {
          return bcrypt.compareSync(enteredPassword, hashedPassword);
        };

        db.User.findOne({ username })
          .then(user => {
            if (!user) {
              return done(null, false, {
                message: 'Email address does not exist.'
              });
            }

            if (!isValidPassword(user.password, password)) {
              return done(null, false, {
                message: 'Password incorrect.'
              });
            }

            return done(null, user);
          })
          .catch(err => {
            console.log('err', err);
            return done(null, false, {
              message: 'Something went wrong with your login.'
            });
          });
      }
    )
  );
};