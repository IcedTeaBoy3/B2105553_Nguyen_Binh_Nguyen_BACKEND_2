const express = require("express");
const cors = require("cors");
const app = express();
// Middleware to enable CORS
app.use(cors());
// Middleware to parse JSON
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to contact book application." });
});

module.exports = app;
