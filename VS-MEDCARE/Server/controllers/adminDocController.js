//File Handler
const cloudinary = require("../utils/cloudinary");

//Model
const Doctor = require("../models/doctor");

//Validation
const validateuploadDoc = require("../validation/uploaddocval");
const validateImage = require("../validation/imgvalidation");
const validateLeaveInput = require("../validation/leave");
const validateForgotPassword = require("../validation/forgotPassword");

//functions
module.exports = {
  //-----------------------------------upload-doctor-data-clear---------------------------------

  uploadDoc: async (req, res, next) => {
    try {
      //validate
      const { error, isValid } = validateuploadDoc(req.body);
      if (!isValid) {
        return res.status(400).json(error);
      }
      //given data
      const { name, department, email, description } = req.body;
      //reading the image file
      const file = req.files.file;
      //const file = req.files.image;
      const errors = validateImage(file);
      if (errors != null) {
        return res.status(400).json(errors);
      }
      //uploading image to cloud
      await cloudinary.uploader.upload(
        file.tempFilePath,
        { resource_type: "image" },
        async function (err, result) {
          function generateDocId() {
            var digits = "0123456789";
            let DocId = "";
            for (let i = 0; i < 6; i++) {
              DocId += digits[Math.floor(Math.random() * 10)];
            }
            return DocId;
          }
          //calling the fuction to create doctor id
          const DocId = await generateDocId();
          //Data is saved to the database with image url
          await Doctor.create({
            docid: DocId,
            name,
            department,
            email,
            description,
            imgUrl: result.secure_url,
          });
          return res
            .status(200)
            .json({ message: "Doctor data uploaded Sucessfully" });
        }
      );
    } catch (err) {
      console.log("Error in uploadPost", err.message);
      return res
        .status(400)
        .json({ message: `Error in uploadPost ${err.message}` });
    }
  },

  //-------------------------------------delete-doctor-clear-----------------------------------

  deleteDoc: async (req, res, next) => {
    try {
      //validate
      const { errors, isValid } = validateForgotPassword(req.body);
      if (!isValid) {
        return res.status(400).json(errors);
      }
      //given data
      const { email } = req.body;
      //checking weather admin is present or not
      const docData = await Doctor.findOne({ email });
      if (!docData) {
        errors.email = "Doctor doesnt not exist";
        return res.status(404).json(errors);
      }
      //deleting the doctor account from bd
      await Doctor.deleteOne({ _id: docData._id });
      //success message
      return res
        .status(200)
        .json({ message: "Doctor data deleted successfully" });
    } catch (err) {
      console.log("Error in Deleting the doctor data", err.message);
      return res.status(400).json({
        message: `Error in Deleting the doctor data ${err.message}`,
      });
    }
  },

  //---------------------------------mark-doctor-leave-clear------------------------------------

  leaveDoc: async (req, res, next) => {
    try {
      //validate
      const { errors, isValid } = validateLeaveInput(req.body);
      if (!isValid) {
        return res.status(400).json(errors);
      }
      //given data
      const { name, department, date } = req.body;
      //doctor data
      const docData = await Doctor.findOne({ name, department });
      //checking taken leave on that date
      const doclev = [];
      docData.leave.map((levDate) => {
        if (levDate == req.body.date) {
          doclev.push(levDate);
        }
      });
      if (doclev != 0) {
        errors.doctor = `Leave already marked on ${date}`;
        return res.status(404).json(errors.doctor);
      }

      //find the doctor by using name and department thn update leave
      await Doctor.findOneAndUpdate(
        { name, department },
        { $push: { leave: [date] } }
      );
      //success message
      res.status(200).json({
        message: "Leave marked successfully",
      });
    } catch (err) {
      console.log("Error in marking leave", err.message);
      return res
        .status(400)
        .json({ message: `Error in marking leave ${err.message}` });
    }
  },

  //--------------------------------doctor-Leave-cancle-clear-----------------------------------

  leaveDocCancel: async (req, res, next) => {
    try {
      //validate the form
      const { errors, isValid } = validateLeaveInput(req.body);
      if (!isValid) {
        return res.status(400).json(errors);
      }
      //given data
      const { name, department, date } = req.body;
      //doctor data
      const docData = await Doctor.findOne({ name, department });
      //checking taken leave on that date
      const doclev = [];
      await docData.leave.map((levDate) => {
        if (levDate != req.body.date) {
          doclev.push(levDate);
        }
      });
      //doctor not on leave
      if (doclev == 0) {
        errors.leave = `Doctor is not on Leave on ${date}`;
        return res.status(404).json(errors.leave);
      }
      //find the doctor by using name and department thn update leave
      await Doctor.findOneAndUpdate(
        { name, department },
        { $pullAll: { leave: [date] } }
      );
      //success message
      return res.status(200).json({
        message: "Leave cancelled successfully",
      });
    } catch (err) {
      console.log("Error in cancelling leave", err.message);
      return res
        .status(400)
        .json({ message: `Error in cancelling leave ${err.message}` });
    }
  },

  //---------------------------------view-all-doctor-data-clear---------------------------------

  viewAllDoc: async (req, res, next) => {
    try {
      //doctor data
      const docData = await Doctor.find({});
      //checking weather doctor is present or not
      if (!docData) {
        errors.email = "Doctor doesnt not exist";
        return res.status(404).json(errors);
      }
      //success message
      return res.status(200).json({ message: docData });
    } catch (err) {
      console.log("Error in Displaying the doctor details", err.message);
      return res.status(400).json({
        message: `Error in  Displaying the doctor details ${err.message}`,
      });
    }
  },
};

//--------------------------------------------------------------------------------------------
