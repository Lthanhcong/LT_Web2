const { DataTypes } = require('sequelize');
const db = require('./db');
const User = db.define('User', {
    Email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    Password: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    Name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Phone: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    UserType: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    TokenUser: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    Verify: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
});

module.exports = User;
