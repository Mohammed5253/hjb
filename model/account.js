import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

let Schema = mongoose.Schema;

let Account = new Schema(
  {
    username: String,
    password: String,
    role: { type: String, default: 2 }
  },
  { timestamps: true }
);

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model("Account", Account);
