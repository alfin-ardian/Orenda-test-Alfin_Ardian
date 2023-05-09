const Sequelize = require("sequelize");
const sequelize = new Sequelize("database_orenda", "postgres", "admin", {
  dialect: "postgres",
  host: "localhost",
  port: 5432,
  logging: false,
});

module.exports = sequelize;
