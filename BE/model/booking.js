const { DataTypes } = require('sequelize');
const db = require('./db');
const User = require('./User')
const premiere = require('./premiere')

const Booking = db.define('Booking', {
  MaDatCho: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV1,
    primaryKey: true
  },
  ThoiDiemDatVe: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  TongTien: {
    type: DataTypes.INTEGER,
    allowNull: false
  }

})
Booking.belongsTo(User)
Booking.belongsTo(premiere)
module.exports = Booking