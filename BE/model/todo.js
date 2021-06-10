const { DataTypes } = require('sequelize');
const db =require('./db');
const User=require('./user');

const Todo =db.define('Todo', {

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    done: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
});

Todo.belongsTo(User);
User.hasMany(Todo);

module.exports=Todo;
