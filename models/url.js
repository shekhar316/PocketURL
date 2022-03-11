const Sequelize = require("sequelize");
const sequelize = require("../utils/database");

const Url = sequelize.define("url", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
  shortid: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
  },
  longURL: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  openCount: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  edate:{
    type: Sequelize.DATEONLY
  }
});

module.exports = Url;