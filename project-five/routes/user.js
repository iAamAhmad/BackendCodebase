const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const postController = require('../controllers/post')

//*posting data for user Api
router.post('/createuser', userController.createdata)
router.get("/getAllData", userController.getAllData)
router.get("/getById/:id", userController.getById);
router.delete("/delete/:id", userController.deleteById);
router.put("/userUpdate/:id", userController.updateById);



//*posting data for post and description Api
router.post('/createPostData', postController.createPostData)
router.get("/getAllPostData", postController.getAllPostData)
router.get("/getPostById/:id", postController.getPostById);
router.delete("/deletePostById/:id", postController.deletePostById);
router.put("/updatePostById/:id", postController.updatePostById);



module.exports = router;