import mongoose from "mongoose";

let Schema = mongoose.Schema;

let CustomerSchema = new Schema(
  {
    penerima: { type: String, required: false },
    penerima_alamat: { type: String, required: false },
    penerima_kota: { type: String, required: false },

    updated: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Customer", CustomerSchema);
