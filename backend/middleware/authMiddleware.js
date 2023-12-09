const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const authMiddleWare = (req, res, next) => {
  let token = req.headers.token;
  if (token) {
    token = token.split(" ")[1];
    jwt.verify(token, process.env.ACCESS_TOKEN, function (err, user) {
      if (err) {
        return res.status(404).json({
          message: "The token is not match",
          status: "ERROR",
        });
      }
      if (user?.isAdmin) {
        next();
      } else {
        return res.status(404).json({
          message: "Can't identify user info in token",
          status: "ERROR",
        });
      }
    });
  } else {
    return res.status(404).json({
      message: "Missing token",
      status: "ERROR",
    });
  }
};

const authUserMiddleWare = (req, res, next) => {
  let token = req.headers.token;
  const userId = req.params.id;
  if (token) {
    token = token.split(" ")[1];
    jwt.verify(token, process.env.ACCESS_TOKEN, function (err, user) {
      if (err) {
        return res.status(404).json({
          message: "The token is not match",
          status: "ERROR",
        });
      }
      if (user?.isAdmin || user?.id === userId) {
        next();
      } else {
        return res.status(404).json({
          message: "Can't identify user info in token",
          status: "ERROR",
        });
      }
    });
  } else {
    return res.status(404).json({
      message: "Missing token",
      status: "ERROR",
    });
  }
};

module.exports = {
  authMiddleWare,
  authUserMiddleWare,
};
