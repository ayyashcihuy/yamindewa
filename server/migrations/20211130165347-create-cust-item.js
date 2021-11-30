"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("CustItems", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      CustomerId: {
        type: Sequelize.INTEGER,
        refrences: {
          model: "Customers",
          key: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
      ItemId: {
        type: Sequelize.INTEGER,
        refrences: {
          model: "Items",
          key: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
      kode_transaksi: {
        type: Sequelize.INTEGER,
      },
      qty: {
        type: Sequelize.INTEGER,
      },
      total_diskon: {
        type: Sequelize.INTEGER,
      },
      total_harga: {
        type: Sequelize.INTEGER,
      },
      total_bayar: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("CustItems");
  },
};
