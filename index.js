import http from "http";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
// import mongoose from "mongoose";

//Auth
import passport from "passport";
const LocalStrategy = require("passport-local").Strategy;

//Other conf
import config from "./config";
import routes from "./routes";

let app = express();
app.server = http.createServer(app);

//middlewares
//parse application/json
app.use(bodyParser.json({ limit: config.bodyLimit }));
app.use(cors());
//passport config
app.use(passport.initialize());
let Account = require("./model/account");

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  next();
});

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password"
    },
    Account.authenticate()
  )
);

passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

//api routes v1
app.use("/v1", routes);

app.server.listen(config.port);

console.log(`Started port ${app.server.address().port} `);

export default app;
