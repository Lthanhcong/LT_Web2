const { DataTypes } = require('sequelize');
const db = require('./db');

const Cineplex = db.define('Cineplex', {
    TenCum: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    DiaChi: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Maps: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
});

module.exports = Cineplex;
