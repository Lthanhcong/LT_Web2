const { DataTypes } = require('sequelize');
const db = require('./db');
const Movie = db.define('Movie', {
  Ten: {
    type: DataTypes.STRING,
    allowNull: false
  },
  NgayCongChieu: {
    type: DataTypes.DATE,
    allowNull: false
  },
  Poster: {
    type: DataTypes.STRING,
    allowNull: false
  },
  TraiLers: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ThoiLuong: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  DaoDien: {
    type: DataTypes.STRING,
    allowNull: false
  },
  DienVien: {
    type: DataTypes.STRING,
    allowNull: false
  },
  TheLoai: {
    type: DataTypes.STRING,
    allowNull: false
  },
});

module.exports = Movie