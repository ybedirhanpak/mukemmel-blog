const express = require("express");
const router = express.Router();
const TagModel = require("../models/tag");

//Get
router.get("/tags", (req, res) => {
    console.log("Request for getting all tags");
    TagModel.find({})
        .then((tags) => {
            res.send(tags);
        })
        .catch((err) => {
            res.status(500).send({ message: err })
        })
})

//Create
router.post("/tags", (req, res) => {
    console.log("Request for creating tag: ", req.body);
    new TagModel(req.body)
        .save()
        .then((tag) => res.send(tag))
        .catch((err) => {
            res.status(500).send({ message: err });
        })

})

module.exports = router;