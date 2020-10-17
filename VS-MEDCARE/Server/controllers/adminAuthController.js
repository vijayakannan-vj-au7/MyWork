const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const gravatar = require("gravatar");

//Model
const Admin = require("../models/admin");

//Email
const { sendMailFP, sendMailRG } = require("../utils/adminNodemailer");

//Config
const keys = require("../config/keys");

//Validation
const validateLoginInput = require("../validation/login");
const validateRegisterInput = require("../validation/register");
const validateOTP = require("../validation/otpValidation");
const validateForgotPassword = require("../validation/forgotPassword");
const validateUpdatePassword = require("../validation/updatePassword");

//function
module.exports = {
  //------------------------------admin-register-clear------------------------------------------

  adminRegister: async (req, res) => {
    try {
      //validate the form
      const { errors, isValid } = validateRegisterInput(req.body);
      if (!isValid) {
        return res.status(400).json(errors);
      }
      //gien data
      const { name, department, email, password, contact } = req.body;
      //admin data
      const admin = await Admin.findOne({ email });
      //checking weather the email is alredy presenmt or not
      if (admin) {
        errors.email = "Email already exist";
        return res.status(404).json(errors.email);
      }
      //admin data
      const adminDept = await Admin.find({ department });
      //checking weather the department is already present
      await adminDept.map((dep) => {
        if (dep.department === department) {
          errors.admin = `Admin already exist for ${department} Department`;
          return res.status(404).json(errors.admin);
        }
      });
      //hashing the password and storing into variable
      let hashedPassword = await bcrypt.hash(password, 10);
      //default avatar is set
      const avatar = gravatar.url(email, { s: "200", r: "pg", d: "mm" });
      //token generation
      const token = jwt.sign({ name, email }, keys.secretKey, {
        expiresIn: 3600,
      });
      //sending a verfication mail using nodemailer
      await sendMailRG(req.body.email, token, "REGISTER");
      //admin data
      const newAdmin = await new Admin({
        name,
        department,
        email,
        contact,
        password: hashedPassword,
        avatar,
      });
      //admin data is save to the database
      await newAdmin.save();
      res.status(200).json({
        message: "Admin Data Added successfully, admin check mail",
      });
    } catch (err) {
      console.log("Error in userRegister", err.message);
      return res
        .status(400)
        .json({ message: `Error in userRegister ${err.message}` });
    }
  },

  //---------------------------------admin-email-conformation-clear-----------------------------

  adminConfirmation: (req, res) => {
    try {
      //data from params taken from link
      const confirmToken = req.params.token;
      //verifing the jwt token
      const { email } = jwt.verify(confirmToken, keys.secretKey);
      // updating the admin conformation as true
      Admin.findOneAndUpdate(
        { email: email },
        { isConfirmed: true },
        (err, doc) => {
          if (err) {
            console.log("Something wrong when updating data!");
          }
          //success message
          return res.status(200).json({
            message:
              "email verification Successfull now u can access your account",
          });
        }
      );
    } catch (e) {
      console.log(e.message);
      return res
        .status(400)
        .send(
          "Email confirmation issue, Note: vist website and genrate new account activation link"
        );
    }
  },

  //----------------------------------resending-token-clear-------------------------------------

  verifyResendToken: async (req, res) => {
    try {
      //validate the form
      const { errors, isValid } = validateForgotPassword(req.body);
      if (!isValid) {
        return res.status(400).json(errors);
      }
      //given data
      const { email } = req.body;
      //admin data
      const admin = await Admin.findOne({ email });
      //checks weather the admin is already exist
      if (!admin) {
        errors.email = "Email not exist";
        return res.status(404).json(errors.email);
      }
      // checking weather the admin is already verified
      if (admin.isConfirmed == true) {
        errors.con = "Email already verified , login to access";
        return res.status(404).json(errors.con);
      }
      //token generation
      const token = jwt.sign({ email }, keys.secretKey, {
        expiresIn: 3600,
      });
      //sending a verfication mail using nodemailer
      await sendMailRG(req.body.email, token, "REGISTER");
      //success message
      res.status(200).json({
        message:
          "Please check your Email, click the link to activate your account",
      });
    } catch (err) {
      console.log("Error in Token Resending", err.message);
      return res
        .status(400)
        .json({ message: `Error in Token Resending ${err.message}` });
    }
  },

  //-------------------------------------admin-login-clear--------------------------------------

  adminLogin: async (req, res) => {
    try {
      //validate
      const { errors, isValid } = validateLoginInput(req.body);
      if (!isValid) {
        return res.status(400).json(errors);
      }
      //given data
      const { email, password } = req.body;
      //admin data
      const admin = await Admin.findOne({ email });
      //checking weather the admin is present or not
      if (!admin) {
        errors.email = "Email doesnt not exist";
        return res.status(404).json(errors.email);
      }
      //comparing the password with hashed password in db
      const isCorrect = await bcrypt.compare(password, admin.password);
      if (!isCorrect) {
        errors.password = "Invalid Credentials";
        return res.status(404).json(errors.password);
      }
      //check weather the admin is verified the mail
      if (admin.isConfirmed != true) {
        errors.confirm = "Please verify your mail";
        return res.status(404).json(errors.confirm);
      }
      //payload data
      const payload = { id: admin.id, admin: admin, role: admin.role };
      //genrating the jwt token and sending as response
      jwt.sign(payload, keys.secretKey, { expiresIn: 7200 }, (err, token) => {
        res.json({
          success: true,
          token: token,
        });
      });
    } catch (err) {
      console.log("Error in admin Login", err.message);
      return res
        .status(400)
        .json({ message: `Error in admin Login ${err.message}` });
    }
  },

  //-------------------------------------forgot-password-clear-----------------------------------

  forgotPassword: async (req, res) => {
    try {
      //validate
      const { errors, isValid } = validateForgotPassword(req.body);
      if (!isValid) {
        return res.status(400).json(errors);
      }
      //given data
      const { email } = req.body;
      //admin data
      const admin = await Admin.findOne({ email });
      //checking weather the user is present or not
      if (!admin) {
        errors.email = "Email Not found, Provide registered email";
        return res.status(404).json(errors.email);
      }
      //genrating the OTP function
      function generateOTP() {
        var digits = "0123456789";
        let OTP = "";
        for (let i = 0; i < 6; i++) {
          OTP += digits[Math.floor(Math.random() * 10)];
        }
        return OTP;
      }
      //calling the genrating the OTP function
      const OTP = await generateOTP();
      admin.otp = OTP;
      //saving the data to db
      await admin.save();
      //sending the OTP to the user using nodemailer
      await sendMailFP(admin.email, OTP, "OTP");
      //helper
      const helper = async () => {
        admin.otp = "";
        await admin.save();
      };
      setTimeout(function () {
        helper();
      }, 1800000);
      //success message
      res.status(200).json({ message: "check your registered email for OTP" });
    } catch (err) {
      console.log("Error in sending email", err.message);
      return res
        .status(400)
        .json({ message: `Error in generateOTP${err.message}` });
    }
  },

  //----------------------------------------posting-otp-clear-----------------------------------

  postOTP: async (req, res) => {
    try {
      //validate
      const { errors, isValid } = validateOTP(req.body);
      if (!isValid) {
        return res.status(400).json(errors);
      }
      //given data
      const { email, otp, newPassword, confirmNewPassword } = req.body;
      //admin data
      const admin = await Admin.findOne({ email });
      //checking weather the admin is present or not
      if (!admin) {
        errors.email = "Email Not found, Provide registered email";
        return res.status(404).json(errors.email);
      }

      //checking weather the given otp is same in db
      if (admin.otp != otp) {
        errors.otp = "Invalid OTP, check your email again";
        return res.status(400).json(errors.otp);
      }
      //checking weather the given is expried
      if (admin.otp === "") {
        errors.exp = "OTP has expired";
        return res.status(404).json(errors.exp);
      }
      //comparing the given both newpass and conpass are same
      if (newPassword !== confirmNewPassword) {
        errors.confirmNewPassword = "Password Mismatch";
        return res.status(404).json(errors.confirmNewPassword);
      }

      //hashing the given new password
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      admin.password = hashedPassword;
      await admin.save();
      //success message
      res.status(200).json({ message: "Password Changed Successfully" });
    } catch (err) {
      console.log("Error in submitting OTP", err.message);
      return res
        .status(400)
        .json({ message: `Error in postOTP ${err.message}` });
    }
  },

  //-----------------------------------update-password-clear------------------------------------

  updatePassword: async (req, res) => {
    try {
      //validate
      const { errors, isValid } = validateUpdatePassword(req.body);
      if (!isValid) {
        return res.status(400).json(errors);
      }
      //user login
      const { email } = req.user;
      //given data
      const { oldPassword, newPassword, confirmNewPassword } = req.body;
      //admin data
      const admin = await Admin.findOne({ email });
      const isCorrect = await bcrypt.compare(oldPassword, admin.password);
      //checking the old admin password is equal to given old password
      if (!isCorrect) {
        errors.oldPassword = "Invalid old Password";
        return res.status(404).json(errors.oldPassword);
      }
      //comparing the given both newpass and conpass are same
      if (newPassword !== confirmNewPassword) {
        errors.confirmNewPassword = "Password Mismatch";
        return res.status(404).json(errors.confirmNewPassword);
      }
      //checking weather given new passowrd is same as old password
      if (newPassword == oldPassword) {
        errors.oldPass = "New Password Cant be Same as Old Password";
        return res.status(404).json(errors.oldPass);
      }
      //hashing the new password
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      admin.password = hashedPassword;
      await admin.save();
      //success message
      res.status(200).json({ message: "Password Updated" });
    } catch (err) {
      console.log("Error in updating password", err.message);
      return res
        .status(400)
        .json({ message: `Error in updatePassword${err.message}` });
    }
  },

  //---------------------------------delete-admin-account-clear---------------------------------

  adminDelete: async (req, res) => {
    try {
      //validate
      const { errors, isValid } = validateForgotPassword(req.body);
      if (!isValid) {
        return res.status(400).json(errors);
      }
      //given data
      const { email } = req.body;
      //checking weather admin is present or not
      const admin = await Admin.findOne({ email });
      if (!admin) {
        errors.email = "Email doesnt not exist";
        return res.status(400).json(errors.email);
      }
      //deleting the admin account from bd
      await Admin.deleteOne({ email });
      //success message
      return res
        .status(200)
        .json({ message: "Admin account deleted successfully" });
    } catch (err) {
      console.log("Error in Deleting the Admin account", err.message);
      return res.status(400).json({
        message: `Error in Deleting the Admin account ${err.message}`,
      });
    }
  },
};

//--------------------------------------------------------------------------------------------
