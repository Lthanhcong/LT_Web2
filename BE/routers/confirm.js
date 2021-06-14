const asyncHandler = require('express-async-handler');
const ensureLoggedIn = require('../middlerwares/ensure-logged-in');
const express =  require('express');
const router = express.Router();

const User = require('../model/user');

router.post('/', asyncHandler(async function(req, res){
  const {codeInput, code, name, email, username, hash} = req.body;

  if(codeInput == code){
    await User.add(name, email, username, hash);
    res.redirect('admin/login');
  }
  else{
    req.flash('error_msg','Mã xác nhận không chính xác');
  }
}));

module.exports = router;
