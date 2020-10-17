//Nodemailer
const sendMailFB = require("../utils/publicNodemailer");

//Validation
const validateFeedbackInput = require("../validation/feedback");

module.exports = {
  //------------------------------------feedback-clear-------------------------------------

  feedback: async (req, res, next) => {
    try {
      //form validation
      const { errors, isValid } = validateFeedbackInput(req.body);
      if (!isValid) {
        return res.status(400).json(errors);
      }
      // data from the form is stored in feedback
      const feedback = req.body;
      //sending feedback mail in nodemailer
      await sendMailFB(feedback, "FEEDBACK");
      //success message
      res.status(200).json({ message: "Thank you for Feedback" });
    } catch (err) {
      console.log("Error in sending feedback message", err.message);
      return res
        .status(400)
        .json({ message: `Error in  sending feedback message ${err.message}` });
    }
  },
};

//--------------------------------------------------------------------------------------
