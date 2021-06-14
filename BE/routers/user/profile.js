const User=require('../../model/user');
const express=require('express');
const ensureLoggedIn= require('../../middlerwares/ensure-logged-in');
const router=express.Router();

router.use(ensureLoggedIn);

router.use(function (req, res, next) {
    res.locals.title='Trang Cá Nhân';
    next();
});


router.get('/', function(req, res){
    res.render('user/form');
});
module.exports=router;