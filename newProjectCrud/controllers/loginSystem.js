const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userModel = require('../models/loginSystem');

//sign up api

const signUpUser = async (req, res) => {


    try {
        const { username, email, password } = req.body;
        const hashPassword = await bcrypt.hash(password, 10);
        const loginUser = new userModel({ username, email, password: hashPassword })
        await loginUser.save();
        res.status(201).json({ message: "User created Successfully " })

    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}
//* login Api
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await user.findOne({ email });
        if (user && await bcrypt.compare(password, user.password)) {
            const token = jwt.sign({ userId: user.id }, "THISMYELRHTYGJTIBNGMFJRHDKLOITRF", { expiresIn: "1hr" })
            res.status(200).json({ token })
        }
        else {
            res.status(401).json({ error: "invalid credential" })
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message })

    }
}
// Exporting modules to use!
module.exports = { signUpUser, loginUser };

