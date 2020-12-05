const express = require("express");
const cors = require("cors");
const tweet = require("./tweet");
const app = express();

app.get("/", function (req, res) {
  tweet();
  res.send("OK");
  res.statusCode = 200;
});

app.use(cors());

app.listen(process.env.PORT || 3333);
