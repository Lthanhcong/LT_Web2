const Todo =require('../model/todo');
const express=require('express');

const router=express.Router();


router.get('/', function(req, res){
    res.render('/todo');
});
module.exports=router;