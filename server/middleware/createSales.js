const { Item, Customer, Sequelize } = require("../models/index");

function generateTransactionCode() {
  return Math.floor(Math.random() * Date.now());
}

function getDataSale(qty, promoCode, harga_satuan) {
  const nama = promoCode;
  Customer.findAll({
    where: {
      nama,
    },
  })
    .then((result) => {
      const diskon = result[0].diskon;
      const harga = +harga_satuan * +qty;
      const bayar = harga - diskon;
      if (result) {
        const newSaleDisc = {
          kode_transaksi: generateTransactionCode(),
          qty,
          total_diskon: diskon,
          total_harga: harga,
          total_bayar: bayar,
        };
        console.log(newSaleDisc);
        return newSaleDisc;
      } else {
        const newSaleNoDisc = {
          kode_transaksi: generateTransactionCode(),
          qty,
          total_diskon: 0,
          total_harga: harga,
          total_bayar: bayar,
        };
        console.log(newSaleNoDisc);
        return newSaleNoDisc;
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = generateTransactionCode;
