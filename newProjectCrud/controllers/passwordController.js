const bcrypt = require('bcrypt');
const userModel = require('../models/loginSystem');
const passwordResetModel = require('../models/passwordReset');
const jwt = require('jsonwebtoken');

const requestPasswordReset = async (req, res) => {
   try {
      const { email } = req.body;
      const user = await userModel.findOne({ email });
      if (!user) {
         return res.status(404).json({ error: 'User not found' });
      }
      const token = jwt.sign({ userId: user.id }, 'YOUR_SECRET_KEY', { expiresIn: '1hr' });

      //* Creating a password reset request
      const resetRequest = new passwordResetModel({
         email: user.email,
         token,
         expiresAt: new Date(Date.now() + 3600000),
      });

      await resetRequest.save();

      // TODO: Send an email to the user with the reset token and instructions

      res.status(200).json({ message: 'Password reset email sent successfully' });
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};

const resetPassword = async (req, res) => {
   try {
      const { token, newPassword } = req.body;

      //* Find the password reset request
      const resetRequest = await passwordResetModel.findOne({ token });

      if (!resetRequest) {
         return res.status(404).json({ error: 'Invalid or expired token' });
      }

      //* Check if the token has expired
      if (resetRequest.expiresAt < new Date()) {
         return res.status(401).json({ error: 'Token has expired' });
      }
      const user = await userModel.findOne({ email: resetRequest.email });

      //* Hashing the new password
      const hashPassword = await bcrypt.hash(newPassword, 10);
      user.password = hashPassword;
      await user.save();

      //* Deleting the password reset request
      await resetRequest.deleteOne();

      res.status(200).json({ message: 'Password reset successful' });
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};
module.exports = { requestPasswordReset, resetPassword };
