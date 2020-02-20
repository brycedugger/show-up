module.exports = (req, res, next) => {
    // get auth header value
    const bearerHeader = req.headers['authorization'];

    // check if bearer is undefined
    if (typeof bearerHeader !== 'undefined') {
        // split at the space
        const bearer = bearerHeader.split(' ');

        // get token from array
        const bearerToken = bearer[1];

        // set the token
        req.token = bearerToken;
        // continue to next middleware
        next();
    } else {
        res.status(403).json({ err: 'Token missing from authorization header.' });
    }
};