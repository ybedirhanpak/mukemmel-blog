let mongoose = require("mongoose");

let PostSchema = new mongoose.Schema({
    slug: String,
    title: String,
    content: String,
    date: String
});

module.exports = mongoose.model("Post", PostSchema);