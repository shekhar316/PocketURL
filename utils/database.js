const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize( process.env.DBNAME, process.env.DBUSERNAME, process.env.DBPASSWORD, {
  host: 'localhost',
  dialect: "mysql"
});

module.exports = sequelize;