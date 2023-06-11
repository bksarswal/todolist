const express = require("express");

const mongoose = require("mongoose");
require("dotenv").config();

const cors = require("cors");

const routes = require("./routes/ToDoRoute");
const db = require('./DB/Db')
const app = express();
const PORT = 9876;

app.use(express.json());
app.use(cors());



// Routes
app.use(routes);

app.listen(PORT, () => {
    console.log("Server running on port " + PORT)});