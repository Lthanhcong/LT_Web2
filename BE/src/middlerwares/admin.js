const asyncHandler = require('express-async-handler');
const auth = require('../model/user');

module.exports = asyncHandler(async function auth(req, res, next) {
    res.locals.currentUser = null;
    const { userId } = req.session;
    if (!userId) {
        next();
    } else {
        const user = await User.findOne({
            where: {
                id: userId,
            },
        });
        if (!user) {
            delete req.session.userId;
            next();
        } else {
            req.currentUser = user;
            res.locals.currentUser = user;
            next();
        }
    }
});
