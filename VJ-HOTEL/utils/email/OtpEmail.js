const { mailTransport } = require("../../config/emailconfig");

module.exports = {
  async sendOtp(email, otp) {
    try {
      await mailTransport.sendMail({
        from: "-----------------",
        to: email,
        subject: `VJ Hotel - Verify your email address`,
        text: `Your OTP Code for signing into JLPT Online Application Exam is ${otp}.`,
      });
      return otp;
    } catch (err) {
      console.log(err.message);
      return res.json({ message: err.message });
    }
  },
};
