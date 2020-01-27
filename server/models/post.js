let mongoose = require("mongoose");
let moment = require("moment");

let PostSchema = new mongoose.Schema({
    slug: {
        type: String,
        required: true,
        unique: true,
        default: ""
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    imageURL: String,
    date: {
        type: String,
        required: true,
        default: "",
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
        required: true,
        default: []
    }],
    tag: {
        type: String,
        required: true,
        default: ""
    },
    minutes: {
        type: String
    }
});

module.exports = mongoose.model("Post", PostSchema);