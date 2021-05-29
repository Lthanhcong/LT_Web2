
module.exports=function ensureLoggedIn( req, res, next){
    if (!req.currentUser)
    {
        res.redirect('auth/login');
    } else {
       res.redirect('/sum');
    };
    next();
};