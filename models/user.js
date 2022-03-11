const Sequelize = require("sequelize");
const sequelize = require("../utils/database");

const User = sequelize.define("user", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  googleID: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
  },
  thumbnail: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  role: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
});

module.exports = User;