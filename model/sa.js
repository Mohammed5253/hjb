import mongoose from "mongoose";
let Schema = mongoose.Schema;

let SaSchema = new Schema(
  {
    sanumber: { type: String, required: [false, "sa number required"] },
    notruck: { type: String, required: false },
    sopir: { type: String, required: false },
    pengirim: { type: String, required: false },
    penerima: { type: String, required: false },

    //
    pengirim_alamat: { type: String, required: false },
    penerima_alamat: { type: String, required: false },

    //
    pengirim_kota: { type: String, required: false },
    penerima_kota: { type: String, required: false },

    //
    total_jumlah: { type: String, required: false },

    tgl_diambil: { type: String, required: false },
    tgl_dikirim: { type: String, required: false },
    tgl_terima: { type: String, required: false }, // not required for first

    lead_time: { type: String, required: false },
    // additional fields
    tgl_ambil: { type: String, required: false },
    sj_denso: { type: String, required: false },
    tt_hjb: { type: String, required: false },
    jenis_barang: { type: String, required: false },
    jumlah_barang: { type: String, required: false },
    // packing: { type: String, required: false },
    tgl_kirim: { type: String, required: false },
    // additional invoice
    m3: { type: String, required: false },
    kg: { type: String, required: false },
    kuli: { type: String, required: false },
    forklift: { type: String, required: false },
    packing: { type: String, required: false },
    route: { type: String, required: false },
    harga: { type: String, required: false },
    total_harga: { type: String, required: false },

    //1
    jumlah1: { type: String, required: false },
    colly1: { type: String, required: false },
    jenis_barang1: { type: String, required: false },
    no_sjd1: { type: String, required: false },
    no_ttd1: { type: String, required: false },
    ket1: { type: String, required: false },
    berat_kg1: { type: String, required: false },
    m31: { type: String, required: false },

    //2
    jumlah2: { type: String, required: false },
    colly2: { type: String, required: false },
    jenis_barang2: { type: String, required: false },
    no_sjd2: { type: String, required: false },
    no_ttd2: { type: String, required: false },
    ket2: { type: String, required: false },
    berat_kg2: { type: String, required: false },
    m32: { type: String, required: false },

    //3
    jumlah3: { type: String, required: false },
    colly3: { type: String, required: false },
    jenis_barang3: { type: String, required: false },
    no_sjd3: { type: String, required: false },
    no_ttd3: { type: String, required: false },
    ket3: { type: String, required: false },
    berat_kg3: { type: String, required: false },
    m33: { type: String, required: false },

    //4
    jumlah4: { type: String, required: false },
    colly4: { type: String, required: false },
    jenis_barang4: { type: String, required: false },
    no_sjd4: { type: String, required: false },
    no_ttd4: { type: String, required: false },
    ket4: { type: String, required: false },
    berat_kg4: { type: String, required: false },
    m34: { type: String, required: false },

    //5
    jumlah5: { type: String, required: false },
    colly5: { type: String, required: false },
    jenis_barang5: { type: String, required: false },
    no_sjd5: { type: String, required: false },
    no_ttd5: { type: String, required: false },
    ket5: { type: String, required: false },
    berat_kg5: { type: String, required: false },
    m35: { type: String, required: false },

    // sa additional details
    sa_gabungan: { type: String, required: false },
    sub_cont: { type: String, required: false },
    hpp_ongkos_jkt: { type: String, required: false },
    hpp_ongkos_oper: { type: String, required: false },
    hpp_no_kapal: { type: String, required: false },
    hpp_colly: { type: String, required: false },
    hpp_kg: { type: String, required: false },
    hpp_m3: { type: String, required: false },
    hpp_no_resi: { type: String, required: false },
    hpp_harga: { type: String, required: false },
    dns_m3: { type: String, required: false },
    dns_kg: { type: String, required: false },
    dns_route: { type: String, required: false },
    dns_d: { type: String, required: false },
    dns_f: { type: String, required: false },
    dns_p: { type: String, required: false },
    dns_satuan: { type: String, required: false },
    dns_harga: { type: String, required: false },
    add_tgl_terima: { type: String, required: false },
    remark: { type: String, required: false },
    standar_hjb: { type: String, required: false },

    // invoice
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
    route_rp: { type: String, required: false },
    route_val: { type: String, required: false },

    updated: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

module.exports = mongoose.model("SA", SaSchema);
