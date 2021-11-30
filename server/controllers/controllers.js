const generateTransactionCode = require("../middleware/createSales");
const { Item, Customer, Sequelize, Sale } = require("../models/index");

class Controller {
  static getAll(req, res) {
    const Op = Sequelize.Op;
    const { nama_item } = req.query;
    let paramQuerySQL = {};

    if (nama_item != "" && typeof nama_item !== "undefined") {
      let querynama_item = {
        nama_item: {
          [Op.iLike]: `%${nama_item}%`,
        },
      };
      paramQuerySQL.where = {
        ...querynama_item,
      };
    }

    Item.findAll(paramQuerySQL)
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(400).json({ message: "Data not found!" });
      });
  }

  static createMenu(req, res) {
    let newMenu = {
      nama_item: req.body.nama_item,
      unit: req.body.unit,
      stok: +req.body.stok,
      harga_satuan: +req.body.harga_satuan,
      barang: req.body.barang,
    };
    Item.create(newMenu)
      .then((result) => {
        res
          .status(201)
          .json({ message: `Menu ${result.nama_item} berhasil dimasukan` });
      })
      .catch((err) => {
        res.status(500).json({ message: "Error" });
      });
  }

  static createCust(req, res) {
    let newCust = {
      nama: req.body.nama,
      contact: +req.body.contact,
      email: req.body.email,
      alamat: req.body.alamat,
      diskon: +req.body.diskon,
      tipe_diskon: req.body.tipe_diskon,
      ktp: req.body.ktp,
    };
    Customer.create(newCust)
      .then((result) => {
        res
          .status(201)
          .json({ message: `Customer ${result.nama} berhasil dimasukan` });
      })
      .catch((err) => {
        res.status(500).json({ message: "Error" });
      });
  }

  static getById(req, res) {
    let id = +req.params.id;
    Item.findByPk(id)
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(400).json({ message: "Data not found!" });
      });
  }
}

module.exports = Controller;
