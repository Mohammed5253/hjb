import jwt from "jsonwebtoken";
import expressJwt from "express-jwt";

const TOKENTIME = 60 * 60 * 24 * 30; //30 days
const SECRET = "w3 Hav3 th3 kn0w h0w"; //Anything but someting unique

let authenticate = expressJwt({ secret: SECRET });

let generateAccessToken = (req, res, next) => {
  req.token = req.token || {};
  req.token = jwt.sign(
    {
      id: req.user.id
    },
    SECRET,
    {
      expiresIn: TOKENTIME
    }
  );
  next();
};

let respond = (req, res) => {
  // user: req.user,
  res.status(200).json({
    token: req.token
  });
};

module.exports = { authenticate, generateAccessToken, respond };
