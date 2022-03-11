const Sequelize = require("sequelize");
const sequelize = require("../utils/database");

const Transaction = sequelize.define("transaction", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
  invoiceID: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
  },
  rzp_orderID: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  rzp_payID: {
    type: Sequelize.STRING,
    allowNull: false
  },
  rzp_signature: {
    type: Sequelize.STRING,
    allowNull: false
  },
  amount: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
});

module.exports = Transaction;