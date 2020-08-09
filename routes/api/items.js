const express = require("express");
const router = express.Router();

//item model
const Item = require("../../models/item");

// @route   GET api/items
// @desc    get all items
// @access  public
router.get("/", (req, res) => {
    Item.find()
        .sort({date: -1})
        .then(items => res.json(items));
});

// @route   POST api/items
// @desc    post a new item
// @access  public
router.post("/", (req, res) => {
    const newItem = new Item({
        itemName: req.body.itemName,
        userName: req.body.userName,
        secret: req.body.secret
    });
    newItem.save()
        .then(item => res.json(item));
});

// @route   DELETE api/items/:id
// @desc    delete an item
// @access  public
router.delete("/:id", (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({item: item, success: true})))
        .catch(err => res.status(404).json({success: false}));
});


module.exports = router;