const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./routes/index");
const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI =
  "mongodb+srv://tb_User:thebeautifulone@team-beautiful.t0a84.mongodb.net/tb_User?retryWrites=true&w=majority";
const app = express();
const PORT = 3001;
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", router);
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
});
mongoose.connection.once("open", function () {
  console.log("Connected to the Database.");
});
mongoose.connection.on("error", function (error) {
  console.log("Mongoose Connection Error : " + error);
});
app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}.`);
});