const asyncHandler = require('express-async-handler');
const User=require('../model/user')
const express=require('express');
const bcrypt=require('bcrypt');
const router=express.Router();

router.use(function (req, res, next) {
    res.locals.title='Đăng Nhập';
    next();
});


router.get('/login', function(req, res){
    res.render('auth/login');
});

router.post('/login', asyncHandler(async function(req, res){
   
    const { email, password} = req.body;
    const found = await User.findByEmail(email) 
        if (found && bcrypt.compareSync(password, found.password)) {
            req.session.userId = found.id;
            res.redirect('/');
        }
        else{
            res.render('auth/login');
        };
}));

router.get('/logout', function(req, res){
    delete req.session.userId;
    res.redirect('/');
});

module.exports= router;