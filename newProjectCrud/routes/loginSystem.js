const express = require("express");
const router = express.Router();
const loginSystemController = require("../controllers/loginSystem");

//* creating route 

router.post("/signUp", loginSystemController.signUpUser);
router.post("/login", loginSystemController.loginUser);
//* Exporting 
module.exports = router;
