const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://user:name@cluster0.5rjwc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "error connecting to db"));

db.once("open", function () {
  console.log("Successfully connected to the database");
});
