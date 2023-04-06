// sqlConfig.js
const { Sequelize } = require("sequelize");

const config = {
  database: {
    username: "your_mysql_username",
    password: "your_mysql_password",
    database: "your_database_name",
    host: "your_mysql_host",
    dialect: "mysql",
  },
};

const sequelize = new Sequelize(
  config.database.database,
  config.database.username,
  config.database.password,
  {
    host: config.database.host,
    dialect: config.database.dialect,
  }
);

module.exports = sequelize;
