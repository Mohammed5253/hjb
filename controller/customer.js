import { Router } from "express";
import Customer from "../model/customer";
import SA from "../model/sa";

export default ({ config, db }) => {
  let api = Router();

  //add customer details
  api.post("/addcustomer", (req, res) => {
    let newCustomer = new Customer();
    newCustomer.penerima = req.body.penerima;
    newCustomer.penerima_alamat = req.body.penerima_alamat;
    newCustomer.penerima_kota = req.body.penerima_kota;
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

  //all customer search list
  api.post("/", (req, res) => {
    try {
      const query = {};
      const regex1 = new RegExp(req.body.search, "i");
      query["penerima"] = regex1;
      Customer.find(query, (err, customer) => {
        if (err) res.json({ success: false, message: err });
        const customerList = customer.reverse();
        res.status(200).json({ success: true, data: customerList });
      });
    } catch (error) {
      res.json({ success: false, message: error });
    }
  });

  api.put("/:id", (req, res) => {
    try {
      Customer.findById(req.params.id, (err, customer) => {
        if (err) res.json({ error: err });
        customer.customername = req.body.customername;
        customer.company = req.body.company;
        customer.address = req.body.address;
        // customer.telephone = req.body.telephone;
        // customer.contactname = req.body.contactname;
        customer.contactnumber = req.body.contactnumber;
        // customer.date_send = req.body.date_send;
        customer.item = req.body.item;
        customer.destination = req.body.destination;
        customer.pickuppoint = req.body.pickuppoint;
        customer.vendor = req.body.vendor;
        customer.noresi = req.body.noresi;
        customer.tglterima = req.body.tglterima;
        customer.hpp = req.body.hpp;
        customer.ongkos = req.body.ongkos;
        customer.amount = req.body.amount;
        customer.forklift = req.body.forklift;
        customer.document = req.body.document;
        customer.other_cost = req.body.other_cost;
        customer.invoice = 1;
        // res.send({ id: customer.invoice_id, invoice: customer.invoice });

        if (customer.invoice_id == 0 && customer.invoice == 0) {
          customer.invoice_id = customer.invoice_id + 1;
        }
        // customer.invoice_id
        customer.save(err => {
          if (err) res.json({ success: false, error: err });

          if (customer.sadata.length > 0) {
            res.json({
              success: true,
              printsa: true,
              data: { id: customer._id },
              message: "Information updated"
            });
          } else {
            res.json({
              success: true,
              printsa: false,
              message: "Information updated"
            });
          }
        });
      });
    } catch (error) {
      res.json({ success: false, error: error });
    }
  });

  //get all invoice
  api.get("/invoice", (req, res) => {
    try {
      Customer.find(
        {
          invoice: 1,
          sa: { $exists: true, $not: { $size: 0 } }
        },
        (err, customer) => {
          if (err) res.json({ success: false, message: err });
          const customerList = customer.reverse();
          res.status(200).json({ success: true, data: customerList });
        }
      );
    } catch (error) {
      res.json({ success: false, message: error });
    }
  });

  //delete customer record
  api.delete("/:id", (req, res) => {
    try {
      Customer.remove({ _id: req.params.id }, (err, customer) => {
        if (err) res.json({ success: false, error: err });
        res.json({
          success: true,
          message: "Customer removed successfully"
        });
      });
    } catch (error) {
      res.status(500).send(error);
    }
  });

  // get all customer list
  api.get("/", (req, res) => {
    try {
      Customer.find({}, (err, data) => {
        if (err) res.status(500).json({ success: false, message: err });
        const customer = data.reverse();
        res.status(200).json({ success: true, data: customer });
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  });

  //search
  api.post("/search", (req, res) => {
    try {
      const query = {};
      if (req.body.searchterm == "pengirim" && req.body.search != "") {
        const regex = new RegExp(req.body.search, "i");
        query["pengirim"] = regex;
      } else if (req.body.searchterm == "sa_hjb") {
        const regex1 = new RegExp(req.body.search, "i");
        query["sanumber"] = regex1;
      } else if (req.body.searchterm == "penerima") {
        const regex2 = new RegExp(req.body.search, "i");
        query["penerima"] = regex2;
      } else if (req.body.searchterm == "tgl_ambil") {
        const regex3 = new RegExp(req.body.search, "i");
        query["tgl_ambil"] = regex3;
      } else {
        const regex4 = new RegExp(req.body.search, "i");
        query["tgl_kirim"] = regex4;
      }

      // res.json({ data: query });

      SA.find(query, (err, customer) => {
        if (err) res.json({ success: false, message: err });
        const customerList = customer.reverse();
        res.status(200).json({ success: true, data: customerList });
      });
    } catch (error) {
      res.json({ success: false, message: error });
    }
  });
  return api;
};
