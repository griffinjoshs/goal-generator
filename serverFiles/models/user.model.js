// user.model
const { DataTypes, Sequelize } = require("sequelize");
const { sequelize } = require("../config/sqlConfig");

const User = sequelize.define("Users", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
  },
  coins: {
    type: DataTypes.INTEGER,
    defaultValue: 10,
  },
  points: {
    type: DataTypes.INTEGER,
    defaultValue: 10,
  },
  resetPasswordToken: {
    type: DataTypes.STRING,
  },
  resetPasswordExpires: {
    type: DataTypes.DATE,
  },
});

module.exports = User;
