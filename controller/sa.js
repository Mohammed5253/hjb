import { Router } from "express";
import { authenticate } from "../middleware/authMiddleware";
import SA from "../model/sa";

export default ({ config, db }) => {
  let api = Router();

  api.put("/:id", (req, res) => {
    try {
      SA.findById(req.params.id, (err, sa) => {
        if (err) res.json({ error: err });

        // sa.jenis_barang = req.body.jenis_barang;
        // sa.jumlah_barang = req.body.jumlah_barang;

        // old
        sa.sa_gabungan = req.body.sa_gabungan;
        sa.sub_cont = req.body.sub_cont;
        sa.hpp_ongkos_jkt = req.body.hpp_ongkos_jkt;
        sa.hpp_ongkos_oper = req.body.hpp_ongkos_oper;
        sa.hpp_no_kapal = req.body.hpp_no_kapal;
        sa.hpp_colly = req.body.hpp_colly;
        sa.hpp_kg = req.body.hpp_kg;
        sa.hpp_m3 = req.body.hpp_m3;
        sa.hpp_no_resi = req.body.hpp_no_resi;
        sa.hpp_harga = req.body.hpp_harga;
        sa.dns_m3 = req.body.dns_m3;
        sa.dns_kg = req.body.dns_kg;
        sa.dns_route = req.body.dns_route;
        sa.dns_d = req.body.dns_d;
        sa.dns_f = req.body.dns_f;
        sa.dns_p = req.body.dns_p;
        sa.dns_satuan = req.body.dns_satuan;
        sa.dns_harga = req.body.dns_harga;
        sa.add_tgl_terima = req.body.add_tgl_terima;
        sa.remark = req.body.remark;
        sa.standar_hjb = req.body.standar_hjb;

        sa.save((err, sadata) => {
          if (err) res.json({ error: err });
          res.json({ success: true, message: "Save", data: sadata });
        });
      });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  });

  api.post("/add", (req, res) => {
    let CustomerNew = new SA();
    // CustomerNew.customername = req.body.customername;
    CustomerNew.sanumber = req.body.sanumber;
    CustomerNew.notruck = req.body.notruck;
    CustomerNew.sopir = req.body.sopir;

    CustomerNew.pengirim = req.body.pengirim;
    CustomerNew.penerima = req.body.penerima;

    CustomerNew.pengirim_alamat = req.body.pengirim_alamat;
    CustomerNew.penerima_alamat = req.body.penerima_alamat;

    CustomerNew.pengirim_kota = req.body.pengirim_kota;
    CustomerNew.penerima_kota = req.body.penerima_kota;

    CustomerNew.tgl_ambil = req.body.tgl_ambil;
    CustomerNew.tgl_kirim = req.body.tgl_kirim;
    CustomerNew.tgl_terima = req.body.tgl_terima;

    CustomerNew.lead_time = req.body.lead_time;
    //calculation
    CustomerNew.sj_denso = req.body.sj_denso;
    CustomerNew.tt_hjb = req.body.tt_hjb;

    // 1
    CustomerNew.jumlah1 = req.body.jumlah1;
    CustomerNew.colly1 = req.body.colly1;
    CustomerNew.jenis_barang1 = req.body.jenis_barang1;
    CustomerNew.no_sjd1 = req.body.no_sjd1;
    CustomerNew.no_ttd1 = req.body.no_ttd1;
    CustomerNew.ket1 = req.body.ket1;
    CustomerNew.berat_kg1 = req.body.berat_kg1;
    CustomerNew.m31 = req.body.m31;

    //2
    CustomerNew.jumlah2 = req.body.jumlah2;
    CustomerNew.colly2 = req.body.colly2;
    CustomerNew.jenis_barang2 = req.body.jenis_barang2;
    CustomerNew.no_sjd2 = req.body.no_sjd2;
    CustomerNew.no_ttd2 = req.body.no_ttd2;
    CustomerNew.ket2 = req.body.ket2;
    CustomerNew.berat_kg2 = req.body.berat_kg2;
    CustomerNew.m32 = req.body.m32;

    //3
    CustomerNew.jumlah3 = req.body.jumlah3;
    CustomerNew.colly3 = req.body.colly3;
    CustomerNew.jenis_barang3 = req.body.jenis_barang3;
    CustomerNew.no_sjd3 = req.body.no_sjd3;
    CustomerNew.no_ttd3 = req.body.no_ttd3;
    CustomerNew.ket3 = req.body.ket3;
    CustomerNew.berat_kg3 = req.body.berat_kg3;
    CustomerNew.m33 = req.body.m33;

    //4
    CustomerNew.jumlah4 = req.body.jumlah4;
    CustomerNew.colly4 = req.body.colly4;
    CustomerNew.jenis_barang4 = req.body.jenis_barang4;
    CustomerNew.no_sjd4 = req.body.no_sjd4;
    CustomerNew.no_ttd4 = req.body.no_ttd4;
    CustomerNew.ket4 = req.body.ket4;
    CustomerNew.berat_kg4 = req.body.berat_kg4;
    CustomerNew.m34 = req.body.m34;

    //5
    CustomerNew.jumlah5 = req.body.jumlah5;
    CustomerNew.colly5 = req.body.colly5;
    CustomerNew.jenis_barang5 = req.body.jenis_barang5;
    CustomerNew.no_sjd5 = req.body.no_sjd5;
    CustomerNew.no_ttd5 = req.body.no_ttd5;
    CustomerNew.ket5 = req.body.ket5;
    CustomerNew.berat_kg5 = req.body.berat_kg5;
    CustomerNew.m35 = req.body.m35;

    CustomerNew.lead_time = req.body.lead_time;
    CustomerNew.jumlah_barang = req.body.jumlah_barang;

    try {
      CustomerNew.save((err, cust) => {
        if (err) res.status(200).json({ success: false, message: err });
        res.status(200).json({
          success: true,
          message: "New Customer Saved Successfully",
          data: cust
        });
      });
    } catch (error) {
      res.status(200).json({ success: false, message: error });
    }
  });

  // use put for SA
  api.put("/sadata/:id", (req, res) => {
    try {
      SA.findById(req.params.id, (err, CustomerNew) => {
        if (err) res.json({ error: err });
        CustomerNew.sanumber = req.body.sanumber;
        CustomerNew.notruck = req.body.notruck;
        CustomerNew.sopir = req.body.sopir;

        CustomerNew.pengirim = req.body.pengirim;
        CustomerNew.penerima = req.body.penerima;

        CustomerNew.pengirim_alamat = req.body.pengirim_alamat;
        CustomerNew.penerima_alamat = req.body.penerima_alamat;

        CustomerNew.pengirim_kota = req.body.pengirim_kota;
        CustomerNew.penerima_kota = req.body.penerima_kota;

        CustomerNew.tgl_ambil = req.body.tgl_ambil;
        CustomerNew.tgl_kirim = req.body.tgl_kirim;
        CustomerNew.tgl_terima = req.body.tgl_terima;

        CustomerNew.lead_time = req.body.lead_time;
        CustomerNew.jumlah_barang = req.body.jumlah_barang;

        // 1
        CustomerNew.jumlah1 = req.body.jumlah1;
        CustomerNew.colly1 = req.body.colly1;
        CustomerNew.jenis_barang1 = req.body.jenis_barang1;
        CustomerNew.no_sjd1 = req.body.no_sjd1;
        CustomerNew.no_ttd1 = req.body.no_ttd1;
        CustomerNew.ket1 = req.body.ket1;
        CustomerNew.berat_kg1 = req.body.berat_kg1;
        CustomerNew.m31 = req.body.m31;

        //2
        CustomerNew.jumlah2 = req.body.jumlah2;
        CustomerNew.colly2 = req.body.colly2;
        CustomerNew.jenis_barang2 = req.body.jenis_barang2;
        CustomerNew.no_sjd2 = req.body.no_sjd2;
        CustomerNew.no_ttd2 = req.body.no_ttd2;
        CustomerNew.ket2 = req.body.ket2;
        CustomerNew.berat_kg2 = req.body.berat_kg2;
        CustomerNew.m32 = req.body.m32;

        //3
        CustomerNew.jumlah3 = req.body.jumlah3;
        CustomerNew.colly3 = req.body.colly3;
        CustomerNew.jenis_barang3 = req.body.jenis_barang3;
        CustomerNew.no_sjd3 = req.body.no_sjd3;
        CustomerNew.no_ttd3 = req.body.no_ttd3;
        CustomerNew.ket3 = req.body.ket3;
        CustomerNew.berat_kg3 = req.body.berat_kg3;
        CustomerNew.m33 = req.body.m33;

        //4
        CustomerNew.jumlah4 = req.body.jumlah4;
        CustomerNew.colly4 = req.body.colly4;
        CustomerNew.jenis_barang4 = req.body.jenis_barang4;
        CustomerNew.no_sjd4 = req.body.no_sjd4;
        CustomerNew.no_ttd4 = req.body.no_ttd4;
        CustomerNew.ket4 = req.body.ket4;
        CustomerNew.berat_kg4 = req.body.berat_kg4;
        CustomerNew.m34 = req.body.m34;

        //5
        CustomerNew.jumlah5 = req.body.jumlah5;
        CustomerNew.colly5 = req.body.colly5;
        CustomerNew.jenis_barang5 = req.body.jenis_barang5;
        CustomerNew.no_sjd5 = req.body.no_sjd5;
        CustomerNew.no_ttd5 = req.body.no_ttd5;
        CustomerNew.ket5 = req.body.ket5;
        CustomerNew.berat_kg5 = req.body.berat_kg5;
        CustomerNew.m35 = req.body.m35;

        CustomerNew.save((err, sadata) => {
          if (err) res.json({ error: err });
          res.json({ success: true, message: "Save", data: CustomerNew });
        });
      });
    } catch (error) {
      res.status(200).json({ success: false, message: error });
    }
  });

  // get all
  api.get("/", (req, res) => {
    try {
      SA.find({}, (err, sa) => {
        if (err) res.status(500).json({ success: false, message: err });
        const saList = sa.reverse();
        res.status(200).json({ success: true, data: saList });
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  });

  // get one by sa data
  api.get("/customer/:id", (req, res) => {
    try {
      SA.findById(req.params.id, (err, sadata) => {
        // res.send(customer.sa[0]);
        res.status(200).json({ success: true, data: sadata });
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  });

  //get doc by own id
  api.get("/sadata/:id", (req, res) => {
    try {
      // res.send(customer.sa[0]);
      SA.findById(req.params.id, (err, printsa) => {
        if (err) res.status(500).json({ success: false, message: err });

        res.status(200).json({ success: true, data: printsa });
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  });

  api.get("/print/:id", (req, res) => {
    try {
      SA.findById(req.params.id, (err, allsadata) => {
        res.status(200).json({
          success: true,
          data: allsadata
        });
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  });
  // delete sa

  api.delete("/:id", (req, res) => {
    try {
      SA.remove({ _id: req.params.id }, (err, customer) => {
        if (err) res.json({ success: false, error: err });
        res.json({
          success: true,
          message: "SA removed successfully"
        });
      });
    } catch (error) {
      res.status(500).send(error);
    }
  });

  // invoice
  api.put("/invoice/:id", (req, res) => {
    try {
      SA.findById(req.params.id, (err, sa) => {
        if (err) res.json({ error: err });

        sa.tangal = req.body.tangal;
        sa.kg_rp = req.body.kg_rp;
        sa.kg_val = req.body.kg_val;

        sa.forklift_rp = req.body.forklift_rp;
        sa.forklift_val = req.body.forklift_val;
        sa.kuli_rp = req.body.kuli_rp;
        sa.kuli_val = req.body.kuli_val;
        sa.m3_rp = req.body.m3_rp;
        sa.m3_val = req.body.m3_val;

        sa.packing_rp = req.body.packing_rp;
        sa.packing_val = req.body.packing_val;
        sa.route_rp = req.body.route_rp;
        sa.route_val = req.body.route_val;

        sa.route = req.body.route;
        sa.kg = req.body.kg;
        sa.forklift = req.body.forklift;
        sa.kuli = req.body.kuli;
        sa.m3 = req.body.m3;
        sa.packing = req.body.packing;
        sa.total_harga = req.body.total_harga;

        sa.save((err, invoicedata) => {
          if (err) res.json({ error: err });
          res.json({ success: true, message: "Save", data: invoicedata });
        });
      });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  });

  return api;
};
