const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//Model
const superAdmin = require("../models/superadmin");

//Config key fot token
const keys = require("../config/keys");

//Validation
const validateLoginInput = require("../validation/login");

module.exports = {
  //----------------------------super-superadmin-login-clear------------------------------------

  superAdminLogin: async (req, res) => {
    try {
      //validate
      const { errors, isValid } = validateLoginInput(req.body);
      if (!isValid) {
        return res.status(400).json(errors);
      }
      //given data
      const { email, password } = req.body;
      //super admin data
      const superadmin = await superAdmin.findOne({ email });
      //checking weather the given is present or not
      if (!superadmin) {
        errors.email = "Email doesnt not exist";
        return res.status(404).json(errors.email);
      }
      //comparinig the given password with hashed password
      const isCorrect = await bcrypt.compare(password, superadmin.password);
      if (!isCorrect) {
        errors.password = "Invalid Credentials";
        return res.status(404).json(errors.password);
      }
      //payload data
      const payload = { id: superadmin.id, superadmin: superadmin };
      //genrating the jwt token and sending as response
      jwt.sign(payload, keys.secretKey, { expiresIn: 86400 }, (err, token) => {
        res.json({
          status: 200,
          success: true,
          token: token,
        });
      });
    } catch (err) {
      console.log("Error in userLogin", err.message);
      return res
        .status(400)
        .json({ message: `Error in userLogin ${err.message}` });
    }
  },
};

//----------------------------------------------------------------------------------------------
