const express = require('express');
const authController = require('../controllers/auth');


const router = express.Router();

router.post('/register', authController.signup);

router.post('/login', authController.signin);

module.exports = router;
