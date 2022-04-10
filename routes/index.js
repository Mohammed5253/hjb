import express from "express";
import config from "../config";
import middleware from "../middleware";

import initializeDb from "../db";

import account from "../controller/account";
import customer from "../controller/customer";
import sa from "../controller/sa";
// import invoice from "../controller/invoice";

let router = express();

//connect to db
initializeDb(db => {
  //internal middleware
  router.use(middleware({ config, db }));

  router.use("/account", account({ config, db })); //registration login
  router.use("/customer", customer({ config, db }));
  router.use("/sa", sa({ config, db }));
  // router.use("/invoice", invoice({ config, db }));
});

export default router;
