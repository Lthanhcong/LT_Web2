const { DataTypes } = require('sequelize');
const db = require('./db');
const Cineplex = require('./cineplex');
const Cinema = db.define("Cinema", {
  TenRap: {
    type: DataTypes.STRING,
    allowNull: false

  },
  LoaiRap: {
    type: DataTypes.STRING,
    allowNull: false
  },
  //MaCum
  KTNgang: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  KTDoc: {
    type: DataTypes.INTEGER,
    allowNull: false
  }

})
Cinema.belongsTo(Cineplex)
module.exports = Cinema