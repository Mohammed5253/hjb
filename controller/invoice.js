import { Router } from "express";
import { authenticate } from "../middleware/authMiddleware";
import Invoice from "../model/Invoice";
import Customer from "../model/customer";

export default ({ config, db }) => {
  let api = Router();

  api.post("/:id", (req, res) => {
    try {
      Customer.findById(req.params.id, (err, customer) => {
        if (err) res.status(500).send(err);

        let newInvoice = new Invoice();
        newInvoice.customer_name = req.body.customer_name;
        newInvoice.address = req.body.address;
        newInvoice.date_send = req.body.date_send;
        newInvoice.sa_no = req.body.sa_no;
        newInvoice.receiver_name = req.body.receiver_name;
        newInvoice.city = req.body.city;
        newInvoice.amount = req.body.amount;
        newInvoice.forklift = req.body.forklift;
        newInvoice.document = req.body.document;
        newInvoice.other_cost = req.body.other_cost;

        newInvoice.save((err, printsa) => {
          if (err) res.send(err);
          customer.sa.push(newInvoice);
          customer.save(err => {
            if (err) res.send(err);
            res.json({ message: "Save", data: printsa });
          });
        });
      });
    } catch (error) {
      res.status(500).send(error);
    }
  });

  api.get("/", (req, res) => {
    try {
      Invoice.find({}, (err, invoice) => {
        if (err) res.status(500).json({ success: false, message: err });
        res.status(200).json({ success: true, data: invoice });
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  });

  //   api.get("/sa/:id", (req, res) => {
  //     try {
  //       Customer.findById(req.params.id, (err, customer) => {
  //         SA.findById(customer.invoice[0], (err, sa) => {
  //           if (err) res.status(500).json({ success: false, message: err });
  //           res.status(200).json({ success: true, data: sa });
  //         });
  //       });
  //     } catch (error) {
  //       res.status(500).json({ success: false, message: error });
  //     }
  //   });

  return api;
};
