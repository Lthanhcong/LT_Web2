const asyncHandler = require('express-async-handler');
const Admin=require('../model/user');
const express=require('express');
const bcrypt=require('bcrypt');
const router=express.Router();
const passport=require('passport');


router.use(function (req, res, next) {
    res.locals.title='Đăng Nhập';
    next();
});

router.get('/login', function(req, res){
    res.render('login');
}); 

router.post('/login', asyncHandler(async function(req, res){
   
    const { username, password} = req.body;
    const found = await Admin.findByUsername(username) 
        if (found && bcrypt.compareSync(password, found.password)) {
            req.session.userId = found.id;
            res.redirect('/');
        }
        else{
            res.render('login');
        };
}));

router.get('/facebook', passport.authenticate('facebook', { scope: ['email']}));
router.get('/facebook/callback',
  passport.authenticate('facebook', { successRedirect: '/ ',
                                      failureRedirect: '/' }));

router.get('/logout', function (req, res) {
  if(req.session.userId){
    delete req.session.userId;
    res.redirect('/');
  }
  else{
    req.logout();
    res.redirect('/');
  }
});




module.exports = router;