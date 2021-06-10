const User=require('../model/user');
const express=require('express');
const router=express.Router();

router.use(function (req, res, next) {
    res.locals.title="Khách Hàng";
    next();
});


router.get('/login', function(req, res){
    res.send('login');
});

router.get('/', function(req, res){
    res.render('user');
});

module.exports= router;