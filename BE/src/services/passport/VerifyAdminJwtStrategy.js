const User = require('../../model/user');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const ops = {};
ops.jwtFromRequest = ExtractJwt.fromHeader('token');
ops.secretOrKey = 'ACCESS_TOKEN_SECRET';
ops.ignoreExpiration = false;

const VerifyAdminJwtStrategy = new JwtStrategy(ops, function (
    jwt_payload,
    done,
) {
    User.findById(jwt_payload.user.id)
        .then((user) => {
            if (user) {
                if (user.isAdmin)
                    return done(null, user, 'Token verified as Admin');
                return done(null, false, 'False Token Admin');
            } else {
                return done(null, false, 'False Token Admin');
            }
        })
        .catch((err) => done(err, false, err.message));
});

module.exports = VerifyAdminJwtStrategy;
