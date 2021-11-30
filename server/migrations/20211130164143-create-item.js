"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Items", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nama_item: {
        type: Sequelize.STRING,
      },
      unit: {
        type: Sequelize.STRING,
      },
      stok: {
        type: Sequelize.INTEGER,
      },
      harga_satuan: {
        type: Sequelize.INTEGER,
      },
      barang: {
        type: Sequelize.STRING,
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
    return queryInterface.dropTable("Items");
  },
};
