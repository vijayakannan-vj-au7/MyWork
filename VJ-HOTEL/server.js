const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const path = require("path");

require("./config/dbconfig");

// Customer Router
const Credentialsrouter = require("./router/customerRouter/Credentialsrouter");
const Searchrouter = require("./router/customerRouter/Searchrouter");
const Hotelrouter = require("./router/customerRouter/Detailsrouter");
const Bookingrouter = require("./router/customerRouter/Bookingrouter");
const Reviewrouter = require("./router/customerRouter/Reviewrouter");

// Business Router
const BCredentialsrouter = require("./router/businessRouter/Credentialsrouter");
const BHomerouter = require("./router/businessRouter/Homerouter");
const BRoomrouter = require("./router/businessRouter/Roomrouter");
const BBookingrouter = require("./router/businessRouter/Bookingrouter");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyparser.json());
app.use(cors());

// Customer Router
app.use(Credentialsrouter);
app.use(Searchrouter);
app.use(Hotelrouter);
app.use(Bookingrouter);
app.use(Reviewrouter);

// Business Router
app.use(BCredentialsrouter);
app.use(BHomerouter);
app.use(BRoomrouter);
app.use(BBookingrouter);

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`);
});
