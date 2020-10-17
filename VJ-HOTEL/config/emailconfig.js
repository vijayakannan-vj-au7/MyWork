const nodemailer = require("nodemailer");

const transportOptions = {
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  debug: "development",
  auth: {
    user: "youremail",
    pass: "emailsecretkey",
  },
};

const mailTransport = nodemailer.createTransport(transportOptions);

module.exports = {
  mailTransport,
};
