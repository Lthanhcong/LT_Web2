const asyncHandler = require('express-async-handler');
const express=require('express');
const nodemailer=require('nodemailer');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router=express.Router();

const User =require('../../model/user');

router.use(function (req, res, next) {
    res.locals.title="Đăng Ký";
    next();
});



router.get('/register', function(req, res){
    res.render('user/register');
});



router.post('/register', asyncHandler(async function (req, res) {
    const {name, email, username, password, repassword } = req.body;
  
    const errors = [];
    if(!name || !email || !username || !password || !repassword){
      errors.push('Các mục không được để trống :(');
    }
    if(password !== repassword){
      errors.push('Mật khẩu và mật khẩu được nhập lại không khớp :(');
    }
    if(errors.length > 0){
      res.render('user/register',
      {
        errors: errors,
        values: req.body
      });
    }
    else{
      const found = await User.findByUsername(username)
      if(found){
        errors.push('Tài khoản đã tồn tại :(');
        res.render('user/register', {
          errors: errors,
          values: req.body
        });
      }
      else{
        const hash = bcrypt.hashSync(password, 10);
        const addNewUser = {
          name:name,
          email:email,
          username:username,
          hash:hash
        };
        
        const transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 587,
          secure: false,
          auth: {
            user: 'thanhcong1234553@gmail.com',
            pass: 'Thanhcong@123'
          }
        });
  
        const min = 1000000;
        const max = 10000000;
        const code = Math.floor(Math.random() * (max - min + 1)) + min;
  
        const info = await transporter.sendMail({
          from: 'thanhcong1234553@gmail.com',
          to: addNewUser.email,
          subject: "Đăng ký tài khoản",
          html: `Bạn cần phải làm thêm một bước nữa mới có thể tạo tài khoản để đăng nhập! <br> Mã xác nhận tài khoản: <b>${code}</b>`
        });
        res.render('confirm',{ code, addNewUser }); 
      }
    }
  
  }));

  module.exports = router;