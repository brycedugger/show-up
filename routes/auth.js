module.exports = (app, passport, jwt) => {
    // signing up
    app.post('/signup', (req, res, next) => {
        passport.authenticate('local-signup', { session: false }, (err, user, info) => {
            if (!user || err) {
                return res.status(403).json({ err: 'Email Address already registered.' });
            }

            return res.status(200).json(user);
        })(req, res, next);
    });

    // logging in
    app.post('/login', (req, res, next) => {
        passport.authenticate('local-login', { session: false }, (err, user, info) => {
            // redirect if there was an issue with the login
            if (!user || err) {
                return res.status(403).json({ err: 'Incorrect username or password.' });
            }

            // logging in the user
            req.login(user, { session: false }, err => {
                if (err) {
                    res.send(err);
                }

                // generate a signed son web token with the contents of user object and return it in the response
                jwt.sign({ user }, 'secret', (err, token) => {
                    return res.status(200).json({ user, token });
                });
            });
        })(req, res, next);
    });
};