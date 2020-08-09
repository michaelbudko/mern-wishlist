const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema
const ItemSchema = new Schema({
    userName: {
        type: String,
        default: "Test User"
    },
    itemName: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    secret: {
        type: Boolean,
        default: false
    }
});

module.exports = Item = mongoose.model('item', ItemSchema);