const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const authenticateWithToken = require("../middleWares/userMiddleWare");

//posting data
router.post('/createuser', userController.createdata)
router.get('/getAllData', authenticateWithToken, userController.getAllData)
router.get('/getuser/:id', authenticateWithToken, userController.getSingleData)
router.get('/getuser', userController.getSingleDataWithQuery)
router.delete('/deleteuser/:id', userController.deleteData)
router.patch('/updateuser/:id', userController.updateData)
module.exports = router; 