const asyncHandler = require('express-async-handler');
const Admin =require('../model/user');

module.exports = asyncHandler (async function auth( req, res, next){
    const {userId } =req.session;
    res.locals.currentUser=null;
    if(userId) {
       const user= await Admin.findById(userId)
       
        if(user) {
            req.currentUser=user;
            res.locals.currentUser=user;
        }
        next();
    } else{
        next();
    }
});