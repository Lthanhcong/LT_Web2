const User = require('../../model/user');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const ops = {};
ops.jwtFromRequest = ExtractJwt.fromHeader('token');
ops.secretOrKey = 'ACCESS_TOKEN_SECRET';
ops.ignoreExpiration = false;

const VerifyJwtStrategy = new JwtStrategy(ops, function (jwt_payload, done) {
    User.findById(jwt_payload.user.id)
        .then((user) => {
            if (user) {
                return done(null, user, 'Token verified.');
            } else {
                return done(null, false, 'False token');
            }
        })
        .catch((err) => done(err, false, err.message));
});

module.exports = VerifyJwtStrategy;
