const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

app.use(express.json());

//middleware
function auth(req, res, next) {
  let token = req.headers["authorization"];
  token = token.split(" ")[1]; // access token

  jwt.verify(token, "access", (err, user) => {
    if (!err) {
      req.user = user;
      next();
    } else {
      return res.json({ message: "user not authorized" }).status(403);
    }
  });

  //genrating new access token
  app.post("/renewAccessToken", (req, res) => {
    const refreshToken = req.body.token;
    if (!refreshToken) {
      return res.json({ message: "user not authorized" }).status(403);
    }

    //checking refresh token
    jwt.verify(refreshToken, "refresh", (err, user) => {
      if (!err) {
        accessToken = jwt.sign({ user: user.name }, "access", {
          expiresIn: "20s",
        });
        return res
          .json({
            accessToken,
          })
          .status(200);
      } else {
        return res.json({ message: "user not authorized" }).status(403);
      }
    });
  });
}

//
app.post("/protected", auth, (req, res) => {
  res.send("inside protected route");
});

//
app.post("/login", (req, res) => {
  const { user } = req.body;

  if (!user) {
    return res.json({ message: "no user" }).status(404);
  }

  let accessToken = jwt.sign(user, "access", { expiresIn: "20s" });
  let refreshToken = jwt.sign(user, "refresh", { expiresIn: "1d" });

  return res
    .json({
      accessToken,
      refreshToken,
    })
    .status(200);
});

//
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server stated ${PORT}`);
});
