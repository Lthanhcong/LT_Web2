const { DataTypes } = require('sequelize');
const db = require('./db');
const Movie = require('./movie');
const Cinema = require('./cinema');

const Premiere = db.define('Premiere', {
    ThoiDiemBatDau: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    ThoiDiemKetThuc: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    GiaVe: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
});

Premiere.belongsTo(Movie);
Premiere.belongsTo(Cinema);

module.exports = Premiere;
