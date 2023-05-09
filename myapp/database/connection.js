const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("database_orenda", "postgres", "admin", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;
