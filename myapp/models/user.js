const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(
  "database_orenda", // database name
  "postgres", // database username
  "admin", // database password
  {
    dialect: "postgres",
    host: "localhost",
    port: 5432,
  }
);
const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = User;
