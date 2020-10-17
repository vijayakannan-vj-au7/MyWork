const { model, Schema, ObjectId } = require("mongoose");

const appoSchema = new Schema(
  {
    appoId: {
      type: Number,
      trim: true,
      required: true,
    },
    appoDate: {
      type: String,
      required: true,
    },
    appoTimeSloat: {
      type: String,
      enum: [
        "08:00am-08:30am",
        "09:00am-09:30am",
        "11:00am-11:30am",
        "12:00pm-12:30pm",
        "01:00pm-01:30pm",
        "03:00pm-03:30pm",
        "04:00pm-04:30pm",
        "05:00pm-05:30pm",
      ],
      required: true,
    },
    paitent: {
      pname: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 32,
      },
      email: {
        type: String,
        required: true,
      },
      contact: {
        type: Number,
        required: true,
        minlength: 10,
        maxlength: 10,
      },
      gender: {
        type: String,
        enum: ["male", "female", "Male", "Female"],
        required: true,
      },
      dob: {
        type: String,
        required: true,
      },
      msg: {
        type: String,
        required: true,
      },
    },
    userID: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
    doctorID: {
      type: ObjectId,
      ref: "Doctor",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("Appo", appoSchema);
