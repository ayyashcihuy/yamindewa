const { Item } = require("../models/index");

class Controller {
  static getAll(req, res) {
    res.send("Hello World");
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
        console.log(err);
      });
  }
}

module.exports = Controller;
