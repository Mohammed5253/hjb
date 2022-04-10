import { Router } from "express";
import passport from "passport";
import Account from "../model/account"; // schmea

import jwt from "jsonwebtoken"; //jwt
import { authenticate } from "../middleware/authMiddleware";

import Customer from "../model/customer";
//mailers
// import nodemailer from "nodemailer";

let TOKENTIME = 60 * 60 * 24 * 30; //30 days
let SECRET = "w3 Hav3 th3 kn0w h0w"; //Anything but someting unique

export default ({ config, db }) => {
  let api = Router();

  // let transporter = nodemailer.createTransport({
  //   service: "gmail",
  //   host: "smtp.gmail.com",
  //   port: 465,
  //   auth: {
  //     user: "nsagdeo@gmail.com",
  //     pass: "121312312"
  //   }
  // });

  // 'v1/account'
  //  const ip = req.connection.remoteAddress; for getting ip address
  api.post("/register", (req, res) => {
    try {
      Account.register(
        new Account({ username: req.body.email }),
        req.body.password,
        (err, account) => {
          if (err) res.status(200).json({ success: false, error: err });
          passport.authenticate("local", { session: false })(req, res, () => {
            res.status(200).json({
              success: true,
              message: "Successfully created new account"
            });
          });
        }
      );
    } catch (error) {
      res
        .status(200)
        .json({ success: false, message: "Error while createing user" });
    }
  });

  api.post("/addcustomer", (req, res) => {
    let newCustomer = new Customer();
    newCustomer.customername = req.body.customername;
    newCustomer.company = req.body.company;
    newCustomer.address = req.body.address;
    newCustomer.item = req.body.item;
    newCustomer.destination = req.body.destination;
    newCustomer.pickuppoint = req.body.pickuppoint;

    try {
      newCustomer.save(err => {
        if (err) res.status(200).json({ success: false, message: err });
        res
          .status(200)
          .json({ success: true, message: "New Customer Saved Successfully" });
      });
    } catch (error) {
      res.status(200).json({ success: false, message: error });
    }
  });

  api.post("/login", (req, res) => {
    if (!req.body.email) {
      res
        .status(200)
        .json({ success: false, message: "Username was not given" });
    } else {
      if (!req.body.password) {
        res.json({ success: false, message: "Password was not given" });
      } else {
        passport.authenticate("local", function(error, user, info) {
          if (error) res.json({ success: false, message: error });
          if (!user)
            res
              .status(200)
              .json({ success: false, message: "user or password incorrect" });

          req.login(user, err => {
            if (err) res.status(200).json({ success: false, message: err });
            let token = jwt.sign({ user: user }, SECRET, {
              expiresIn: TOKENTIME
            });
            res.json({ success: true, token: token, role: user.role });
          });
        })(req, res);
      }
    }
  });

  // 'v1/account/logout'
  api.get("/logout", authenticate, (req, res) => {
    res.logout();
    res.status(200).json({ success: true, message: "Successfully Logout" });
  });

  api.get("/alluser", (req, res) => {
    try {
      Account.find({ role: 2 }, (err, users) => {
        if (err) res.json({ success: false, message: err });
        const userList = users.reverse();
        res.status(200).json({ success: true, data: userList });
        // res.end();
      });
    } catch (error) {
      res.json({ success: false, message: error });
      // res.end();
    }
  });

  api.delete("/:id", (req, res) => {
    try {
      Account.remove({ _id: req.params.id }, (err, account) => {
        if (err) res.json({ success: false, error: err });
        res.status(200).json({
          success: true,
          message: "Account deleted successfully"
        });
      });
      // res.end();
    } catch (error) {
      res.status(500).json({ success: false, error: error });
      // res.end();
    }
  });

  // api.get("/me", authenticate, (req, res) => {
  //   res.status(200).json(req.user);
  // });

  // api.post("/sendmail", async(req, res) =>{
  //   const resp = await Account.find({ where: { username: req.body.email } });

  //   if (resp) {
  //     res.json({ msg: resp });
  //   } else {
  //     res.json({ msg: "FURTHER OPERATION" });
  //   }

  //   Account.find({ username: req.body.email }, (err, data) => {
  //     if (err) {
  //       res.json({ message: "Email is not in our database" });
  //     } else {
  //       res.json({ message: data });
  //   const token = "1212121";
  //   const mailOptions = {
  //     to: req.body.email,
  //     from: "testmail@gmail.com",
  //     template: "forgot-password-email",
  //     subject: "Password help has arrived!",
  //     html: `<h1>RESET PASSWORD</h1><br><a href=http://google.com/token=${token}>CLICK HERE</a>`
  //   };

  //   transporter.sendMail(mailOptions, (error, info) => {
  //     if (error) res.send("ERROR " + error);
  //     res.json(info);
  //   });
  //   }
  //   });

  // });

  return api;
};
