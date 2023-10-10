const express = require('express');
const router = express.Router();
const loginSystemController = require('../controllers/loginSystem');
const passwordResetController = require('../controllers/passwordReset'); 

router.post('/signUp', loginSystemController.signUpUser);
router.post('/signIn', loginSystemController.loginUser);
router.post('/requestPasswordReset', passwordResetController.requestPasswordReset);
router.post('/resetPassword', passwordResetController.resetPassword);

// Exporting
module.exports = router;
