const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

//posting data
router.post('/createuser', userController.createdata)
router.get("/getAllData", userController.getAllData)
router.get("/getById/:id",userController.getById );
router.delete("/delete/:id",userController.deleteById );

router.put("/userUpdate/:id",userController.updateById);




module.exports = router;