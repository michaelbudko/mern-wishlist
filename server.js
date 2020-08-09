const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const items = require("./routes/api/items");

const app = express();

//bodyparser middleware 
app.use(bodyParser.json());

//routes
app.use("/api/items", items)

//db config
const db = require("./config/keys").mongoURI;
mongoose.connect(db)
    .then(() => console.log("Successfully connected to database"))
    .catch(err => console.log(err));

//port 
const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server started on port ${port}"));