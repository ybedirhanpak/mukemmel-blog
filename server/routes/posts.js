const express = require("express");
const router = express.Router();
const PostModel = require("../models/post");
const moment = require("moment");
const randomImageURL = require("../helpers/image-generator");

/**
 * Returns all posts
 */
router.get("/posts", (req, res) => {
    console.log("Request for getting all posts");
    PostModel.find({})
        .then(posts => {
            res.send(posts);
        })
        .catch(err => {
            res.status(500).send({ message: err });
        })
});

/**
 * Returns a post with given postId
 */
router.get("/posts/id/:postId", (req, res) => {
    console.log("Request for getting post with post Id: ", req.params.postId);
    PostModel.findById(req.params.postId)
        .then(post => {
            res.status(200).send(post);
        })
        .catch(err => {
            res.status(500).send({ message: err });
        })
})

/**
 * Returns a post with given post url ( slug )
 */
router.get("/posts/slug/:postURL", (req, res) => {
    console.log("Request for getting post with post slug: ", req.params.postURL);
    PostModel.findOne({ slug: req.params.postURL })
        .then(post => {
            res.status(200).send(post);
        })
        .catch(err => {
            res.status(500).send({ message: err });
        })
})

/**
 * Creates a post
 */
router.post("/posts", (req, res) => {
    console.log("Request for creating post with post: ", req.body);
    const imageURL = req.body.imageURL ? req.body.imageURL : randomImageURL();
    console.log("image url", imageURL);
    new PostModel({
        ...req.body,
        imageURL: imageURL,
        date: moment().format("D.M.Y HH:mm")
    })
        .save()
        .then((post) => post.json())
        .then((post) => res.send(post))
        .catch(err => {
            res.status(500).send({ message: err })
        })
})

module.exports = router;