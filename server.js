const express = require("express");
const mongoose = require("mongoose");
// const cors = require("cors");
const router = require("./routes/index");
const paths = require("path");
const PORT = process.env.PORT || 3001;
require("dotenv").config();


const MONGODB_URI = process.env.MONGODB_URI;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", router);

// Database connection code.
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
});
mongoose.connection.once("open", function () {
  console.log("Connected to the Database.");
});
mongoose.connection.on("error", function (error) {
  console.log("Mongoose Connection Error : " + error);
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}.`);
});
