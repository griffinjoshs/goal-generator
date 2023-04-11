// sql config
const Sequelize = require("sequelize");
const User = require("../models/user.model");

const config = {
  database: {
    username: "root",
    password: "",
    database: "goalsDb",
    host: "127.0.0.1",
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
    define: {
      freezeTableName: true,
    },
  }
);

// Function to test the connection
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection to the database has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

// Call the function to test the connection
testConnection();

// Sync models with the database
sequelize
  .sync({ force: false }) 
  // Set to true if you want to recreate the tables (not recommended for production)
  .then(() => {
    // console.log("Database & tables created!");
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
  });

  module.exports = {
    sequelize,
    testConnection
  };