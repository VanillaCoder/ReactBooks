// dependencies
const express = require("express");
const path = require("path");
const mongoose = require('mongoose');
const routes = require('./routes')
require('dotenv').config()

const PORT = process.env.PORT || 3001;

// express app up and runnin
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// DB: Config
// =============================================================
const mongodb = require('./config/config').MONGODB_URI;

// DB: Require Models
// =============================================================
const db = ('./models/book');

// Mongoose: Connect to MongoDB
// =============================================================
mongoose
  .connect(mongodb)
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

// Server: Requires Routes
// =============================================================
app.use(routes);

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
