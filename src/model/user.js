const { DataTypes } = require('sequelize');
const db =require('./db');
const User =db.define('User', {

    displayname:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
});
    
User.findByEmail= async function(email)
{
  return User.findOne({
    where: {
        email,
    },
  });
};
User.findById= async function(id)
{
  return User.findByPk(id);
};

module.exports =User;
