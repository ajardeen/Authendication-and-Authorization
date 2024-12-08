const mongoose = require("mongoose");
require("dotenv").config();

const connectMongoDB = () => {
  try {
    mongoose.connect(process.env.MONGOBD_URI);
    console.log("Successfully Database Connected");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectMongoDB;
