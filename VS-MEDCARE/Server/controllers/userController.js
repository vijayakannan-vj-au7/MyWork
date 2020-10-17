//Models
const User = require("../models/user");

//validate
const validateForgotPassword = require("../validation/forgotPassword");
const contactUpdateValidate = require("../validation/contactval");

//fuction
module.exports = {
  //------------------------------------user-contact-update-clear----------------------------

  contactUpdate: async (req, res, next) => {
    try {
      //validate the update contact
      const { errors, isValid } = contactUpdateValidate(req.body);
      if (!isValid) {
        return res.status(400).json(errors);
      }
      //loged in user
      const { _id } = req.user;
      //given contact number
      const { contact } = req.body;
      //finding the user and updating the contact number
      await User.findOneAndUpdate({ _id }, { contact });
      //success message
      return res
        .status(200)
        .json({ message: "Contact number updated successfully" });
    } catch (err) {
      console.log("Error in updating contact number", err.message);
      return res
        .status(400)
        .json({ message: `Error in updating contact number ${err.message}` });
    }
  },

  //----------------------------user-acount-delete-clear-----------------------------

  userDelete: async (req, res, next) => {
    try {
      //validating the given input
      const { errors, isValid } = validateForgotPassword(req.body);
      if (!isValid) {
        return res.status(400).json(errors);
      }
      // given email
      const { email } = req.body;
      //user data
      const user = await User.findOne({ email });
      //checking weather email is present or not
      if (!user) {
        errors.email = "Email doesnt not exist";
        return res.status(400).json(errors.email);
      }
      //deleting the user account from bd
      await User.deleteOne({ email });
      //success message
      return res.status(200).json({ message: "Account deleted successfully" });
    } catch (err) {
      console.log("Error in Deleting the account", err.message);
      return res.status(400).json({
        message: `Error in Deleting the account ${err.message}`,
      });
    }
  },
};
