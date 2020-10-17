//model
const User = require("../models/user");
const Admin = require("../models/admin");
const Super = require("../models/superadmin");
const Doctor = require("../models/doctor");
const Appo = require("../models/appoinment");

module.exports = {
  //---------------------------- home controller-------------------------------
  userHome: async (req, res, next) => {
    try {
      const { _id } = req.user;

      //user data
      const userData = await User.findOne(_id);

      //doctor data
      const doctorData = await Doctor.find();

      //admin data
      const adminData = await Admin.find();

      //appo data
      const appoData = await Appo.find({ userID: _id });

      //console.log(appoData);

      // filter department data
      const deptData = [];
      await adminData.map((dept) => {
        deptData.push(dept.department);
      });

      //sending response
      if (userData && doctorData && deptData && appoData) {
        res.status(200).json({
          userData: userData,
          doctorData: doctorData,
          deptData: deptData,
          appoData: appoData,
        });
      }
    } catch (err) {
      console.log("Error in user home data", err.message);
      return res
        .status(400)
        .json({ message: `Error in  user home data ${err.message}` });
    }
  },
  //---------------------------- admin home controller-------------------------------
  adminHome: async (req, res, next) => {
    try {
      const { _id } = req.user;
      //admin data
      const adminData = await Admin.findOne(_id);
      //console.log(adminData);

      //doctor data
      const doctorData = await Doctor.find({
        department: adminData.department,
      });
      //docID
      const docID = [];
      doctorData.map((id) => {
        docID.push(id._id);
      });
      //appo data
      const appoAllData = await Appo.find();
      //take the appoinents of docid
      const appoData = [];
      appoAllData.map((appo) => {
        docID.map((id) => {
          if (appo.doctorID == id.toString()) {
            appoData.push(appo);
          }
        });
      });

      //sending response
      if (adminData && doctorData && appoData) {
        return res.status(200).json({
          adminData: adminData,
          doctorData: doctorData,
          appoData: appoData,
        });
      }
    } catch (err) {
      console.log("Error in admin home data", err.message);
      return res
        .status(400)
        .json({ message: `Error in  admin home data ${err.message}` });
    }
  },
  //---------------------------- superadmin controller-------------------------------
  superAdminHome: async (req, res, next) => {
    try {
      const { _id } = req.user;
      const superData = await Super.findOne(_id);
      //console.log(superData);
      const doctorData = await Doctor.find();
      //console.log(doctorData);
      const adminData = await Admin.find();
      //console.log(adminData);
      // filter department data
      const deptData = [];
      await adminData.map((dept) => {
        deptData.push(dept.department);
      });
      //console.log(deptData);
      if (superData && doctorData && adminData && deptData) {
        res.status(200).json({
          superData: superData,
          doctorData: doctorData,
          adminData: adminData,
          deptData: deptData,
        });
      }
    } catch (err) {
      console.log("Error in super admin home data", err.message);
      return res
        .status(400)
        .json({ message: `Error in  super admin home data ${err.message}` });
    }
  },
};
