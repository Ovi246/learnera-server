const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const data = require("./data/fakeData.json");

app.get("/", (req, res) => {
  res.send("API Running");
});

app.get("/courses", (req, res) => {
  res.send(data);
});

app.listen(port, () => {
  console.log("Dragon News Server running on port", port);
});
