const fs = require("fs");
const json2xls = require("json2xls");

//model
const User = require("../model/user");

module.exports = {
  //-----------------------------------adding the user data--------------------------------------
  async addUserData(req, res) {
    try {
      const userData = req.body;
      console.log(userData);
      if (userData) {
        await User.create({ ...userData });
        res.json({ message: "User data added successfully" }).status(200);
      } else {
        res.json({ message: "Empty Request" }).status(400);
      }
    } catch (err) {
      res.json({ message: "Error in adding User data" }).status(400);
    }
  },

  //------------------------------------convetiing to excel file---------------------------------

  async convertData(req, res) {
    try {
      const filename = "sample.xlsx";
      //user data
      const userData = await User.find().select([
        "name",
        "age",
        "city",
        "state",
        "education",
      ]);

      const allUser = [];

      await userData.map((data) => {
        allUser.push(data._doc);
      });

      //conveting to excel
      const xls = json2xls(allUser);
      fs.writeFileSync(filename, xls, "binary", (err) => {
        if (err) {
          console.log("writeFileSync :", err);
        }
      });
      res.json({ message: `Excel file saved ${filename}` });
    } catch (err) {
      res.json({ message: "Error in Converting the into Excel" }).status(400);
    }
  },
};
