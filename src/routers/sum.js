const User=require('../model/user')
const express=require('express');
const ensureLoggedIn= require('../middlerwares/ensure-logged-in')
const router=express.Router();


//router.use(ensureLoggedIn);

router.use(function (req, res, next) {
    res.locals.title='Trang Cá Nhân';
    next();
});


router.get('/', function(req, res){
    res.render('sum/form');
});

router.post('/', function(req, res){
    const number1=Number(req.body.number1);
    const number2=Number(req.body.number2);
    const result=number1+number2;
    res.render('sum/result',{number1, number2, result});
});

module.exports=router;