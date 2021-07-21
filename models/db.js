const { Sequelize } = require("sequelize");
module.exports = new Sequelize(
  process.env.DATABASE_URL || "postgres://postgres:Lethanhcong2401@localhost:5432/LTWEB2"
);
