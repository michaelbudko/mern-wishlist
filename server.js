const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require ("path");

const items = require("./routes/api/items");

const app = express();

//bodyparser middleware 
app.use(bodyParser.json());

//routes
app.use("/api/items", items)

//production server in heroku
if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "idex.html"))
    });
}

//db config
const db = require("./config/keys").mongoURI;
mongoose.connect(db)
    .then(() => console.log("Successfully connected to database"))
    .catch(err => console.log(err));

//port 
const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server started on port ${port}"));