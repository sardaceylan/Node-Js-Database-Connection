const Sequelize = require("sequelize");

const sequelize = new Sequelize("dev", "Arda", "TuReNG_?2486", {
  host: "localhost",
  port: 5432,
  dialect: "postgres",
  logging: false,
});

module.exports = sequelize;
