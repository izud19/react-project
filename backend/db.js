const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/db_buku");


const db = mongoose.connection;

db.on("error", console.error.bind(console, "yahhh, ko belum nyambung sihh"));

db.once("open", () => {
  console.log("udh nyambung ke server nihh!")
});
