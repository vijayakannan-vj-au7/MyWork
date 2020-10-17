//model
const Doctor = require("../models/doctor");
const Appo = require("../models/appoinment");

//validation
const validateAppoBooking = require("../validation/appovalidation");
// nodemailer
const sendMailAP = require("../utils/appoNodmailer");

module.exports = {
  //--------------------------------=-----appo-book-clear------------------------------------

  appoBook: async (req, res, next) => {
    try {
      //validate
      const { errors, isValid } = validateAppoBooking(req.body);
      if (!isValid) {
        return res.status(400).json(errors);
      }

      //user id
      const userID = req.user._id;

      //given data
      const {
        department,
        name,
        appoDate,
        appoTimeSloat,
        pname,
        gender,
        dob,
        email,
        contact,
        msg,
      } = req.body;

      //doctor data
      const docData = await Doctor.findOne({ department, name });

      //find the doctor by using name and department thn update leave
      if (!docData) {
        errors.nodoc = "No doctor data found";
        return res.status(404).json(errors.nodoc);
      }

      // checking weather doctor is on leave or not
      const docInLev = [];
      docData.leave.map((date) => {
        if (date == appoDate) {
          docInLev.push(date);
        }
      });

      if (docInLev != 0) {
        errors.leave = `Doctor is on leave : ${appoDate}`;
        return res.status(404).json(errors.leave);
      }

      // checking weather date is available or not
      const appoFind = await Appo.find({
        doctorID: docData._id,
        appoDate: appoDate,
      });

      // checking weather all the slots are filled for date
      if (appoFind.length == 8) {
        errors.fill = `All sloat filled for date : ${appoDate}`;
        return res.status(404).json(errors.fill);
      }

      // checking weather all the slots are filled for date
      const otherSloat = [];
      if (appoFind.length < 8) {
        appoFind.map((timeSloat) => {
          if (timeSloat.appoTimeSloat == appoTimeSloat) {
            otherSloat.push(timeSloat.appoTimeSloat);
          }
        });

        if (otherSloat != 0) {
          errors.try = `Try to book another sloat for the date : ${appoDate}`;
          return res.status(404).json(errors.try);
        }

        //save data
        function generateAppoId() {
          var digits = "0123456789";
          let appoId = "";
          for (let i = 0; i < 6; i++) {
            appoId += digits[Math.floor(Math.random() * 10)];
          }
          return appoId;
        }

        //calling appoid generating
        const AppoId = await generateAppoId();

        //saving appodata
        const appoData = await Appo.create({
          appoId: AppoId,
          appoDate: appoDate,
          appoTimeSloat: appoTimeSloat,
          doctorID: docData._id,
          paitent: {
            pname: pname,
            gender: gender,
            dob: dob,
            email: email,
            contact: contact,
            msg: msg,
          },
          userID: userID,
        });

        // sending mail to appoinment detail to user
        await sendMailAP(req.user.email, appoData, docData, "APPOINTMENT");

        //success message
        return res
          .status(200)
          .json({ message: "Appoinment Booked Successfully" });
      }
    } catch (err) {
      console.log("Error in adding Paitent Detail", err.message);
      return res
        .status(400)
        .json({ message: `Error in adding Paitent Detail ${err.message}` });
    }
  },

  //--------------------------------------------appo-cancel-clear----------------------------

  appoCancel: async (req, res, next) => {
    try {
      //user id
      const { _id } = req.user;
      //given data
      const { appoId } = req.body;
      //conveting to number
      const appoID = parseInt(appoId);
      //converting the userid to string
      const userID = _id.toString();
      //user appoinment data
      const appoData = await Appo.find({ userID });
      // checking weather the appo data is empty
      if (appoData.length == 0) {
        errors = "No Appoinment data to delete";
        return res.status(400).json(errors);
      }
      // checking weather given appo id is present in appo data
      const appoDataArr = [];
      appoData.map((appo) => {
        if (appo.appoId == appoID) {
          appoDataArr.push(appo);
        }
      });
      //checking weather appoDataArr is empty
      if (appoDataArr.length == 0) {
        errors = "Enter proper AppoID to be deleted";
        return res.status(400).json(errors);
      }
      //delete appoinment
      await Appo.deleteOne({ appoId: appoID });
      return res
        .status(200)
        .json({ message: "Appoinment Cancelled Successfully" });
    } catch (err) {
      console.log("Error in Cancelling appoinment", err.message);
      return res
        .status(400)
        .json({ message: `Error in Cancelling appoinment" ${err.message}` });
    }
  },

  //--------------------------------view-the-appoinment-user-clear---------------------------

  appoView: async (req, res, next) => {
    try {
      const { _id } = req.user;
      //finding the appo detail using the appoinment id.
      const appoData = await Appo.find({ userID: _id });

      if (!appoData) {
        error.appo("No Appoinment record found");
        return res.status(400).json(error.appo);
      }
      // success message
      return res.status(200).json({
        message: [appoData],
      });
    } catch (err) {
      console.log("Error in Viewing appoinment", err.message);
      return res
        .status(400)
        .json({ message: `"Error in Viewing appoinment" ${err.message}` });
    }
  },

  //-------------------------------admin-view-appoinment-clear----------------------------------

  appoAdminView: async (req, res, next) => {
    try {
      const { department } = req.user;
      const { name } = req.body;

      // fething doctor detail using name and department(admin)
      const docData = await Doctor.find({ name, department });
      // cheking wheather doc data is empty or not
      if (!docData) {
        return res.status(400).json({ message: "Doctor Acess Denied" });
      }
      // getting doctor id
      const docID = docData[0]._id;

      //finding the appo detail using the doctor id.
      const appoData = await Appo.find({
        doctorID: docID,
      });

      if (!appoData) {
        return res.status(400).json({ message: "No Appoinment record found" });
      }
      // success message
      return res.status(200).json({
        message: [appoData],
      });
    } catch (err) {
      console.log("Error in Viewing appoinment", err.message);
      return res
        .status(400)
        .json({ message: `"Error in Viewing appoinment" ${err.message}` });
    }
  },
};

//==============================================================================/
