import mongoose from "mongoose";
let Schema = mongoose.Schema;

let InvoiceSchema = new Schema(
  {
    // invoice_id: { type: Number, default: 0, auto: true },
    // customer_name: { type: String, required: false },
    // address: { type: String, required: false },
    // date_send: { type: String, required: false },
    // sa_no: { type: String, required: true },
    // receiver_name: { type: String, required: false },
    // city: { type: String, required: false },
    // amount: { type: String, required: false },
    // forklift: { type: String, required: false },
    // document: { type: String, required: false },
    // other_cost: { type: String, required: false },

    penerima: { type: String, required: false },
    penerima_kota: { type: String, required: false },
    pengirim: { type: String, required: false },
    pengirim_kota: { type: String, required: false },
    sanumber: { type: String, required: false },
    tangal: { type: String, required: false },

    tangal: { type: String, required: false },
    kg_rp: { type: String, required: false },
    kg_val: { type: String, required: false },
    forklift_rp: { type: String, required: false },
    forklift_val: { type: String, required: false },
    kuli_rp: { type: String, required: false },
    kuli_val: { type: String, required: false },
    m3_rp: { type: String, required: false },
    m3_val: { type: String, required: false },
    packing_rp: { type: String, required: false },
    packing_val: { type: String, required: false },
    admin_rp: { type: String, required: false },
    admin_val: { type: String, required: false },

    updated: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Invoice", InvoiceSchema);
