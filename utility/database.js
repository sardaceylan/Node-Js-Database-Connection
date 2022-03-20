const Sequelize = require("sequelize");

const sequelize = new Sequelize("products", "x", "y", {
  host: "localhost",
  port: 5432,
  dialect: "postgres",
  logging: false,
});

module.exports = sequelize;
