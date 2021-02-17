const express = require("express");
const formidable = require("express-formidable");
require("dotenv").config();
const cors = require("cors");

// SERVER CREATED
const app = express();
app.use(formidable());
app.use(cors());

// IMPORT ROAD
const characterRoad = require("./routes/character");
app.use(characterRoad);
const comicsRoad = require("./routes/comics");
app.use(comicsRoad);

// ERROR MANAGEMENT
app.all("*", (req, res) => {
  res.status(404).json({ error: "Route don't exist" });
});

app.listen(process.env.PORT, () => {
  console.log("Server started");
});
