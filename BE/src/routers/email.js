const express = require('express');
const router = express.Router();

const emailController = require('../services/Email/email.controller');

router.post('/', emailController.collectEmail);

router.get('/confirm/:id', emailController.confirmEmail);

module.exports = router;
