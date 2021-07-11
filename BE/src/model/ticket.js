const { DataTypes } = require('sequelize');
const db = require('./db');
const Booking = require('./booking');

const Ticket = db.define('Ticket', {
    MaVe: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
    },
    MaGhe: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    DiaChiNgang: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    DiaChiDoc: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    GiaTien: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

Ticket.belongsTo(Booking);
module.exports = Ticket;
