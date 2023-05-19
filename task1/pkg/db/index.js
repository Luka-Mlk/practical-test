const mongoose = require("mongoose");
const config = require("../config");
// const { MONGO_USERNAME, MONGO_PASSWORD } = process.env;
const { MONGO_USERNAME, MONGO_PASSWORD } = config.get("development");

// const uri = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.kl8unpa.mongodb.net/?retryWrites=true&w=majority`;
const uri = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.bqiwtz7.mongodb.net/?retryWrites=true&w=majority`;

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected!");
  } catch (err) {
    console.log(err);
  }
}

connect();
