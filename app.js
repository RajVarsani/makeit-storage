require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var cors = require("cors");
app.use(cors());

app.listen(process.env.PORT || 8000, () => {
  console.log("Server Connceted");
});
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`Server is running }`);
});
